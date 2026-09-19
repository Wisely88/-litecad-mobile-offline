(() => {
  'use strict';

  const VERSION = 'litecad-v7-20260919-2';
  const ENGINE_CACHE = VERSION + '-engine';
  const APP_CACHE = VERSION + '-app';

  const $ = id => document.getElementById(id);
  const home = $('home');
  const viewer = $('viewer');
  const prepareBtn = $('prepareBtn');
  const openBtn = $('openBtn');
  const fileInput = $('fileInput');
  const engineText = $('engineText');
  const progress = $('progress');
  const progressText = $('progressText');
  const barFill = $('barFill');
  const errorBox = $('errorBox');
  const backBtn = $('backBtn');
  const fileName = $('fileName');
  const message = $('message');
  const messageTitle = $('messageTitle');
  const messageText = $('messageText');
  const spinner = $('spinner');
  const canvas = $('cadCanvas');
  const ctx = canvas.getContext('2d', { alpha: false });
  const zoomOut = $('zoomOut');
  const zoomIn = $('zoomIn');
  const fitBtn = $('fitBtn');
  const zoomValue = $('zoomValue');

  let worker = null;
  let workerTimer = null;
  let zoom = 1;
  let bbox = null;
  let segmentBatches = [];
  let renderToken = 0;
  let currentName = '';

  const engineFiles = [
    './engine/ios-dwg-worker.js',
    './engine/libredwg-lowmem.js',
    './engine/libredwg-runtime.js',
    './engine/libredwg-web.wasm'
  ];

  function setError(text) {
    errorBox.textContent = text || '';
    errorBox.hidden = !text;
  }

  function updateZoom() {
    zoomValue.textContent = Math.round(zoom * 100) + '%';
    zoomOut.disabled = zoom <= 0.5;
    zoomIn.disabled = zoom >= 4;
  }

  function cleanupWorker() {
    if (workerTimer !== null) {
      clearTimeout(workerTimer);
      workerTimer = null;
    }
    if (worker) {
      worker.terminate();
      worker = null;
    }
  }

  function cleanupDrawing() {
    cleanupWorker();
    renderToken++;
    segmentBatches = [];
    bbox = null;
    currentName = '';
    canvas.hidden = true;
    const c = canvas.getContext('2d');
    if (c) c.clearRect(0, 0, canvas.width, canvas.height);
    zoom = 1;
    updateZoom();
  }

  function showMessage(title, text, isError) {
    message.hidden = false;
    message.classList.toggle('error', !!isError);
    spinner.hidden = !!isError;
    messageTitle.textContent = title;
    messageText.textContent = text || '';
    canvas.hidden = true;
  }

  async function clearLegacyState() {
    try {
      const regs = await navigator.serviceWorker?.getRegistrations?.() || [];
      const ownScope = new URL('./', location.href).href;
      for (const reg of regs) {
        if (
          reg.scope.includes('/-litecad-mobile-offline/') &&
          reg.scope !== ownScope
        ) {
          await reg.unregister();
        }
      }
    } catch {}

    try {
      const keys = await caches.keys();
      await Promise.all(keys
        .filter(key => key.startsWith('litecad-') && !key.startsWith(VERSION))
        .map(key => caches.delete(key)));
    } catch {}
  }

  async function engineReady() {
    try {
      const cache = await caches.open(ENGINE_CACHE);
      for (const url of engineFiles) {
        if (!(await cache.match(url))) return false;
      }
      return true;
    } catch {
      return false;
    }
  }

  async function cacheOne(cache, url, index, total) {
    const pct = Math.round((index / total) * 100);
    barFill.style.width = pct + '%';
    progressText.textContent = '正在缓存 ' + index + '/' + total + '：' + url.split('/').pop();

    const response = await fetch(url + '?v=' + encodeURIComponent(VERSION), {
      cache: 'reload',
      credentials: 'same-origin'
    });
    if (!response.ok) throw new Error(url + ' HTTP ' + response.status);
    await cache.put(url, response);
  }

  async function prepareOffline() {
    setError('');
    prepareBtn.disabled = true;
    progress.hidden = false;
    barFill.style.width = '0%';

    try {
      await clearLegacyState();

      if (!('caches' in window) || !('serviceWorker' in navigator)) {
        throw new Error('当前浏览器不支持离线缓存。');
      }

      const appCache = await caches.open(APP_CACHE);
      const appFiles = ['./', './index.html', './v7.css', './v7.js', './manifest.webmanifest'];
      for (let i = 0; i < appFiles.length; i++) {
        await cacheOne(appCache, appFiles[i], i + 1, appFiles.length + engineFiles.length);
      }

      const engineCache = await caches.open(ENGINE_CACHE);
      for (let i = 0; i < engineFiles.length; i++) {
        await cacheOne(engineCache, engineFiles[i], appFiles.length + i + 1, appFiles.length + engineFiles.length);
      }

      progressText.textContent = '正在启用离线 Service Worker…';
      await navigator.serviceWorker.register('./sw.js?v=' + encodeURIComponent(VERSION), { scope: './' });
      await navigator.serviceWorker.ready;

      localStorage.setItem('litecad-v7-ready', VERSION);
      barFill.style.width = '100%';
      progressText.textContent = '离线引擎已缓存完成。';
      engineText.textContent = '已完成。现在可以断网打开 LiteCAD v7。';
      prepareBtn.textContent = '离线引擎已准备好';
    } catch (error) {
      setError('离线引擎准备失败：' + (error && error.message ? error.message : String(error)));
      progressText.textContent = '没有完成。';
      prepareBtn.disabled = false;
    }
  }

  function progressLabel(stage) {
    const map = {
      'worker-start': '正在启动 DWG Worker…',
      'engine-loading': '正在载入低内存 LibreDWG…',
      'engine-ready': '引擎已就绪，正在读取 DWG…',
      'dwg-read': 'DWG 已读取，正在解析实体…',
      'converted': '实体已解析，正在提取轻量几何…',
      'geometry-scan': '正在扫描模型空间几何…',
      'geometry': '正在展开块和线段…'
    };
    return map[stage] || '正在解析 DWG…';
  }

  function setCanvasSize() {
    const stage = $('stage');
    const rect = stage.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.max(1, Math.floor(rect.width));
    const h = Math.max(1, Math.floor(rect.height));
    const pw = Math.max(1, Math.floor(w * dpr));
    const ph = Math.max(1, Math.floor(h * dpr));

    if (canvas.width !== pw || canvas.height !== ph) {
      canvas.width = pw;
      canvas.height = ph;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
    }
    return { w, h, dpr };
  }

  function drawBatch(batch, transform) {
    const c = ctx;
    if (!c) return;
    c.save();
    c.setTransform(
      transform.s * transform.dpr,
      0,
      0,
      -transform.s * transform.dpr,
      transform.tx * transform.dpr,
      transform.ty * transform.dpr
    );
    c.strokeStyle = '#8fdfff';
    c.lineWidth = 1 / Math.max(transform.s * transform.dpr, 0.000001);
    c.beginPath();

    for (let i = 0; i + 3 < batch.length; i += 4) {
      c.moveTo(batch[i], batch[i + 1]);
      c.lineTo(batch[i + 2], batch[i + 3]);
    }
    c.stroke();
    c.restore();
  }

  function redraw() {
    if (!bbox || !segmentBatches.length || !ctx) return;
    const token = ++renderToken;
    const { w, h, dpr } = setCanvasSize();

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = '#020609';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const bw = Math.max(1e-9, bbox.maxX - bbox.minX);
    const bh = Math.max(1e-9, bbox.maxY - bbox.minY);
    const pad = 18;
    const fit = Math.max(1e-9, Math.min((w - pad * 2) / bw, (h - pad * 2) / bh));
    const s = fit * zoom;
    const drawnW = bw * s;
    const drawnH = bh * s;
    const left = (w - drawnW) / 2;
    const top = (h - drawnH) / 2;

    const transform = {
      s,
      dpr,
      tx: left - bbox.minX * s,
      ty: top + bbox.maxY * s
    };

    let index = 0;
    const drawFrame = () => {
      if (token !== renderToken) return;
      const end = Math.min(index + 5, segmentBatches.length);
      for (; index < end; index++) {
        drawBatch(segmentBatches[index], transform);
      }
      if (index < segmentBatches.length) {
        requestAnimationFrame(drawFrame);
      }
    };
    requestAnimationFrame(drawFrame);
  }

  async function openDwg(file) {
    if (!(await engineReady())) {
      setError('请先点“准备离线引擎”，等它显示缓存完成后再打开 DWG。');
      return;
    }

    setError('');
    cleanupDrawing();
    currentName = file.name;
    home.hidden = true;
    viewer.hidden = false;
    fileName.textContent = file.name;
    showMessage('准备读取 DWG…', '这次不再生成 SVG，解析后直接输出轻量线段给 Canvas。', false);

    try {
      const buffer = await file.arrayBuffer();
      worker = new Worker('./engine/ios-dwg-worker.js?v=' + encodeURIComponent(VERSION), { type: 'module' });

      worker.onmessage = event => {
        const data = event.data || {};

        if (data.type === 'progress') {
          showMessage(progressLabel(String(data.stage || '')), data.detail ? String(data.detail) : '', false);
          return;
        }

        if (data.type === 'segments' && data.buffer instanceof ArrayBuffer) {
          segmentBatches.push(new Float32Array(data.buffer));
          const total = segmentBatches.reduce((sum, batch) => sum + batch.length / 4, 0);
          showMessage('正在接收轻量几何…', '已接收约 ' + total.toLocaleString() + ' 条线段', false);
          return;
        }

        if (data.type === 'done' && data.ok && data.bbox) {
          bbox = data.bbox;
          cleanupWorker();
          message.hidden = true;
          canvas.hidden = false;
          zoom = 1;
          updateZoom();

          const notes = [];
          notes.push((data.segments || 0).toLocaleString() + ' 条线段');
          notes.push((data.entities || 0).toLocaleString() + ' 个实体');
          if (data.skipped) notes.push('跳过 ' + Number(data.skipped).toLocaleString() + ' 个重型/暂不支持实体');
          if (data.truncated) notes.push('为保护内存已限制到 150 万线段');
          fileName.textContent = currentName + ' · ' + notes.join(' · ');

          redraw();
          return;
        }

        if (data.ok === false) {
          showMessage('DWG 解析失败', String(data.error || 'Worker 返回失败。'), true);
          cleanupWorker();
        }
      };

      worker.onerror = event => {
        const detail = [
          event.message || 'DWG Worker 异常退出。',
          event.filename ? '文件：' + event.filename : '',
          event.lineno ? '行：' + event.lineno : ''
        ].filter(Boolean).join(' · ');
        showMessage('DWG Worker 启动失败', detail, true);
        cleanupWorker();
      };

      workerTimer = setTimeout(() => {
        showMessage('DWG 解析超时', '超过 240 秒，已停止 Worker。', true);
        cleanupWorker();
      }, 240000);

      worker.postMessage({ buffer }, [buffer]);
    } catch (error) {
      showMessage('DWG 启动失败', error && error.message ? error.message : String(error), true);
      cleanupWorker();
    }
  }

  prepareBtn.onclick = prepareOffline;
  openBtn.onclick = () => fileInput.click();

  fileInput.onchange = () => {
    const file = fileInput.files && fileInput.files[0];
    if (!file) return;
    const ext = (file.name.split('.').pop() || '').toLowerCase();

    if (ext === 'dwg') {
      openDwg(file);
    } else if (ext === 'dxf') {
      setError('v7 当前先稳定 DWG 大图路径；DXF 会在 DWG 稳定后接回同一 Canvas。');
    } else {
      setError('请选择 .dwg 或 .dxf 文件。');
    }
    fileInput.value = '';
  };

  backBtn.onclick = () => {
    cleanupDrawing();
    viewer.hidden = true;
    home.hidden = false;
  };

  zoomOut.onclick = () => {
    zoom = Math.max(0.5, Math.round((zoom - 0.25) * 100) / 100);
    updateZoom();
    redraw();
  };

  zoomIn.onclick = () => {
    zoom = Math.min(4, Math.round((zoom + 0.25) * 100) / 100);
    updateZoom();
    redraw();
  };

  fitBtn.onclick = () => {
    zoom = 1;
    updateZoom();
    redraw();
  };

  window.addEventListener('resize', () => {
    if (!canvas.hidden && bbox) redraw();
  });

  updateZoom();
  clearLegacyState().finally(async () => {
    if (localStorage.getItem('litecad-v7-ready') === VERSION && await engineReady()) {
      engineText.textContent = '离线引擎已缓存完成，可直接打开 DWG。';
      prepareBtn.textContent = '离线引擎已准备好';
    } else {
      prepareBtn.disabled = false;
    }
  });
})();

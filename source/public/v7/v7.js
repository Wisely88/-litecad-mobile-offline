(() => {
  'use strict';

  const VERSION = 'litecad-v7-20260919-1';
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
  const svgImage = $('svgImage');
  const zoomOut = $('zoomOut');
  const zoomIn = $('zoomIn');
  const fitBtn = $('fitBtn');
  const zoomValue = $('zoomValue');

  let worker = null;
  let workerTimer = null;
  let svgUrl = '';
  let scale = 1;

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
    zoomValue.textContent = Math.round(scale * 100) + '%';
    svgImage.style.width = (scale * 100) + '%';
    zoomOut.disabled = scale <= 0.5;
    zoomIn.disabled = scale >= 4;
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
    if (svgUrl) {
      URL.revokeObjectURL(svgUrl);
      svgUrl = '';
    }
    svgImage.removeAttribute('src');
    svgImage.hidden = true;
    scale = 1;
    updateZoom();
  }

  function showMessage(title, text, isError) {
    message.hidden = false;
    message.classList.toggle('error', !!isError);
    spinner.hidden = !!isError;
    messageTitle.textContent = title;
    messageText.textContent = text || '';
    svgImage.hidden = true;
  }

  async function clearLegacyState() {
    try {
      const regs = await navigator.serviceWorker?.getRegistrations?.() || [];
      for (const reg of regs) {
        if (reg.scope.includes('/-litecad-mobile-offline/') && !reg.scope.includes('/v7/')) {
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
      const reg = await navigator.serviceWorker.register('./sw.js?v=' + encodeURIComponent(VERSION), { scope: './' });
      await navigator.serviceWorker.ready;

      localStorage.setItem('litecad-v7-ready', VERSION);
      barFill.style.width = '100%';
      progressText.textContent = '离线引擎已缓存完成。';
      engineText.textContent = '已完成。现在可以关闭网络后再打开 LiteCAD v7。';
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
      'converted': '实体已解析，正在生成 SVG…'
    };
    return map[stage] || '正在解析 DWG…';
  }

  async function openDwg(file) {
    if (!(await engineReady())) {
      setError('请先点“准备离线引擎”，等它显示缓存完成后再打开 DWG。');
      return;
    }

    setError('');
    home.hidden = true;
    viewer.hidden = false;
    fileName.textContent = file.name;
    showMessage('准备读取 DWG…', '文件只在手机本机处理。', false);

    try {
      const buffer = await file.arrayBuffer();
      worker = new Worker('./engine/ios-dwg-worker.js', { type: 'module' });

      worker.onmessage = event => {
        const data = event.data || {};
        if (data.type === 'progress') {
          showMessage(progressLabel(String(data.stage || '')), data.detail ? String(data.detail) : '', false);
          return;
        }
        if (data.ok && typeof data.svg === 'string' && data.svg.length) {
          svgUrl = URL.createObjectURL(new Blob([data.svg], { type: 'image/svg+xml' }));
          svgImage.src = svgUrl;
          svgImage.hidden = false;
          message.hidden = true;
          scale = 1;
          updateZoom();
          cleanupWorker();
          return;
        }
        showMessage('DWG 解析失败', String(data.error || 'Worker 返回失败。'), true);
        cleanupWorker();
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
        showMessage('DWG 解析超时', '超过 180 秒，已停止 Worker。', true);
        cleanupWorker();
      }, 180000);

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
      setError('v7 安全启动版先只验证 DWG。DXF 不受这个 Safari 启动问题影响，后续再接回。');
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
  zoomOut.onclick = () => { scale = Math.max(.5, scale - .25); updateZoom(); };
  zoomIn.onclick = () => { scale = Math.min(4, scale + .25); updateZoom(); };
  fitBtn.onclick = () => { scale = 1; updateZoom(); };

  updateZoom();
  clearLegacyState().finally(async () => {
    if (localStorage.getItem('litecad-v7-ready') === VERSION && await engineReady()) {
      engineText.textContent = '离线引擎已缓存完成，可直接打开 DWG。';
      prepareBtn.textContent = '离线引擎已准备好';
    }
  });
})();

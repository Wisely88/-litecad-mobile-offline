(() => {
  'use strict';

  const VERSION = 'litecad-v10-20260919-1';
  const ENGINE_CACHE = VERSION + '-engine';
  const APP_CACHE = VERSION + '-app';
  const MAX_RENDER_DEPTH = 12;
  const TASKS_PER_FRAME = 450;

  const $ = id => document.getElementById(id);
  const home = $('home');
  const viewer = $('viewer');
  const stage = $('stage');
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
  const fullBtn = $('fullBtn');
  const zoomValue = $('zoomValue');

  let worker = null;
  let workerTimer = null;
  let renderToken = 0;
  let renderScheduled = false;

  let rootDef = null;
  const blockDefs = new Map();
  let mainBBox = null;
  let fullBBox = null;
  let activeBBox = null;

  let zoom = 1;
  let panX = 0;
  let panY = 0;
  let currentName = '';

  const pointers = new Map();
  let dragPointerId = null;
  let dragLast = null;
  let pinch = null;

  const engineFiles = [
    './engine/ios-dwg-worker.js',
    './engine/libredwg-lowmem.js',
    './engine/libredwg-runtime.js',
    './engine/libredwg-web.wasm'
  ];

  const identity = [1, 0, 0, 1, 0, 0];

  function setError(text) {
    errorBox.textContent = text || '';
    errorBox.hidden = !text;
  }

  function bboxValid(b) {
    return b &&
      [b.minX, b.minY, b.maxX, b.maxY].every(Number.isFinite) &&
      b.maxX >= b.minX &&
      b.maxY >= b.minY;
  }

  function multiply(a, b) {
    return [
      a[0] * b[0] + a[2] * b[1],
      a[1] * b[0] + a[3] * b[1],
      a[0] * b[2] + a[2] * b[3],
      a[1] * b[2] + a[3] * b[3],
      a[0] * b[4] + a[2] * b[5] + a[4],
      a[1] * b[4] + a[3] * b[5] + a[5]
    ];
  }

  function apply(m, x, y) {
    return {
      x: m[0] * x + m[2] * y + m[4],
      y: m[1] * x + m[3] * y + m[5]
    };
  }

  function setCanvasSize() {
    const rect = stage.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cssW = Math.max(1, Math.floor(rect.width));
    const cssH = Math.max(1, Math.floor(rect.height));
    const pxW = Math.max(1, Math.floor(cssW * dpr));
    const pxH = Math.max(1, Math.floor(cssH * dpr));

    if (canvas.width !== pxW || canvas.height !== pxH) {
      canvas.width = pxW;
      canvas.height = pxH;
      canvas.style.width = cssW + 'px';
      canvas.style.height = cssH + 'px';
    }

    return { cssW, cssH, dpr };
  }

  function getViewState() {
    if (!bboxValid(activeBBox)) return null;

    const { cssW, cssH, dpr } = setCanvasSize();
    const bw = Math.max(1e-9, activeBBox.maxX - activeBBox.minX);
    const bh = Math.max(1e-9, activeBBox.maxY - activeBBox.minY);
    const pad = 22;
    const fit = Math.max(
      1e-9,
      Math.min(
        Math.max(1, cssW - pad * 2) / bw,
        Math.max(1, cssH - pad * 2) / bh
      )
    );

    const s = fit * zoom;
    const cx = (activeBBox.minX + activeBBox.maxX) / 2;
    const cy = (activeBBox.minY + activeBBox.maxY) / 2;
    const tx = cssW / 2 + panX - cx * s;
    const ty = cssH / 2 + panY + cy * s;

    return {
      cssW,
      cssH,
      dpr,
      fit,
      s,
      cx,
      cy,
      tx,
      ty,
      matrix: [s, 0, 0, -s, tx, ty]
    };
  }

  function screenToWorld(x, y) {
    const v = getViewState();
    if (!v) return { x: 0, y: 0 };
    return {
      x: (x - v.tx) / v.s,
      y: (v.ty - y) / v.s
    };
  }

  function setZoomAround(nextZoom, screenX, screenY) {
    if (!bboxValid(activeBBox)) return;

    const world = screenToWorld(screenX, screenY);
    zoom = Math.min(16, Math.max(0.2, nextZoom));

    const v = getViewState();
    if (!v) return;

    panX = screenX - v.cssW / 2 - (world.x - v.cx) * v.s;
    panY = screenY - v.cssH / 2 + (world.y - v.cy) * v.s;

    updateZoom();
    scheduleRedraw();
  }

  function updateZoom() {
    zoomValue.textContent = Math.round(zoom * 100) + '%';
    zoomOut.disabled = zoom <= 0.2;
    zoomIn.disabled = zoom >= 16;
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
    renderScheduled = false;
    blockDefs.clear();
    rootDef = null;
    mainBBox = null;
    fullBBox = null;
    activeBBox = null;
    zoom = 1;
    panX = 0;
    panY = 0;
    currentName = '';
    pointers.clear();
    dragPointerId = null;
    dragLast = null;
    pinch = null;
    stage.classList.remove('dragging');

    canvas.hidden = true;
    if (ctx) {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = '#020609';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
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

  function buildPath(chunks) {
    const path = new Path2D();

    for (const buffer of chunks || []) {
      const arr = new Float32Array(buffer);
      for (let i = 0; i + 3 < arr.length; i += 4) {
        path.moveTo(arr[i], arr[i + 1]);
        path.lineTo(arr[i + 2], arr[i + 3]);
      }
    }

    return path;
  }

  function decodeDef(data) {
    const groups = (data.groups || []).map(group => ({
      name: group.name,
      matrices: new Float32Array(group.matrices)
    }));

    return {
      path: buildPath(data.chunks || []),
      groups,
      bbox: data.bbox
    };
  }

  function bboxVisible(bbox, worldMatrix, view) {
    if (!bboxValid(bbox)) return true;

    const screenM = multiply(view.matrix, worldMatrix);
    const p1 = apply(screenM, bbox.minX, bbox.minY);
    const p2 = apply(screenM, bbox.maxX, bbox.minY);
    const p3 = apply(screenM, bbox.maxX, bbox.maxY);
    const p4 = apply(screenM, bbox.minX, bbox.maxY);

    const minX = Math.min(p1.x, p2.x, p3.x, p4.x);
    const maxX = Math.max(p1.x, p2.x, p3.x, p4.x);
    const minY = Math.min(p1.y, p2.y, p3.y, p4.y);
    const maxY = Math.max(p1.y, p2.y, p3.y, p4.y);
    const margin = 8;

    return !(
      maxX < -margin ||
      minX > view.cssW + margin ||
      maxY < -margin ||
      minY > view.cssH + margin
    );
  }

  function drawPath(def, worldMatrix, view) {
    if (!ctx || !def || !def.path) return;
    if (!bboxVisible(def.bbox, worldMatrix, view)) return;

    const m = multiply(view.matrix, worldMatrix);
    const dpr = view.dpr;

    ctx.setTransform(
      m[0] * dpr,
      m[1] * dpr,
      m[2] * dpr,
      m[3] * dpr,
      m[4] * dpr,
      m[5] * dpr
    );

    const det = Math.abs(worldMatrix[0] * worldMatrix[3] - worldMatrix[1] * worldMatrix[2]);
    const instanceScale = Math.sqrt(Math.max(det, 1e-8));
    ctx.lineWidth = Math.max(
      0.000001,
      0.82 / Math.max(view.s * instanceScale, 1e-8)
    );
    ctx.strokeStyle = '#8fdfff';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.stroke(def.path);
  }

  function scheduleRedraw() {
    if (renderScheduled) return;
    renderScheduled = true;

    requestAnimationFrame(() => {
      renderScheduled = false;
      redraw();
    });
  }

  function redraw() {
    if (!ctx || !rootDef || !bboxValid(activeBBox)) return;

    const token = ++renderToken;
    const view = getViewState();
    if (!view) return;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = '#020609';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const tasks = [
      { kind: 'def', def: rootDef, matrix: identity, depth: 0 }
    ];

    const processFrame = () => {
      if (token !== renderToken) return;

      let processed = 0;

      while (tasks.length && processed < TASKS_PER_FRAME) {
        const task = tasks.pop();
        processed++;

        if (!task) continue;

        if (task.kind === 'def') {
          if (task.depth > MAX_RENDER_DEPTH) continue;
          if (!bboxVisible(task.def.bbox, task.matrix, view)) continue;

          drawPath(task.def, task.matrix, view);

          if (task.def.groups && task.def.groups.length) {
            tasks.push({
              kind: 'children',
              groups: task.def.groups,
              groupIndex: 0,
              matrixIndex: 0,
              parentMatrix: task.matrix,
              depth: task.depth
            });
          }
          continue;
        }

        if (task.kind === 'children') {
          let gi = task.groupIndex;
          let mi = task.matrixIndex;

          while (gi < task.groups.length) {
            const group = task.groups[gi];
            const matrices = group.matrices;

            if (mi + 5 < matrices.length) {
              tasks.push({
                kind: 'children',
                groups: task.groups,
                groupIndex: gi,
                matrixIndex: mi + 6,
                parentMatrix: task.parentMatrix,
                depth: task.depth
              });

              const child = blockDefs.get(group.name);
              if (child) {
                const local = [
                  matrices[mi],
                  matrices[mi + 1],
                  matrices[mi + 2],
                  matrices[mi + 3],
                  matrices[mi + 4],
                  matrices[mi + 5]
                ];

                const world = multiply(task.parentMatrix, local);

                if (bboxVisible(child.bbox, world, view)) {
                  tasks.push({
                    kind: 'def',
                    def: child,
                    matrix: world,
                    depth: task.depth + 1
                  });
                }
              }
              break;
            }

            gi++;
            mi = 0;
          }
        }
      }

      if (tasks.length && token === renderToken) {
        requestAnimationFrame(processFrame);
      }
    };

    requestAnimationFrame(processFrame);
  }

  function fitMain() {
    if (!bboxValid(mainBBox)) return;
    activeBBox = mainBBox;
    zoom = 1;
    panX = 0;
    panY = 0;
    updateZoom();
    scheduleRedraw();
  }

  function fitFull() {
    if (!bboxValid(fullBBox)) return;
    activeBBox = fullBBox;
    zoom = 1;
    panX = 0;
    panY = 0;
    updateZoom();
    scheduleRedraw();
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
    progressText.textContent =
      '正在缓存 ' + index + '/' + total + '：' + url.split('/').pop();

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
      const appFiles = [
        './',
        './index.html',
        './v7.css',
        './v7.js',
        './manifest.webmanifest'
      ];

      for (let i = 0; i < appFiles.length; i++) {
        await cacheOne(
          appCache,
          appFiles[i],
          i + 1,
          appFiles.length + engineFiles.length
        );
      }

      const engineCache = await caches.open(ENGINE_CACHE);
      for (let i = 0; i < engineFiles.length; i++) {
        await cacheOne(
          engineCache,
          engineFiles[i],
          appFiles.length + i + 1,
          appFiles.length + engineFiles.length
        );
      }

      progressText.textContent = '正在启用离线 Service Worker…';
      await navigator.serviceWorker.register(
        './sw.js?v=' + encodeURIComponent(VERSION),
        { scope: './' }
      );
      await navigator.serviceWorker.ready;

      localStorage.setItem('litecad-v10-ready', VERSION);
      barFill.style.width = '100%';
      progressText.textContent = '离线引擎已缓存完成。';
      engineText.textContent = '已完成。现在可以断网打开 LiteCAD。';
      prepareBtn.textContent = '离线引擎已准备好';
    } catch (error) {
      setError(
        '离线引擎准备失败：' +
        (error && error.message ? error.message : String(error))
      );
      progressText.textContent = '没有完成。';
      prepareBtn.disabled = false;
    }
  }

  function progressLabel(stageName) {
    const map = {
      'worker-start': '正在启动 DWG Worker…',
      'engine-loading': '正在载入低内存 LibreDWG…',
      'engine-ready': '引擎已就绪，正在读取 DWG…',
      'dwg-read': 'DWG 已读取，正在解析实体…',
      'converted': '实体已解析，正在建立块实例场景…',
      'model-first': '正在优先解析模型空间…',
      'definitions': '正在读取实际引用的块…',
      'scene-ready': '场景已建立，正在传输图元…'
    };

    return map[stageName] || '正在解析 DWG…';
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
    showMessage(
      '准备读取 DWG…',
      '这次保留 CAD BLOCK 实例，不再把重复块展开成上百万条线。',
      false
    );

    try {
      const buffer = await file.arrayBuffer();

      worker = new Worker(
        './engine/ios-dwg-worker.js?v=' + encodeURIComponent(VERSION),
        { type: 'module' }
      );

      worker.onmessage = event => {
        const data = event.data || {};

        if (data.type === 'progress') {
          showMessage(
            progressLabel(String(data.stage || '')),
            data.detail ? String(data.detail) : '',
            false
          );
          return;
        }

        if (data.type === 'block') {
          blockDefs.set(data.name, decodeDef(data));
          return;
        }

        if (data.type === 'model') {
          rootDef = decodeDef(data);
          return;
        }

        if (data.type === 'done' && data.ok) {
          cleanupWorker();

          fullBBox = data.fullBBox;
          mainBBox = bboxValid(data.mainBBox) ? data.mainBBox : data.fullBBox;

          if (!rootDef || !bboxValid(fullBBox)) {
            showMessage(
              '场景生成失败',
              'DWG 已解析，但没有收到有效的模型空间场景。',
              true
            );
            return;
          }

          const notes = [
            Number(data.uniqueSegments || 0).toLocaleString() + ' 条唯一基础线段',
            Number(data.instances || 0).toLocaleString() + ' 个块实例',
            Number(data.entities || 0).toLocaleString() + ' 个源实体'
          ];

          if (data.skipped) {
            notes.push(
              '跳过 ' +
              Number(data.skipped).toLocaleString() +
              ' 个填充/注释/暂不支持实体'
            );
          }

          if (data.truncated) {
            notes.push('唯一几何达到 70 万保护上限');
          }

          fileName.textContent = currentName + ' · ' + notes.join(' · ');
          message.hidden = true;
          canvas.hidden = false;

          fitMain();
          return;
        }

        if (data.ok === false) {
          showMessage(
            'DWG 解析失败',
            String(data.error || 'Worker 返回失败。'),
            true
          );
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
        showMessage(
          'DWG 解析超时',
          '超过 240 秒，已停止 Worker。',
          true
        );
        cleanupWorker();
      }, 240000);

      worker.postMessage({ buffer }, [buffer]);
    } catch (error) {
      showMessage(
        'DWG 启动失败',
        error && error.message ? error.message : String(error),
        true
      );
      cleanupWorker();
    }
  }

  function stagePoint(event) {
    const rect = stage.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }

  function distance(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }

  function midpoint(a, b) {
    return {
      x: (a.x + b.x) / 2,
      y: (a.y + b.y) / 2
    };
  }

  function beginPinch() {
    if (pointers.size < 2) {
      pinch = null;
      return;
    }

    const pts = [...pointers.values()].slice(0, 2);
    const mid = midpoint(pts[0], pts[1]);

    pinch = {
      startDistance: Math.max(1, distance(pts[0], pts[1])),
      startZoom: zoom,
      anchorWorld: screenToWorld(mid.x, mid.y)
    };

    dragPointerId = null;
    dragLast = null;
  }

  function updatePinch() {
    if (!pinch || pointers.size < 2) return;

    const pts = [...pointers.values()].slice(0, 2);
    const mid = midpoint(pts[0], pts[1]);
    const dist = Math.max(1, distance(pts[0], pts[1]));
    const nextZoom = Math.min(
      16,
      Math.max(0.2, pinch.startZoom * (dist / pinch.startDistance))
    );

    zoom = nextZoom;
    const v = getViewState();
    if (!v) return;

    panX =
      mid.x -
      v.cssW / 2 -
      (pinch.anchorWorld.x - v.cx) * v.s;
    panY =
      mid.y -
      v.cssH / 2 +
      (pinch.anchorWorld.y - v.cy) * v.s;

    updateZoom();
    scheduleRedraw();
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
      setError('当前先稳定 DWG 大图路径；DXF 会在这套交互稳定后接回同一 Canvas。');
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
    const rect = stage.getBoundingClientRect();
    setZoomAround(
      zoom / 1.25,
      rect.width / 2,
      rect.height / 2
    );
  };

  zoomIn.onclick = () => {
    const rect = stage.getBoundingClientRect();
    setZoomAround(
      zoom * 1.25,
      rect.width / 2,
      rect.height / 2
    );
  };

  fitBtn.onclick = fitMain;
  fullBtn.onclick = fitFull;

  stage.addEventListener('pointerdown', event => {
    if (canvas.hidden || !rootDef) return;

    const p = stagePoint(event);
    pointers.set(event.pointerId, p);

    try {
      stage.setPointerCapture(event.pointerId);
    } catch {}

    if (pointers.size === 1) {
      dragPointerId = event.pointerId;
      dragLast = p;
      pinch = null;
      stage.classList.add('dragging');
    } else if (pointers.size >= 2) {
      beginPinch();
    }
  });

  stage.addEventListener('pointermove', event => {
    if (!pointers.has(event.pointerId)) return;

    const p = stagePoint(event);
    pointers.set(event.pointerId, p);

    if (pointers.size >= 2) {
      updatePinch();
      return;
    }

    if (
      pointers.size === 1 &&
      dragPointerId === event.pointerId &&
      dragLast
    ) {
      panX += p.x - dragLast.x;
      panY += p.y - dragLast.y;
      dragLast = p;
      scheduleRedraw();
    }
  });

  const endPointer = event => {
    pointers.delete(event.pointerId);

    if (pointers.size >= 2) {
      beginPinch();
      return;
    }

    if (pointers.size === 1) {
      const [id, p] = pointers.entries().next().value;
      dragPointerId = id;
      dragLast = p;
      pinch = null;
      return;
    }

    dragPointerId = null;
    dragLast = null;
    pinch = null;
    stage.classList.remove('dragging');
  };

  stage.addEventListener('pointerup', endPointer);
  stage.addEventListener('pointercancel', endPointer);

  stage.addEventListener(
    'wheel',
    event => {
      if (canvas.hidden || !rootDef) return;
      event.preventDefault();

      const p = stagePoint(event);
      const factor = Math.exp(-event.deltaY * 0.0015);
      setZoomAround(zoom * factor, p.x, p.y);
    },
    { passive: false }
  );

  stage.addEventListener('dblclick', event => {
    if (canvas.hidden || !rootDef) return;
    const p = stagePoint(event);
    setZoomAround(zoom * 1.8, p.x, p.y);
  });

  window.addEventListener('resize', () => {
    if (!canvas.hidden && rootDef) scheduleRedraw();
  });

  updateZoom();

  clearLegacyState().finally(async () => {
    if (
      localStorage.getItem('litecad-v10-ready') === VERSION &&
      await engineReady()
    ) {
      engineText.textContent = '离线引擎已缓存完成，可直接打开 DWG。';
      prepareBtn.textContent = '离线引擎已准备好';
    } else {
      prepareBtn.disabled = false;
    }
  });
})();

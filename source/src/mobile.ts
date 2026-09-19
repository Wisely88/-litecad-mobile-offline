import './mobile.css'

type OfflineState = 'checking' | 'ready' | 'failed' | 'unsupported'

const root = document.getElementById('app')
if (!root) throw new Error('#app not found')

root.innerHTML = `
  <main class="m-shell">
    <section id="home" class="m-home">
      <div class="m-brand">
        <div class="m-logo">⌗</div>
        <div>
          <h1>LiteCAD</h1>
          <p>DWG / DXF · iPhone 离线查看</p>
        </div>
      </div>

      <div id="statusCard" class="m-status checking">
        <span class="m-dot"></span>
        <div>
          <strong id="statusTitle">正在准备离线引擎…</strong>
          <p id="statusText">首次会缓存低内存 DWG 引擎，之后可断网使用。</p>
        </div>
      </div>

      <div class="m-open-card">
        <div class="m-file-icon">▱</div>
        <h2>打开本地图纸</h2>
        <p>文件只在手机本机处理，不上传。</p>
        <input id="fileInput" type="file" hidden />
        <button id="openBtn" class="m-primary">选择 DWG / DXF</button>
        <div class="m-badges">
          <span>DWG 低内存</span>
          <span>DXF</span>
          <span>离线</span>
        </div>
      </div>

      <div id="homeError" class="m-error" hidden></div>

      <div class="m-tips">
        <strong>iPhone 专用轻量启动</strong>
        <p>首页不再加载完整 CAD Viewer。DWG 只启动低内存 Worker；DXF 只有在你选择后才按需加载完整 Viewer。</p>
      </div>
    </section>

    <section id="viewer" class="m-viewer" hidden>
      <header class="m-viewer-bar">
        <button id="backBtn" class="m-back">‹ 换图</button>
        <div id="fileName" class="m-file-name"></div>
        <div id="zoomBar" class="m-zoom">
          <button id="zoomOut">−</button>
          <span id="zoomValue">100%</span>
          <button id="zoomIn">＋</button>
          <button id="fitBtn">适应</button>
        </div>
      </header>

      <div id="stage" class="m-stage">
        <div id="message" class="m-message">
          <div class="m-spinner"></div>
          <strong id="messageTitle">正在准备…</strong>
          <p id="messageText"></p>
        </div>
        <img id="svgImage" class="m-svg" hidden alt="DWG drawing" />
        <div id="dxfMount" class="m-dxf-mount" hidden></div>
      </div>
    </section>
  </main>
`

const home = document.getElementById('home') as HTMLElement
const viewer = document.getElementById('viewer') as HTMLElement
const fileInput = document.getElementById('fileInput') as HTMLInputElement
const openBtn = document.getElementById('openBtn') as HTMLButtonElement
const backBtn = document.getElementById('backBtn') as HTMLButtonElement
const fileName = document.getElementById('fileName') as HTMLElement
const homeError = document.getElementById('homeError') as HTMLElement
const statusCard = document.getElementById('statusCard') as HTMLElement
const statusTitle = document.getElementById('statusTitle') as HTMLElement
const statusText = document.getElementById('statusText') as HTMLElement
const message = document.getElementById('message') as HTMLElement
const messageTitle = document.getElementById('messageTitle') as HTMLElement
const messageText = document.getElementById('messageText') as HTMLElement
const svgImage = document.getElementById('svgImage') as HTMLImageElement
const dxfMount = document.getElementById('dxfMount') as HTMLElement
const zoomBar = document.getElementById('zoomBar') as HTMLElement
const zoomOutBtn = document.getElementById('zoomOut') as HTMLButtonElement
const zoomInBtn = document.getElementById('zoomIn') as HTMLButtonElement
const fitBtn = document.getElementById('fitBtn') as HTMLButtonElement
const zoomValue = document.getElementById('zoomValue') as HTMLElement

let worker: Worker | null = null
let workerTimer: number | null = null
let svgUrl = ''
let scale = 1
let dxfUnmount: null | (() => void) = null

function setOfflineState(state: OfflineState) {
  statusCard.className = 'm-status ' + state
  const map = {
    checking: ['正在准备离线引擎…', '首次会缓存低内存 DWG 引擎，之后可断网使用。'],
    ready: ['离线引擎已缓存', '现在可以断开 Wi‑Fi / 蜂窝网络后打开本地 DWG / DXF。'],
    failed: ['离线缓存尚未完成', '保持联网并重新打开一次，等缓存完成后再离线。'],
    unsupported: ['当前浏览器不支持离线安装', '请使用 Safari，并从“分享”添加到主屏幕。']
  } as const
  statusTitle.textContent = map[state][0]
  statusText.textContent = map[state][1]
}

function setHomeError(text: string) {
  homeError.textContent = text
  homeError.hidden = !text
}

function showMessage(title: string, text = '', isError = false) {
  message.hidden = false
  message.classList.toggle('error', isError)
  const spinner = message.querySelector('.m-spinner') as HTMLElement | null
  if (spinner) spinner.hidden = isError
  messageTitle.textContent = title
  messageText.textContent = text
  svgImage.hidden = true
  dxfMount.hidden = true
}

function showViewer(name: string) {
  home.hidden = true
  viewer.hidden = false
  fileName.textContent = name
}

function cleanupWorker() {
  if (workerTimer != null) {
    clearTimeout(workerTimer)
    workerTimer = null
  }
  if (worker) {
    worker.terminate()
    worker = null
  }
}

function cleanupDrawing() {
  cleanupWorker()
  if (svgUrl) {
    URL.revokeObjectURL(svgUrl)
    svgUrl = ''
  }
  if (dxfUnmount) {
    try { dxfUnmount() } catch {}
    dxfUnmount = null
  }
  svgImage.removeAttribute('src')
  svgImage.hidden = true
  dxfMount.innerHTML = ''
  dxfMount.hidden = true
  message.hidden = false
  scale = 1
  updateZoom()
}

function goHome() {
  cleanupDrawing()
  viewer.hidden = true
  home.hidden = false
  fileInput.value = ''
}

function updateZoom() {
  zoomValue.textContent = Math.round(scale * 100) + '%'
  svgImage.style.width = (scale * 100) + '%'
  zoomOutBtn.disabled = scale <= 0.5
  zoomInBtn.disabled = scale >= 4
}

function progressLabel(stage: string) {
  const labels: Record<string, string> = {
    'worker-start': '正在启动低内存 Worker…',
    'engine-loading': '正在加载 LibreDWG 引擎…',
    'engine-ready': '引擎已就绪，正在读取 DWG…',
    'dwg-read': 'DWG 已读取，正在解析实体…',
    'converted': '实体解析完成，正在生成 SVG…'
  }
  return labels[stage] || '正在解析 DWG…'
}

async function openDwg(file: File) {
  showViewer(file.name)
  zoomBar.hidden = false
  showMessage('正在启动低内存模式…', '解析在独立 Worker 中完成，主线程不会加载完整 CAD 数据库。')

  try {
    const buffer = await file.arrayBuffer()
    worker = new Worker('./assets/ios/ios-dwg-worker.js', { type: 'module' })

    worker.onmessage = event => {
      const data = event.data || {}
      if (data.type === 'progress') {
        showMessage(progressLabel(String(data.stage || '')), data.detail ? String(data.detail) : '')
        return
      }

      if (data.ok && typeof data.svg === 'string' && data.svg.length > 0) {
        svgUrl = URL.createObjectURL(new Blob([data.svg], { type: 'image/svg+xml' }))
        svgImage.src = svgUrl
        svgImage.hidden = false
        message.hidden = true
        scale = 1
        updateZoom()
        cleanupWorker()
        return
      }

      showMessage('DWG 解析失败', String(data.error || '低内存 Worker 返回失败。'), true)
      cleanupWorker()
    }

    worker.onerror = event => {
      const detail = [
        event.message || 'DWG Worker 异常退出。',
        event.filename ? '文件：' + event.filename : '',
        event.lineno ? '行：' + event.lineno : ''
      ].filter(Boolean).join(' · ')
      showMessage('DWG Worker 启动失败', detail, true)
      cleanupWorker()
    }

    worker.onmessageerror = () => {
      showMessage('DWG Worker 通信失败', 'Safari 无法读取 Worker 返回的数据。', true)
      cleanupWorker()
    }

    workerTimer = window.setTimeout(() => {
      showMessage('DWG 解析超时', '超过 180 秒，已停止 Worker 以释放内存。', true)
      cleanupWorker()
    }, 180000)

    worker.postMessage({ buffer }, [buffer])
  } catch (error) {
    showMessage('DWG 启动失败', error instanceof Error ? error.message : String(error), true)
    cleanupWorker()
  }
}

async function openDxf(file: File) {
  showViewer(file.name)
  zoomBar.hidden = true
  showMessage('正在按需加载 DXF Viewer…', 'DXF 才会加载完整 CAD Viewer，首页不会提前占用这部分内存。')

  try {
    const mod = await import('./mobileDxf')
    message.hidden = true
    dxfMount.hidden = false
    dxfUnmount = await mod.mountDxfViewer(dxfMount, file)
  } catch (error) {
    showMessage('DXF Viewer 加载失败', error instanceof Error ? error.message : String(error), true)
  }
}

async function onFile(file: File) {
  const ext = file.name.split('.').pop()?.toLowerCase()
  if (ext !== 'dwg' && ext !== 'dxf') {
    setHomeError('请选择 .dwg 或 .dxf 文件。')
    return
  }

  setHomeError('')
  cleanupDrawing()

  if (ext === 'dwg') {
    await openDwg(file)
  } else {
    await openDxf(file)
  }
}

openBtn.onclick = () => fileInput.click()
fileInput.onchange = () => {
  const file = fileInput.files?.[0]
  if (file) void onFile(file)
}
backBtn.onclick = goHome
zoomOutBtn.onclick = () => {
  scale = Math.max(0.5, Math.round((scale - 0.25) * 100) / 100)
  updateZoom()
}
zoomInBtn.onclick = () => {
  scale = Math.min(4, Math.round((scale + 0.25) * 100) / 100)
  updateZoom()
}
fitBtn.onclick = () => {
  scale = 1
  updateZoom()
}

async function waitForActive(reg: ServiceWorkerRegistration) {
  if (reg.active) return
  const worker = reg.installing || reg.waiting
  if (!worker) return
  await new Promise<void>(resolve => {
    const done = () => {
      if (worker.state === 'activated' || worker.state === 'redundant') resolve()
    }
    worker.addEventListener('statechange', done)
    done()
  })
}

async function prepareOffline() {
  if (!('serviceWorker' in navigator) || !('caches' in window)) {
    setOfflineState('unsupported')
    return
  }

  try {
    const currentBase = new URL('./', location.href).href
    const registrations = await navigator.serviceWorker.getRegistrations()

    for (const reg of registrations) {
      const isOldRoot =
        reg.scope.endsWith('/-litecad-mobile-offline/') &&
        reg.scope !== currentBase
      if (isOldRoot) {
        await reg.unregister()
      }
    }

    const reg = await navigator.serviceWorker.register('./sw.js', { scope: './' })
    await waitForActive(reg)

    const cache = await caches.open('litecad-v6-runtime-20260919')
    const urls = new Set<string>([
      new URL('./', location.href).href,
      new URL('./index.html', location.href).href,
      new URL('./manifest.webmanifest', location.href).href,
      new URL('./icon.svg', location.href).href,
      new URL('./assets/ios/ios-dwg-worker.js', location.href).href,
      new URL('./assets/ios/libredwg-lowmem.js', location.href).href,
      new URL('./assets/ios/libredwg-runtime.js', location.href).href,
      new URL('./assets/ios/libredwg-web.wasm', location.href).href
    ])

    for (const entry of performance.getEntriesByType('resource') as PerformanceResourceTiming[]) {
      try {
        const u = new URL(entry.name)
        if (u.origin === location.origin && /\.(?:js|css)(?:$|\?)/i.test(u.pathname + u.search)) {
          urls.add(u.href)
        }
      } catch {}
    }

    for (const url of urls) {
      try {
        await cache.add(new Request(url, { cache: 'reload' }))
      } catch (error) {
        console.warn('[LiteCAD mobile] cache failed', url, error)
      }
    }

    localStorage.setItem('litecad-v6-offline-ready', '1')
    setOfflineState('ready')
  } catch (error) {
    console.warn('[LiteCAD mobile] offline setup failed', error)
    setOfflineState(localStorage.getItem('litecad-v6-offline-ready') === '1' ? 'ready' : 'failed')
  }
}

setOfflineState(localStorage.getItem('litecad-v6-offline-ready') === '1' ? 'ready' : 'checking')
void prepareOffline()

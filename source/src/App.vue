<template>
  <div class="app-shell">
    <section v-if="!selectedFile" class="home">
      <div class="brand-row">
        <div class="logo">⌗</div>
        <div>
          <h1>LiteCAD</h1>
          <p>DWG / DXF · iPhone 离线查看</p>
        </div>
      </div>

      <div class="status-card" :class="offlineState">
        <span class="dot"></span>
        <div>
          <strong>{{ offlineTitle }}</strong>
          <p>{{ offlineText }}</p>
        </div>
      </div>

      <div class="open-card">
        <div class="file-icon">▱</div>
        <h2>打开本地图纸</h2>
        <p>图纸只在手机本机处理，不上传。</p>
        <input ref="fileInput" type="file" hidden @change="onPick" />
        <button class="primary" @click="fileInput?.click()">选择 DWG / DXF</button>
        <div class="badges">
          <span>DWG R14–2018</span>
          <span>DXF</span>
          <span>离线</span>
          <span v-if="isIOS">iOS 低内存</span>
        </div>
      </div>

      <div v-if="error" class="error-card">{{ error }}</div>

      <div class="tips">
        <strong>iPhone 离线模式</strong>
        <p>DWG 会在独立 Worker 内解析并直接压成 SVG，只把显示结果送回主线程；不会再复制整套 CAD 数据库。离线引擎缓存完成后可断网使用。</p>
      </div>
    </section>

    <section v-else class="viewer-wrap">
      <button class="back-btn" @click="closeDrawing">‹ 换图</button>
      <div class="file-name">{{ selectedFile.name }}</div>

      <div v-if="iosDwgMode" class="ios-dwg-viewer">
        <div class="ios-dwg-tools">
          <button @click="zoomOut" :disabled="iosScale <= 0.5">−</button>
          <span>{{ Math.round(iosScale * 100) }}%</span>
          <button @click="zoomIn" :disabled="iosScale >= 4">＋</button>
          <button @click="fitDrawing">适应</button>
        </div>

        <div class="ios-dwg-stage">
          <div v-if="iosLoading" class="ios-dwg-message">
            <div class="spinner"></div>
            <strong>低内存模式正在解析 DWG…</strong>
            <p>这次不会再加载 1GB 初始 WASM，也不会把完整 CAD 数据库复制回主线程。</p>
          </div>

          <div v-else-if="iosError" class="ios-dwg-message error">
            <strong>这张 DWG 仍然超过当前 iPhone 可用内存</strong>
            <p>{{ iosError }}</p>
          </div>

          <img
            v-else-if="iosSvgUrl"
            class="ios-dwg-image"
            :src="iosSvgUrl"
            :style="{ width: (iosScale * 100) + '%' }"
            alt="DWG drawing"
          />
        </div>
      </div>

      <MlCadViewer
        v-else
        :local-file="selectedFile"
        locale="zh"
        theme="dark"
        :use-main-thread-draw="useMainThreadDraw"
        :progressive-rendering="true"
        style="width:100%;height:100%;display:block"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { MlCadViewer } from '@mlightcad/cad-viewer'

const fileInput = ref<HTMLInputElement | null>(null)
const selectedFile = ref<File | null>(null)
const error = ref('')
const offlineState = ref<'checking' | 'ready' | 'failed' | 'unsupported'>('checking')
const iosLoading = ref(false)
const iosError = ref('')
const iosSvgUrl = ref('')
const iosScale = ref(1)
let iosWorker: Worker | null = null
let iosTimer: number | null = null

const isIOS =
  /iPad|iPhone|iPod/i.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

const useMainThreadDraw = isIOS
const selectedExt = computed(() => selectedFile.value?.name.split('.').pop()?.toLowerCase() || '')
const iosDwgMode = computed(() => isIOS && selectedExt.value === 'dwg')

const offlineTitle = computed(() => ({
  checking: '正在准备离线引擎…',
  ready: '离线引擎已缓存',
  failed: '离线缓存尚未完成',
  unsupported: '当前浏览器不支持离线安装'
}[offlineState.value]))

const offlineText = computed(() => ({
  checking: '首次需要联网缓存 Viewer、低内存 DWG Worker 和 WASM。',
  ready: '低内存 DWG 引擎已在手机缓存，可断网打开本地图纸。',
  failed: '保持联网并重新打开一次；低内存引擎缓存完成后再离线。',
  unsupported: '请使用 iPhone Safari，并从“分享”添加到主屏幕。'
}[offlineState.value]))

async function openIosDwg(file: File) {
  cleanupIosWorker()
  revokeIosSvg()
  iosLoading.value = true
  iosError.value = ''
  iosScale.value = 1

  try {
    const buffer = await file.arrayBuffer()
    const worker = new Worker('./assets/ios/ios-dwg-worker.js', { type: 'module' })
    iosWorker = worker

    worker.onmessage = (event: MessageEvent) => {
      const data = event.data || {}
      if (data.ok && typeof data.svg === 'string' && data.svg.length > 0) {
        const blob = new Blob([data.svg], { type: 'image/svg+xml' })
        iosSvgUrl.value = URL.createObjectURL(blob)
        iosLoading.value = false
        cleanupIosWorker()
        return
      }

      iosLoading.value = false
      iosError.value = String(data.error || 'DWG 低内存解析失败。')
      cleanupIosWorker()
    }

    worker.onerror = (event: ErrorEvent) => {
      iosLoading.value = false
      iosError.value = event.message || 'DWG Worker 异常退出。'
      cleanupIosWorker()
    }

    iosTimer = window.setTimeout(() => {
      iosLoading.value = false
      iosError.value = '解析超过 180 秒，已停止以避免 iOS 长时间占用内存。'
      cleanupIosWorker()
    }, 180000)

    worker.postMessage({ buffer }, [buffer])
  } catch (e) {
    iosLoading.value = false
    iosError.value = e instanceof Error ? e.message : String(e)
    cleanupIosWorker()
  }
}

function cleanupIosWorker() {
  if (iosTimer != null) {
    window.clearTimeout(iosTimer)
    iosTimer = null
  }
  if (iosWorker) {
    iosWorker.terminate()
    iosWorker = null
  }
}

function revokeIosSvg() {
  if (iosSvgUrl.value) {
    URL.revokeObjectURL(iosSvgUrl.value)
    iosSvgUrl.value = ''
  }
}

function zoomIn() {
  iosScale.value = Math.min(4, Math.round((iosScale.value + 0.25) * 100) / 100)
}
function zoomOut() {
  iosScale.value = Math.max(0.5, Math.round((iosScale.value - 0.25) * 100) / 100)
}
function fitDrawing() {
  iosScale.value = 1
}

function onPick(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return

  const ext = file.name.split('.').pop()?.toLowerCase()
  if (ext !== 'dwg' && ext !== 'dxf') {
    error.value = '请选择 .dwg 或 .dxf 文件。'
    input.value = ''
    return
  }

  if (ext === 'dwg' && isIOS && file.size > 80 * 1024 * 1024) {
    error.value = '这张 DWG 超过 80 MB，仍可能触及 iOS WebKit 的总内存上限。'
  } else {
    error.value = ''
  }

  selectedFile.value = file
  if (isIOS && ext === 'dwg') {
    void openIosDwg(file)
  }
}

function closeDrawing() {
  cleanupIosWorker()
  revokeIosSvg()
  iosLoading.value = false
  iosError.value = ''
  selectedFile.value = null
  if (fileInput.value) fileInput.value.value = ''
}

function onOfflineState(event: Event) {
  const state = (event as CustomEvent).detail
  if (['ready', 'failed', 'unsupported'].includes(state)) {
    offlineState.value = state
  }
}

function onUnhandled(event: PromiseRejectionEvent) {
  const message = String(event.reason?.message || event.reason || '')
  if (/out of bounds|out of memory|memory|wasm/i.test(message)) {
    if (iosDwgMode.value) {
      iosLoading.value = false
      iosError.value = '低内存模式仍触发了 iOS 内存限制。'
      cleanupIosWorker()
    } else {
      error.value = 'DWG 解析触发了浏览器内存限制。'
      selectedFile.value = null
    }
  }
}

onMounted(() => {
  if (localStorage.getItem('litecad-offline-ready-v5') === '1') {
    offlineState.value = 'ready'
  }
  window.addEventListener('litecad:offline-state', onOfflineState)
  window.addEventListener('unhandledrejection', onUnhandled)
})

onBeforeUnmount(() => {
  cleanupIosWorker()
  revokeIosSvg()
  window.removeEventListener('litecad:offline-state', onOfflineState)
  window.removeEventListener('unhandledrejection', onUnhandled)
})
</script>

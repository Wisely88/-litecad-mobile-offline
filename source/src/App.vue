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
        </div>
      </div>

      <div v-if="error" class="error-card">{{ error }}</div>

      <div class="tips">
        <strong>iPhone 第一次使用</strong>
        <p>用 Safari 打开本页面，等上方显示“离线引擎已缓存”，然后点分享 →“添加到主屏幕”。安装后可断网打开本地 DWG / DXF。</p>
      </div>
    </section>

    <section v-else class="viewer-wrap">
      <button class="back-btn" @click="closeDrawing">‹ 换图</button>
      <div class="file-name">{{ selectedFile.name }}</div>

      <MlCadViewer
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

const isIOS =
  /iPad|iPhone|iPod/i.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

const useMainThreadDraw = isIOS

const offlineTitle = computed(() => ({
  checking: '正在准备离线引擎…',
  ready: '离线引擎已缓存',
  failed: '离线缓存尚未完成',
  unsupported: '当前浏览器不支持离线安装'
}[offlineState.value]))

const offlineText = computed(() => ({
  checking: '首次需要联网缓存 Viewer、Worker 和 DWG WASM。',
  ready: '现在可以断开 Wi‑Fi / 蜂窝网络后继续打开本地 DWG / DXF。',
  failed: '保持联网并重新打开一次；缓存完成后再离线。',
  unsupported: '请使用 iPhone Safari，并从“分享”添加到主屏幕。'
}[offlineState.value]))

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
    error.value = '这张 DWG 超过 80 MB，iPhone 可能触及 WebKit 内存上限；仍会允许尝试打开。'
  } else {
    error.value = ''
  }

  selectedFile.value = file
}

function closeDrawing() {
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
    error.value = 'DWG 解析触发了 iPhone 内存限制。请关闭其他 App 后重试；若仍失败，这张图超出了当前开源 LibreDWG WASM 在 iOS 上的可用内存范围。'
    selectedFile.value = null
  }
}

onMounted(() => {
  if (localStorage.getItem('litecad-offline-ready') === '1') {
    offlineState.value = 'ready'
  }
  window.addEventListener('litecad:offline-state', onOfflineState)
  window.addEventListener('unhandledrejection', onUnhandled)
})

onBeforeUnmount(() => {
  window.removeEventListener('litecad:offline-state', onOfflineState)
  window.removeEventListener('unhandledrejection', onUnhandled)
})
</script>

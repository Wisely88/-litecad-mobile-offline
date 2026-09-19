import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import { i18n } from '@mlightcad/cad-viewer'
import { registerLibreDwgConverter } from './registerLibreDwg'

registerLibreDwgConverter()

const app = createApp(App)
app.use(ElementPlus)
app.use(i18n)
app.mount('#app')

async function prepareDesktopOffline() {
  if (!('serviceWorker' in navigator)) return
  try {
    await navigator.serviceWorker.register('./sw.js', { scope: './' })
    await navigator.serviceWorker.ready
    localStorage.setItem('litecad-offline-ready-v5', '1')
    window.dispatchEvent(new CustomEvent('litecad:offline-state', { detail: 'ready' }))
  } catch {
    window.dispatchEvent(new CustomEvent('litecad:offline-state', { detail: 'failed' }))
  }
}

void prepareDesktopOffline()

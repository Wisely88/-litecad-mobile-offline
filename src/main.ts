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

async function prepareOffline() {
  if (!('serviceWorker' in navigator)) {
    window.dispatchEvent(new CustomEvent('litecad:offline-state', { detail: 'unsupported' }))
    return
  }

  try {
    await navigator.serviceWorker.register('./sw.js', { scope: './' })
    await navigator.serviceWorker.ready

    const assets = [
      './assets/app.js',
      './assets/app.css',
      './assets/mtext-renderer-worker.js',
      './assets/libredwg-parser-worker.js',
      './assets/libredwg-web.wasm'
    ]

    await Promise.all(
      assets.map(async url => {
        const response = await fetch(url, { cache: 'reload' })
        if (!response.ok) throw new Error(url + ': ' + response.status)
        await response.arrayBuffer()
      })
    )

    localStorage.setItem('litecad-offline-ready', '1')
    window.dispatchEvent(new CustomEvent('litecad:offline-state', { detail: 'ready' }))
  } catch (error) {
    console.warn('[LiteCAD] offline preparation failed', error)
    const ready = localStorage.getItem('litecad-offline-ready') === '1'
    window.dispatchEvent(
      new CustomEvent('litecad:offline-state', { detail: ready ? 'ready' : 'failed' })
    )
  }
}

window.addEventListener('load', () => void prepareOffline())

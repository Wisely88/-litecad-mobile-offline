import { createApp, defineComponent, h } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { MlCadViewer, i18n } from '@mlightcad/cad-viewer'

export async function mountDxfViewer(el: HTMLElement, file: File): Promise<() => void> {
  el.innerHTML = ''

  const Host = defineComponent({
    name: 'LiteCadMobileDxfHost',
    setup() {
      return () =>
        h(MlCadViewer, {
          localFile: file,
          locale: 'zh',
          theme: 'dark',
          useMainThreadDraw: true,
          progressiveRendering: true,
          style: 'width:100%;height:100%;display:block'
        })
    }
  })

  const app = createApp(Host)
  app.use(ElementPlus)
  app.use(i18n)
  app.mount(el)

  return () => app.unmount()
}

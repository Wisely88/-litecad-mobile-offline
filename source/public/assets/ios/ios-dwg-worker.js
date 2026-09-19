import { Dwg_File_Type, LibreDwg } from './libredwg-lowmem.js'

let engine = null
let dwg = null

function fail(error) {
  const message = error instanceof Error ? error.message : String(error)
  self.postMessage({ ok: false, error: message })
}

self.onmessage = async event => {
  const buffer = event.data?.buffer
  if (!(buffer instanceof ArrayBuffer)) {
    fail('没有收到有效的 DWG 数据。')
    self.close()
    return
  }

  try {
    const base = new URL('./', import.meta.url).href.replace(/\/$/, '')
    engine = await LibreDwg.create(base)
    dwg = engine.dwg_read_data(buffer, Dwg_File_Type.DWG)
    if (!dwg) throw new Error('LibreDWG 无法读取这个 DWG。')

    // Convert only inside this worker. The large CAD object tree never crosses
    // back to Safari's main thread.
    const database = engine.convert(dwg)

    // Free native/C-side DWG memory before SVG generation.
    engine.dwg_free(dwg)
    dwg = null

    const svg = engine.dwg_to_svg(database)
    if (!svg || typeof svg !== 'string') {
      throw new Error('DWG 已解析，但没有生成可显示的 SVG。')
    }

    self.postMessage({ ok: true, svg })
  } catch (error) {
    fail(error)
  } finally {
    if (dwg && engine) {
      try { engine.dwg_free(dwg) } catch {}
    }
    dwg = null
    engine = null
    setTimeout(() => self.close(), 0)
  }
}

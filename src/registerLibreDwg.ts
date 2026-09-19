import { AcDbDatabaseConverterManager, AcDbFileType } from '@mlightcad/data-model'
import { AcDbLibreDwgConverter } from '@mlightcad/libredwg-converter'

let registered = false

export function registerLibreDwgConverter(): void {
  if (registered) return

  const converter = new AcDbLibreDwgConverter({
    convertByEntityType: false,
    useWorker: true,
    parserWorkerUrl: './assets/libredwg-parser-worker.js'
  })

  AcDbDatabaseConverterManager.instance.register(AcDbFileType.DWG, converter)
  registered = true
}

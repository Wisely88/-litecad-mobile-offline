import { copyFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

function copyCadRuntime() {
  return {
    name: 'copy-cad-runtime',
    closeBundle() {
      const root = process.cwd()
      const outDir = resolve(root, 'dist/assets')
      mkdirSync(outDir, { recursive: true })

      const files = [
        [
          'node_modules/@mlightcad/cad-simple-viewer/dist/mtext-renderer-worker.js',
          'mtext-renderer-worker.js'
        ],
        [
          'node_modules/@mlightcad/libredwg-converter/dist/libredwg-parser-worker.js',
          'libredwg-parser-worker.js'
        ],
        [
          'node_modules/@mlightcad/libredwg-converter/dist/libredwg-web.wasm',
          'libredwg-web.wasm'
        ]
      ]

      for (const [src, dest] of files) {
        copyFileSync(resolve(root, src), resolve(outDir, dest))
      }
    }
  }
}

export default defineConfig({
  base: './',
  plugins: [vue(), copyCadRuntime()],
  build: {
    outDir: 'dist',
    modulePreload: false,
    cssCodeSplit: false,
    rollupOptions: {
      input: 'index.html',
      output: {
        inlineDynamicImports: true,
        entryFileNames: 'assets/app.js',
        assetFileNames: assetInfo => {
          if ((assetInfo.name || '').endsWith('.css')) return 'assets/app.css'
          return 'assets/[name][extname]'
        }
      }
    }
  }
})

const CACHE = 'litecad-mobile-v4-1-20260919'
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon.svg',
  './assets/app.js',
  './assets/app.css',
  './assets/mtext-renderer-worker.js',
  './assets/libredwg-parser-worker.js',
  './assets/libredwg-web.wasm'
]

self.addEventListener('install', event => {
  self.skipWaiting()
  event.waitUntil(
    caches.open(CACHE).then(async cache => {
      for (const url of CORE) {
        try {
          await cache.add(url)
        } catch (error) {
          console.warn('[LiteCAD SW] cache miss', url, error)
        }
      }
    })
  )
})

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys()
    await Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))
    await self.clients.claim()
  })())
})

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return
  const url = new URL(event.request.url)
  if (url.origin !== self.location.origin) return

  event.respondWith((async () => {
    const cached = await caches.match(event.request, { ignoreSearch: true })
    if (cached) return cached

    try {
      const response = await fetch(event.request)
      if (response && response.ok) {
        const cache = await caches.open(CACHE)
        await cache.put(event.request, response.clone())
      }
      return response
    } catch (error) {
      if (event.request.mode === 'navigate') {
        const fallback = await caches.match('./index.html')
        if (fallback) return fallback
      }
      throw error
    }
  })())
})

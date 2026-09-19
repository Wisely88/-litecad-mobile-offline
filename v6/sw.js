const CACHE = 'litecad-v6-shell-20260919'
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon.svg',
  './assets/ios/ios-dwg-worker.js',
  './assets/ios/libredwg-lowmem.js',
  './assets/ios/libredwg-runtime.js',
  './assets/ios/libredwg-web.wasm'
]

self.addEventListener('install', event => {
  self.skipWaiting()
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE)
    for (const url of SHELL) {
      try {
        await cache.add(new Request(url, { cache: 'reload' }))
      } catch (error) {
        console.warn('[LiteCAD v6 SW] cache miss', url, error)
      }
    }
  })())
})

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys()
    await Promise.all(
      keys
        .filter(key =>
          (key.startsWith('litecad-mobile-') || key.startsWith('litecad-v6-')) &&
          key !== CACHE &&
          key !== 'litecad-v6-runtime-20260919'
        )
        .map(key => caches.delete(key))
    )
    await self.clients.claim()
  })())
})

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return

  const url = new URL(event.request.url)
  if (url.origin !== self.location.origin) return

  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(event.request)
        const cache = await caches.open(CACHE)
        if (fresh.ok) await cache.put(event.request, fresh.clone())
        return fresh
      } catch {
        return (
          (await caches.match(event.request, { ignoreSearch: true })) ||
          (await caches.match('./index.html')) ||
          Response.error()
        )
      }
    })())
    return
  }

  event.respondWith((async () => {
    const cached = await caches.match(event.request, { ignoreSearch: true })
    if (cached) return cached

    const response = await fetch(event.request)
    if (response && response.ok) {
      const cache = await caches.open(CACHE)
      await cache.put(event.request, response.clone())
    }
    return response
  })())
})

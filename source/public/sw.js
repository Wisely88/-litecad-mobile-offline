const PREFIXES = ['litecad-', 'litecad-mobile-', 'litecad-v6-', 'litecad-v7-'];

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    try {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter(key => PREFIXES.some(prefix => key.startsWith(prefix)))
          .map(key => caches.delete(key))
      );
    } catch {}

    try {
      await self.registration.unregister();
    } catch {}

    try {
      const clients = await self.clients.matchAll({
        type: 'window',
        includeUncontrolled: true
      });
      for (const client of clients) {
        try { client.navigate(client.url); } catch {}
      }
    } catch {}
  })());
});

// Intentionally NO fetch handler.
// This worker only exists to retire all earlier LiteCAD service workers.

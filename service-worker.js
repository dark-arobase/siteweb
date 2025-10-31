self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open('krystal-clean-v1');
    await cache.addAll([
      './',
      './index.html',
      './style.css',
      './app.js',
      './auto.jpg'
    ]);
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k !== 'krystal-clean-v1' ? caches.delete(k) : null))));
});

self.addEventListener('fetch', (event) => {
  event.respondWith((async () => {
    const cached = await caches.match(event.request);
    if (cached) return cached;
    try {
      const res = await fetch(event.request);
      const cache = await caches.open('krystal-clean-v1');
      cache.put(event.request, res.clone());
      return res;
    } catch (e) {
      return cached || Response.error();
    }
  })());
});

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('endo-cache').then(cache => {
      return cache.addAll(['index.html']);
    })
  );
});
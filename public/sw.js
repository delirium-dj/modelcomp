// Self-destructing Service Worker
// WHY: The previous Cache-First strategy cached '/' and '/index.html' permanently,
// causing browsers (and hard refreshes like Shift+F5) to serve stale data until browsing data was cleared.
// This script unregisters the service worker and purges all CacheStorage entries across all client browsers.

self.addEventListener('install', (event) => {
  // Force the waiting service worker to become the active service worker immediately.
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    // Step 1: Delete all existing CacheStorage caches (e.g. 'v1')
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => caches.delete(key))
      );
    }).then(() => {
      // Step 2: Take control of all open pages immediately
      return self.clients.claim();
    }).then(() => {
      // Step 3: Unregister this service worker registration
      return self.registration.unregister();
    })
  );
});


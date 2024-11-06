// serviceWorker.js for notification related purpose
const cacheName = "medication-scheduler";
const staticAssets = ["./", "./index.html", "./App.js"];

self.addEventListener("install", async (event) => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
});

self.addEventListener("fetch", (event) => {
    const request = event.request;
    event.respondWith(cacheFirst(request));
});

async function cacheFirst(request) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || fetch(request);
}

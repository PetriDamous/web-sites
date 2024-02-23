const VERSION = "v1";

const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/icon-512x512.png",
];

const CACHE_NAME = `period-tracker-${VERSION}`;

const createCache = async () => {
  const cache = await caches.open(CACHE_NAME);
  cache.addAll(APP_STATIC_RESOURCES);
};

const installApp = (e) => e.waitUntil(createCache());

self.addEventListener("install", installApp);

const clearOldCache = async () => {
  const names = await caches.keys();
  (await Promise.all(names)).map((name) => {
    if (name !== CACHE_NAME) return caches.delete(name);
  });
  await clients.claim();
};

const updateCache = async (e) => {
  e.waitUntil(clearOldCache());
};

self.addEventListener("active", updateCache);

const preventRequests = (e) => {
  if (e.request.mode === "navigate") {
    e.respondWith(caches.match("/"));
    return;
  }

  e.respondWith(async () => {
    const cache = await caches.open(CACHE_NAME);

    const cacheResponse = await cache.match(e.request.url);

    if (cacheResponse) {
      return cacheResponse;
    }

    return new Response(null, { status: 404 });
  })();
};

self.addEventListener("fetch", preventRequests);

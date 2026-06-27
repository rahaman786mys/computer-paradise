var CACHE_NAME = "cp-cache-v1";
var ASSETS = ["/", "/index.html", "/buy.html", "/sell.html", "/about.html", "/contact.html", "/detail.html", "/builds.html", "/styles.css", "/script.js"];
self.addEventListener("install", function(e) {
  e.waitUntil(caches.open(CACHE_NAME).then(function(c) { return c.addAll(ASSETS).catch(function(){}); }));
  self.skipWaiting();
});
self.addEventListener("activate", function(e) {
  e.waitUntil(caches.keys().then(function(names) { return Promise.all(names.filter(function(n) { return n !== CACHE_NAME; }).map(function(n) { return caches.delete(n); })); }));
  self.clients.claim();
});
self.addEventListener("fetch", function(e) {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request).then(function(cached) {
    var fetchPromise = fetch(e.request).then(function(response) {
      if (response && response.status === 200 && response.type === "basic") {
        var clone = response.clone();
        caches.open(CACHE_NAME).then(function(c) { c.put(e.request, clone).catch(function(){}); });
      }
      return response;
    }).catch(function() { return cached; });
    return cached || fetchPromise;
  }));
});

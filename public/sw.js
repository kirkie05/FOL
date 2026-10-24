const CACHE="fols-public-v1";const PUBLIC=["/","/about","/services","/visit","/offline","/favicon.png"];
self.addEventListener("install",event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(PUBLIC))));
self.addEventListener("activate",event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))));
self.addEventListener("fetch",event=>{
  const url=new URL(event.request.url);
  if(event.request.method!=="GET"||url.origin!==location.origin||url.pathname.startsWith("/admin")||url.pathname.startsWith("/app")||url.pathname.startsWith("/api"))return;
  event.respondWith(
    fetch(event.request)
      .then(response=>{const copy=response.clone();void caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response;})
      .catch(()=>caches.match(event.request).then(found=>found||caches.match("/offline")))
  );
});

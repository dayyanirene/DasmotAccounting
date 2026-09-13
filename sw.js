'use strict';
// Cache only the public application shell. Firebase responses are never cached here.
const PREFIX='dasmot-shell-'+encodeURIComponent(self.registration.scope)+'-';
const CACHE=PREFIX+'v1';
const FILES=['./index.html','./manifest.webmanifest','./icon.svg','./icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES))));
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith(PREFIX)&&key!==CACHE)await caches.delete(key);await self.clients.claim()})()));
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url),base=new URL(self.registration.scope);
 if(event.request.method!=='GET'||url.origin!==base.origin)return;
 const shell=url.pathname===base.pathname||url.pathname===base.pathname+'index.html';
 if(event.request.mode==='navigate'&&shell){event.respondWith((async()=>{
  const cache=await caches.open(CACHE),controller=new AbortController(),timer=setTimeout(()=>controller.abort(),4000);
  try{const response=await fetch(event.request,{signal:controller.signal});if(response.ok){await cache.put('./index.html',response.clone());return response}return await cache.match('./index.html')||response}
  catch(e){return await cache.match('./index.html')||Response.error()}finally{clearTimeout(timer)}
 })());return}
 if(FILES.slice(1).some(file=>new URL(file,base).pathname===url.pathname))event.respondWith(caches.open(CACHE).then(async cache=>await cache.match(event.request)||fetch(event.request)));
});

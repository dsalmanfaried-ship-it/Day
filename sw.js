// نسخة قديمة: تمسح الكاش القديم وتلغي نفسها. التطبيق الفعلي يستخدم sw7.js
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{
 for(const k of await caches.keys())await caches.delete(k);
 await self.registration.unregister();
})()));

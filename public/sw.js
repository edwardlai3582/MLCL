var staticCacheName = 'mlcl-static-v1';
var allCaches = [
  staticCacheName 
];

self.addEventListener('install', function(event) {
    var urlsToCache = [
        '/',
        'favicon.ico',
        'android-icon-192x192.png',
        'static/css/main.d1f1dcb0.css',
        'static/css/main.d1f1dcb0.css.map',
        'static/js/main.d791d212.js',
        'static/js/main.d791d212.js.map',
        'static/media/BadaboomBB_Reg.79f12f40.ttf',
        'static/media/BEBAS___.3ef73ff4.ttf',
        'static/media/Iron-Fist-Comics.ec2ace38.jpg'
    ];
    
    //skipWainting
    if (self.skipWaiting) { self.skipWaiting(); }
    
    event.waitUntil(
        caches.open(staticCacheName).then(function(cache){
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    //return cacheName.startsWith('eazyDig') && cacheName != staticCacheName;
                    return cacheName.startsWith('mlcl') && !allCaches.includes(cacheName);
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener('fetch', function(event) {
    var requestUrl = new URL(event.request.url);    
    

        event.respondWith(
            caches.open(staticCacheName).then(function(cache) {

                //console.log('DAMN:'+event.request.url);
                return cache.match(event.request.url).then(function(response) {
                    if (response) return response;

                    return fetch(event.request).then(function(networkResponse) {
                        cache.put(event.request.url, networkResponse.clone());
                        return networkResponse;
                    });
                });
            })
        );    
    
    
});


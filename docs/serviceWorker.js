// neogeek/pwa-starter-kit
// MIT License
// https://github.com/neogeek/pwa-starter-kit


const cacheName = 'empathy-prompts-pwa';
const cacheVersion = `${cacheName}::1.0.0`;

const cachedFiles = [
    '/',
    'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js',
    '/content.json',
    '/main.css',
    '/main.js'
];

self.addEventListener('install', event => {

    console.log('[pwa install]');

    event.waitUntil(
        caches.open(cacheVersion)
            .then(cache => cache.addAll(cachedFiles))
    );

});

self.addEventListener('activate', event => {

    console.log('[pwa activate]');

    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.filter(key => key.indexOf(cacheName) === 0 && key !== cacheVersion)
                    .map(key => caches.delete(key))
            )
        )
    );

    return self.clients.claim();

});

self.addEventListener('fetch', event => {

    console.log('[pwa fetch]', event.request.url);

    event.respondWith(
        caches.match(event.request)
            .then(response => {

                caches.open(cacheVersion).then(cache => cache.add(event.request.url));

                return response || fetch(event.request);

            })
    );

});

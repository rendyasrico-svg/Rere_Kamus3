// ===================== SERVICE WORKER RERE KAMUS =====================
// Versi cache — naikkan angka ini setiap kali kamu update file app
// (data.js, style.css, script.js, dll) supaya pengguna dapat versi baru.
const CACHE_NAME = 'rere-kamus-cache-v8';

// Daftar file yang wajib disimpan supaya app tetap jalan tanpa internet
const FILES_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './data.js',
    './logo1.png',
    './logo_screen1.png',
    './manifest.json'
];

// ===================== INSTALL =====================
// Simpan semua file penting ke cache saat service worker pertama kali dipasang
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});

// ===================== ACTIVATE =====================
// Hapus cache versi lama supaya tidak menumpuk
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        })
    );
    self.clients.claim();
});

// ===================== FETCH =====================
// Strategi: NETWORK-FIRST (coba ambil dari internet dulu supaya selalu
// dapat versi terbaru; kalau gagal/offline, baru pakai cache sebagai cadangan).
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then((networkResponse) => {
                // Simpan salinan terbaru ke cache supaya cadangan offline selalu update
                const responseClone = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseClone);
                });
                return networkResponse;
            })
            .catch(() => {
                // Offline / gagal fetch -> pakai cache
                return caches.match(event.request).then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    if (event.request.mode === 'navigate') {
                        return caches.match('./index.html');
                    }
                });
            })
    );
});

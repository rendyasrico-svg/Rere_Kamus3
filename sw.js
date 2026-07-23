// ===================== SERVICE WORKER RERE KAMUS =====================
// Versi cache — naikkan angka ini setiap kali kamu update file app
// (data.js, style.css, script.js, dll) supaya pengguna dapat versi baru.
const CACHE_NAME = 'rere-kamus-cache-v1';

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
// Strategi: cache-first (coba ambil dari cache dulu, baru ke jaringan)
// Ini yang bikin app tetap jalan walau offline.
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request).catch(() => {
                // Kalau offline dan file tidak ada di cache, tetap coba index.html
                if (event.request.mode === 'navigate') {
                    return caches.match('./index.html');
                }
            });
        })
    );
});

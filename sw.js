const CACHE = 'astra-v3';
const ASSETS = [
  './','./index.html','./styles.css?v=3','./app.js?v=3','./manifest.webmanifest','./icon.svg',
  './assets/beads/rose-quartz.png','./assets/beads/amethyst.png','./assets/beads/moonstone.png','./assets/beads/aquamarine.png',
  './assets/beads/citrine.png','./assets/beads/tigers-eye.png','./assets/beads/obsidian.png','./assets/beads/porous-white.png'
];
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});
self.addEventListener('activate', event => event.waitUntil(
  Promise.all([
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))),
    self.clients.claim()
  ])
));
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(hit => hit || fetch(event.request)));
});

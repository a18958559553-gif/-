const CACHE = 'astra-v2';
const ASSETS = [
  './','./index.html','./styles.css','./app.js','./manifest.webmanifest','./icon.svg',
  './assets/beads/rose-quartz.png','./assets/beads/amethyst.png','./assets/beads/moonstone.png','./assets/beads/aquamarine.png',
  './assets/beads/citrine.png','./assets/beads/tigers-eye.png','./assets/beads/obsidian.png','./assets/beads/porous-white.png'
];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch', event => event.respondWith(caches.match(event.request).then(hit => hit || fetch(event.request))));

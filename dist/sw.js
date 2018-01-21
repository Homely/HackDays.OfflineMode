
importScripts('/node_modules/workbox-sw/build/importScripts/workbox-sw.prod.v2.1.2.js');

// Note: Ignore the error that Glitch raises about WorkboxSW being undefined.
const workbox = new WorkboxSW({
  skipWaiting: true,
  clientsClaim: true
});


workbox.router.registerRoute(
  new RegExp('^https://hacker-news.firebaseio.com'),
  workbox.strategies.staleWhileRevalidate()
);


self.addEventListener('push', (event) => {
  const title = 'Get Started With Workbox';
  const options = {
    body: event.data.text()
  };
  event.waitUntil(self.registration.showNotification(title, options));
});


workbox.precache([
  {
    "url": "index.html",
    "revision": "7dc612bd22a1710ad8c318480f474ea5"
  },
  {
    "url": "index.js",
    "revision": "128330cf3b0e5ae2b15dd7d11e7b9609"
  }
]);
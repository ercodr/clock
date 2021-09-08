const cacheName = 'static-shell-v1';
const resourcesToPrecache = [
    '/',
    'index.html',
    '.app.css',
    'app.js',
    'icon.png'
];

// INSTALL HANDLER
self.addEventListener('install', function(event) {
    console.log('Service worker install event');
    event.waitUntil(
        caches.open(cacheName).then(function(cache){
                return cache.addAll(resourcesToPrecache);
            })
    );
});


// FETCH HANDLER
self.addEventListener('fetch', event => {
    event.respondWidth(
        caches.match(event.request) || fetch(event.request)
    );
});


// PUSH NOTIFICATION
navigator.serviceWorker.ready.then(function(registration) {
    if (!registration.pushManager) {
      alert('No push notifications support.');
      return false;
    }
    //To subscribe `push notification` from push manager
    registration.pushManager.subscribe({
    userVisibleOnly: true //Always show notification when received
    })
    .then(function (subscription) {
    // console.log('Subscribed.');
    })
    .catch(function (error) {
    // console.log('Subscription error: ', error);
    });
  })
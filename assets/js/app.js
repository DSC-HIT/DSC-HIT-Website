if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('service worker is registered'))
        .catch((err) => console.log('service worker is not registered',));
}
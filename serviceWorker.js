self.addEventListener('install', (e) => {
	console.log('Service Worker installed successfully!')
	e.waitUntil(
		// cache files/resources
		caches.open('static').then((cache) => {
			return cache.addAll([
				'./',
				'./client.js',
				'./modal.css',
				'./modal.js',
				'./style.css',
				'./pill-popper-logo.jpg',
				'./favicons/favicon-32x32.png',
				'./favicons/android-chrome-192x192.png',
				'./favicons/android-chrome-512x512.png'
			])
		})
	)
})

self.addEventListener('fetch', (e) => {
	console.log(`Intercept fetch request for ${e.request.url}`)
	e.respondWith(
		caches.match(e.request).then((response) => {
			// check cache for files or make network request to get them
			return response || fetch(e.request)
		})
	)
})

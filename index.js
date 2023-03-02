if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('serviceWorker.js')
		.then((registration) =>
			console.log('Service Worker successfully registered!', registration)
		)
		.catch((error) => {
			console.log('Service Worker registration failed!', error)
		})
} else {
	console.log('Application features may become limited when using offline.')
}

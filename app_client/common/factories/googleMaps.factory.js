(function() {
	angular
		.module('jofApp')
		.factory('googleMapsPromise', googleMapsFactory);

	googleMapsFactory.$inject = ['$q', '$rootScope', '$window'];
	function googleMapsFactory($q, $rootScope, $window) {
		var asyncUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA4dd9bVUFlxCouni33X-NkNZSAZJfnzx0&callback=';
		var deferred = $q.defer();

		// global variable - callback function
		$window.googleMapsInitialised = deferred.resolve;

		// // async loader
		var asyncLoader = function(asyncUrl, callback) {
			var script = document.createElement('script');
			script.src = asyncUrl + callback;
			document.body.appendChild(script);
		};

		asyncLoader(asyncUrl, 'googleMapsInitialised');

		// Usage: mapsFactoryPromise.mapsInitialised.then(callback)
		return {
			mapsInitialised: deferred.promise
		};
	}

})();
(function() {
	angular
		.module('jofApp')
		.factory('googleChartsPromise', googleChartsFactory);

	googleChartsFactory.$inject = ['$q', '$rootScope', '$window'];
	function googleChartsFactory($q, $rootScope, $window) {
		var asyncUrl = 'https://www.gstatic.com/charts/loader.js';
		var deferred = $q.defer();

		// global variable - callback function
		$window.googleChartsInitialised = deferred.resolve;

		// // async loader
		var asyncLoader = function(asyncUrl, callback) {
			var script = document.createElement('script');
			script.src = asyncUrl;
			document.head.appendChild(script);
		};

		asyncLoader(asyncUrl, 'googleChartsInitialised');

		// Usage: googleChartsPromise.chartsInitialised.then(callback)
		return {
			chartsInitialised: deferred.promise
		};
	}

})();
(function() {
	angular.module('jofApp', ['ngRoute']);

	function config($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: '/maps/maps.view.html',
				controller: 'mapsController',
				controllerAs: 'vm'
			}).when('/maps', {
				templateUrl: '/maps/maps.view.html',
				controller: 'mapsController',
				controllerAs: 'vm'
			}).otherwise({
				//redirectTo: '/'
			});

		$locationProvider.html5Mode = true;
	}

	angular
		.module('jofApp')
		.config(['$routeProvider', '$locationProvider', config]);
})();
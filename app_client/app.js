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
			}).when('/about', {
				templateUrl: '/about/about.view.html',
				controller: 'aboutController',
				controllerAs: 'vm'
			}).when('/towers', {
				templateUrl: '/towers/towers.view.html',
				controller: 'towersController',
				controllerAs: 'vm'
			}).otherwise({
				redirectTo: '/'
			});

		$locationProvider.html5Mode(true);
	}

	angular
		.module('jofApp')
		.config(['$routeProvider', '$locationProvider', config]);
})();
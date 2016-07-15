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
			}).when('/resume', {
				templateUrl: '/resume/resume.view.html',
				controller: 'resumeController',
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
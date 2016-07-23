(function() {
	angular
		.module('jofApp')
		.service('towersData', towersData);

	towersData.$inject = ['$http'];
	function towersData($http) {
		var allTowers = function() {
			return $http.get('/api/towers')
				// .then(
				// 	function(response) {
				// 		return response;
				// 	},
				// 	function(httpError) {
				// 		throw httpError.status + ' : ' + httpError.data;
				// 	});
		};

		var counties = function() {
			return $http.get('api/towers/counties')
		};

		var noBells = function() {
			return $http.get('api/towers/noBells')
		};

		var pracNight = function() {
			return $http.get('api/towers/pracNight')
		};

		return {
			allTowers : allTowers,
			counties: counties,
			noBells: noBells,
			pracNight: pracNight
		};
	}
})();
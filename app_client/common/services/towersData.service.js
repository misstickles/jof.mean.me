(function() {
	angular
		.module('jofApp')
		.service('towersData', towersData);

	towersData.$inject = ['$http'];
	function towersData($http) {
		var towers = function() {
			return $http.get('/api/towers')
				// .then(
				// 	function(response) {
				// 		return response;
				// 	},
				// 	function(httpError) {
				// 		throw httpError.status + ' : ' + httpError.data;
				// 	});
			};

		return {
			towers : towers
		};
	}
})();
(function() {
	angular
		.module('jofApp')
		.service('starsData', starsData);

	starsData.$inject = ['$http'];
	function starsData($http) {
		var getStars = function() {
			return $http.get('/api/solarsystem/stars')
		};

		return {
			stars : getStars
		};
	}
})();
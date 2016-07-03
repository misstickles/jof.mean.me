(function() {
	angular
		.module('jofApp')
		.service('mapsData', mapsData);

	mapsData.$inject = ['$http'];
	function mapsData($http) {
		var maps = function() {
			return $http.get('/api/maps');
		};

		return {
			maps : maps
		};
	}

})();
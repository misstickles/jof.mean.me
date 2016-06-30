(function() {
	angular
		.module('jofApp')
		.service('mapsData', mapsData);

	mapsData.$inject = ['$http'];
	function mapsData($http) {
		var mapsById = function(id) {
			return $http.get('/api/maps?id=' + id);
		};

		return {
			mapsById : mapsById
		};
	}

})();
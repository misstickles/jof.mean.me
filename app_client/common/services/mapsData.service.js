(function() {
	angular
		.module('jofApp')
		.service('mapsData', mapsData);

	mapsData.$inject = ['$http'];
	function mapsData($http) {
		var maps = function() {
			return $http.get('/api/maps')
				// .then(
				// 	function(response) {
				// 		return response;
				// 	},
				// 	function(httpError) {
				// 		throw httpError.status + ' : ' + httpError.data;
				// 	});
			};

		return {
			maps : maps
		};
	}
})();

(function() {
	angular
		.module('jofApp')
		.service('mapsDataAsync', mapsDataAsync);

	mapsDataAsync.$inject = ['$http', '$q'];
	function mapsDataAsync($http, $q) {
		return {
			loadMaps: function(maps) {
				var deferred = $q.defer();
				var mapCalls = [];
				angular.forEach(maps, function(map) {
					mapCalls.push($http.get(map.jsonData));
				});

				$q.all(mapCalls)
					.then(
						function(results) {
							deferred.resolve(JSON.stringify(results));
						},
						function(errors) {
							deferred.reject(errors);
						},
						function(updates) {
							deferred.update(updates);
						});

					return deferred.promise;
				}
			};
		};

})();
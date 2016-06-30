(function() {
	angular.module('jofApp', []);

	var mapListControl = function($scope, mapData) {
		$scope.message = "Standby.  Generating a Masterpiece.";

		mapData.mapById(0)
			.success(function(data) {
				$scope.message = "data"; //.gpxData && data.gpxData.length > 0 ? "" : "No maps found.  Boo :o(";
				$scope.data = { maps: data };
			})
			.error(function(err) {
				$scope.message = "Poo.  I'm broke.  Error: " + err;
				console.error(err);
			});
	};

	var mapData = function($http) {
		var mapById = function(id) {
			return $http.get('/api/maps?id=' + id);
		};
		return { mapById : mapById };

		return $http.get('/api/maps');
		return [{
				name: 'map1',
				detail: 'walk 1',
				distance: 19
			},{
				name: 'map2',
				detail: 'walk 2',
				distance: 12
			},{
				name: 'map3',
				detail: 'walk 3',
				distance: 46
			}];
	};

	angular
		.module('jofApp')
		.controller('mapListControl', mapListControl)
		.service('mapData', mapData);
})();
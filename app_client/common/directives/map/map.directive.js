(function() {
	angular
		.module('jofApp')
		.directive('map', map);

	map.$inject = ['mapsFactoryPromise'];
	function map(mapsFactoryPromise) {
		var data 
		return {
			restrict: 'EA',
			scope: {
				content: '=content',
			},
			templateUrl: '/common/directives/map/map.template.html',
			link: function($scope, $element, $attrs) {
				mapsFactoryPromise.mapsInitialised.then(function() {
					var options = {
//						zoom: 13,
//						center: new google.maps.LatLng(51, -0.1),
						mapTypeId: google.maps.MapTypeId.TERRAIN,
					};
					var map = new google.maps.Map($element[0].querySelector('#map'), options);
					var points = [];
					var bounds = new google.maps.LatLngBounds();
					var xml = $scope.content;

					$.each(xml.gpx.trk[0].trkseg[0].trkpt, function(idx, el) {
						var lat = el.$.lat;
						var lon = el.$.lon;
						var p = new google.maps.LatLng(lat, lon);
						points.push(p);
						bounds.extend(p);
					});

					var poly = new google.maps.Polyline({
						path: points,
						strokeColor: "#800000",
						strokeOpacity: 0.7,
						strokeWeight: 2
					});

					poly.setMap(map);
					map.fitBounds(bounds);
				});
			},
		};
	}

	function _createMap($scope, $element, $attrs) {

	}

})();
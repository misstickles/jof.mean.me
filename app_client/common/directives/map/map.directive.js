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
				// TODO: put somewhere more generic!
				$('[data-toggle="tooltip"]').tooltip();

				mapsFactoryPromise.mapsInitialised.then(function() {
					var options = {
						mapTypeId: google.maps.MapTypeId.TERRAIN,
						polyColours: [ '#800000', '#008000' ]
					};
					var map = new google.maps.Map($element[0].querySelector('#map'), options);
					var points = [];
					var bounds = new google.maps.LatLngBounds();
					var xml = $scope.content;

					// TODO: assuming only one track
					$.each(xml.gpx.trk[0].trkseg, function(idx, el) {
						points = [];

						$.each(el.trkpt, function(idx, el) {
							var lat = el.$.lat;
							var lon = el.$.lon;
							var p = new google.maps.LatLng(lat, lon);
							points.push(p);
							bounds.extend(p);
						});

						var poly = new google.maps.Polyline({
							path: points,
							strokeColor: options.polyColours[idx],
							strokeOpacity: 0.7,
							strokeWeight: 2
						});
	
						poly.setMap(map);
					});

					map.fitBounds(bounds);

					google.maps.event.addDomListener(window, 'resize', function() {
						var center = map.getCenter();
						google.maps.event.trigger(map, 'resize');
						map.setCenter(center);
					});
				});
			},
		};
	}

	function _createMap($scope, $element, $attrs) {

	}

})();
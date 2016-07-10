(function() {
	angular
		.module('jofApp')
		.directive('map', map);

	map.$inject = ['googleMapsPromise', 'googleChartsPromise'];
	function map(googleMapsPromise, googleChartsPromise) {
		return {
			restrict: 'EA',
			scope: {
				content: '=content',
			},
			templateUrl: '/common/directives/map/map.template.html',
			link: function($scope, $element, $attrs) {
				// TODO: put tooltip somewhere more generic!
				$('[data-toggle="tooltip"]').tooltip();

				googleMapsPromise.mapsInitialised.then(function() {
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

				googleChartsPromise.chartsInitialised.then(function() {
					var data, chart;

					google.charts.load('current', { 'packages' : ['line']});
					google.charts.setOnLoadCallback(drawChart);

					function drawChart() {
						data = new google.visualization.DataTable();
						data.addColumn('number', 'Time');
						data.addColumn('number', 'Altitude');
						data.addRows([
							[1, 400], [2, 410], [3, 408], [4, 402], [5, 412]
						]);

						var options = {
							chart: {
								title: 'My altitude',
								subtitle: 'in feet'
							},
							width: 900,
							height: 500
						};

						var chart = new google.charts.Line($element[0].querySelector('#chart'));
						chart.draw(data, options);
					}
				});
			},
		};
	}

	function _createMap($scope, $element, $attrs) {

	}

})();
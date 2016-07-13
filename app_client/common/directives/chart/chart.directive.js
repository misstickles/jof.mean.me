(function() {
	angular
		.module('jofApp')
		.directive('chart', chart);

	function chart() {
		return {
			restrict: 'EA',
			scope: {
				content: '=content',
			},
			templateUrl: '/common/directives/chart/chart.template.html',
			link: chartLink
		}
	}

	function chartLink($scope, $element, $attrs) {
		// googleChartsPromise.chartsInitialised.then(function() {

		google.charts.setOnLoadCallback(drawChart);

		function drawChart() {

			var data = new google.visualization.DataTable();
			data.addColumn('datetime', 'X');
			data.addColumn('number', 'Altitude');

			var xml = $scope.content;
			var points = [];
			var tmpTime = new Date();

			// TODO: assuming only one track
			$.each(xml.gpx.trk[0].trkseg, function(idx, el) {
				points = [];

				$.each(el.trkpt, function(idx, el) {
					var elev = Math.round(el.ele * 1000) / 1000;
					var time = new Date(el.time);
					if (!time.isValidDate()) {
						time = new Date(tmpTime.addSeconds(15));
					}
//					var time = el.time ? new Date(el.time) : (tmpTime += tmpTime.addSeconds(15));
					var d = [time, elev];
					points.push(d);
				});
			});

			data.addRows(points);

			var options = {
				hAxis: {
					title: 'Time'
				},
				vAxis: {
					title: 'Altitude (ft)'
				},
				width: '100%',
				height: '100%',
				colors: ['#800000'],
				is3D: true,
				legend: 'none'

			};

			var chart = new google.visualization.LineChart(
				$element[0].querySelector('#chart'));

			chart.draw(data, options);

			$(window).resize(function() {
				chart.draw(data, options);
			});
			// window.addEventListener('resize', function() {
			// 	chart.draw(data, options);
			// });
		}
	}

	google.charts.load('current', {packages: ['corechart', 'line']});

})();
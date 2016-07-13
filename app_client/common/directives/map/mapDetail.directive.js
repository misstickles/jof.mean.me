(function() {
	angular
		.module('jofApp')
		.directive('mapDetail', mapDetail);

	function mapDetail() {
		return {
			restrict: 'EA',
			scope: {
				content: '=content',
			},
			templateUrl: '/common/directives/map/mapDetail.template.html',
			link: function($scope, $element, $attrs) {
				// TODO: put tooltip somewhere more generic!
				$('[data-toggle="tooltip"]').tooltip();
			},
		};
	}
})();
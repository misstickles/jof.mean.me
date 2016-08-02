(function() {
	angular
		.module('jofApp')
		.directive('starRating', starRating);

	function starRating() {
		return {
			restrict: 'E',
			scope: {
				title: '=title',
				level: '=level'
			},
			templateUrl: '/common/directives/common/starRating.template.html'
		};
	}
})();
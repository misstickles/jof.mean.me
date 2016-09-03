(function() {
	angular
		.module('jofApp')
		.directive('summary', summary);

	function summary() {
		return {
			restrict: 'EA',
			templateUrl: '/common/directives/resume/summary.template.html',
			scope: {
				content: '=content'
			}
		};
	}
})();
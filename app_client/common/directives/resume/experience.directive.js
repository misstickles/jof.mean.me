(function() {
	angular
		.module('jofApp')
		.directive('experience', experience);

	function experience() {
		return {
			restrict: 'EA',
			templateUrl: '/common/directives/resume/experience.template.html',
			scope: {
				content: '=content',
			},
		};
	}
})();
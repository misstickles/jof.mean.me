(function() {
	angular
		.module('jofApp')
		.directive('education', education);

	function education() {
		return {
			restrict: 'EA',
			scope: {
				content: '=content',
			},
			templateUrl: '/common/directives/resume/education.template.html',
		};
	}
})();
(function() {
	angular
		.module('jofApp')
		.directive('interests', interests);

	function interests() {
		return {
			restrict: 'EA',
			scope: {
				content: '=content'
			},
			templateUrl: '/common/directives/resume/interests.template.html',
		};
	}
})();
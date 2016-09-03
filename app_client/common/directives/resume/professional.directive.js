(function() {
	angular
		.module('jofApp')
		.directive('professional', professional);

	function professional() {
		return {
			restrict: 'EA',
			scope: {
				content: '=content'
			},
			templateUrl: '/common/directives/resume/professional.template.html',
		};
	}
})();
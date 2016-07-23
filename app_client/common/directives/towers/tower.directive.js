(function() {
	angular
		.module('jofApp')
		.directive('tower', tower);

	function tower() {
		return {
			restrict: 'EA',
			scope: {
				content: '=content',
			},
			templateUrl: '/common/directives/towers/tower.template.html'
		};
	}
})();
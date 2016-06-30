(function() {
	angular
		.module('jofApp')
		.directive('myFooter', myFooter);

	function myFooter() {
		return {
			restrict: 'EA',
			templateUrl: '/common/directives/myFooter/myFooter.template.html'
		};
	}
})();
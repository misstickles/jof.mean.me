(function() {
	angular
		.module('jofApp')
		.directive('keySkills', keySkills);

	function keySkills() {
		return {
			restrict: 'EA',
			scope: {
				content: "=content"
			},
			templateUrl: '/common/directives/resume/keySkills.template.html',
			link: function($scope, $element, $attrs) {
				// TODO: put tooltip somewhere more generic!
				$('[data-toggle="tooltip"]').tooltip();
			},

		};
	}
})();
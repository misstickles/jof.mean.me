(function() {
	angular
		.module('jofApp')
		.directive('navigation', navigation);

	function navigation() {
		return {
			restrict: 'EA',
			templateUrl: '/common/directives/navigation/navigation.template.html',
			link: function($scope, $element, $attrs) {

				// Highlight the top nav as scrolling occurs
				$('body').scrollspy({
				    target: '.navbar-fixed-top',
				    offset: 51
				});

				// Closes the Responsive Menu on Menu Item Click
				$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
				    $('.navbar-toggle:visible').click();
				});

				// Offset for Main Navigation
				$('#mainNav').affix({
				    offset: {
				        top: 200
				    }
				})
			},
		};
	}
})();
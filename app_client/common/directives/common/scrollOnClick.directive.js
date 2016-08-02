(function() {
	angular
		.module('jofApp')
		.directive('scrollOnClick', scrollOnClick);

	function scrollOnClick() {
		return {
			restrict: 'A',
			scope: {
				scrollTo: '@',
			},
			link: function($scope, $element, $attrs) {
				$element.on('click', function() {
				    $('html, body').stop().animate({
				        scrollTop: ($($scope.scrollTo).offset().top - 50)
				    }, 1250, 'easeInOutExpo');
				    event.preventDefault();

//					$('html, body').animate({ scrollTop: $($scope.scrollTo).offset().top }, "easeInOutExpo");
				});
			}
		};
	}
})();
(function() {
	angular
		.module('jofApp')
		.directive('sidebar', sidebar);

	function sidebar() {
		return {
			restrict: 'EA',
			scope: {
				content: '=content',
			},
			templateUrl: '/common/directives/navigation/sidebar.template.html',
			link: function($scope, $element, $attrs) {
				var ht = $('header').height();

				$(window).scroll(function () {
					$('#sidebar').affix({
					    offset: {
					        top: ht - $scope.content.offset
					    }
					});

				});

			}
		};
	}
})();
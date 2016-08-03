(function() {
	angular
		.module('jofApp')
		.controller('solarsystemController', solarsystemController);

	solarsystemController.$inject = ['$scope', 'starsData']
	function solarsystemController($scope, starsData) {
		var vm = this;

		vm.getStars = function() {
			vm.message = 'Fetching some stars.';

			starsData.stars()
				.success(function(data) {
					vm.message = data.length > 0 ? "" : "No stars found.  Brrrrr, it's dark.";
					vm.stars = data;
				})
				.error(function(e) {
					vm.message = "Sorry, I'm having a tantrum, please try again later.  Error: " + e;
				});
		};

		vm.getStars();
	}

})();
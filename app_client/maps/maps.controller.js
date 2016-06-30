(function() {
	angular
		.module('jofApp')
		.controller('mapsController', mapsController);

	mapsController.$inject = ['$scope', 'mapsData']
	function mapsController($scope, mapsData) {
		var vm = this;

		vm.pageHeader = {
			title: 'My little walks',
			strapline: 'Come rain, come shine, just do it.'
		}

		vm.getMaps = function() {
			vm.message = 'Fetching some cool stuff.';

			mapsData.mapsById('2016-06-05_12-12_Sun')
				.success(function(data) {
					vm.message = data.jsonData.length > 0 ? "" : "No cool stuff found.  Boo :o(";
					vm.data = { maps: data };
					console.log(vm.data);
				})
				.error(function(e) {
					vm.message = "Sorry, I'm having a tantrum, please try again later.  Error: " + e;
				});
		};

		vm.getMaps();
	}
})();
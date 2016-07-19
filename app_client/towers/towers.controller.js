(function() {
	angular
		.module('jofApp')
		.controller('towersController', towersController);

	towersController.$inject = ['$scope', 'towersData']
	function towersController($scope, towersData) {
		var vm = this;

		vm.sortOrder = ['-filename'];

		vm.getTowers = function() {
		vm.message = 'Fetching some cool stuff.';

		towersData.towers()
			.success(function(data) {
				vm.message = data.jsonData.length > 0 ? "" : "No cool stuff found.  Boo :o( <br><br>Please try clicking here: <a href='/towers' onclick='location.reload()'>Reload</a>";
				vm.data = data.jsonData;
			})
			.error(function(e) {
				vm.message = "Sorry, I'm having a tantrum, please try again later.  Error: " + e;
			});
		};

		vm.getTowers();
	}

})();
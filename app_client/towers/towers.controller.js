(function() {
	angular
		.module('jofApp')
		.controller('towersController', towersController);

	towersController.$inject = ['$scope', 'towersData', 'orderByFilter']
	function towersController($scope, towersData, orderByFilter) {
		var vm = this;

		vm.getTowers = function() {
			vm.message = 'Fetching some cool stuff.';

			towersData.allTowers()
				.success(function(data) {
					vm.message = data.length > 0 ? "" : "No cool stuff found.  Boo :o( <br><br>Please try clicking here: <a href='/towers' onclick='location.reload()'>Reload</a>";
					vm.data = data;
				})
				.error(function(e) {
					vm.message = "Sorry, I'm having a tantrum, please try again later.  Error: " + e;
				});
		};

		towersData.noBells()
			.success(function(data) {
				vm.noBells = data;
			});
		towersData.counties()
			.success(function(data) {
				vm.counties = data;
			});
		towersData.pracNight()
			.success(function(data) {
				vm.pracNight = data;
				var days = ["Mon", "Tue", "Web", "Thur", "Fri", "Sat", "Sun"];
				// vm.sortDays = orderByFilter(vm.weekDays, function(item) {
				// 	return vm.pracNight.indexOf(item.day);
				// });
			});

		vm.getTowers();

		vm.filterOptions = {
			'function': function(tower) {
				return tower.County.includes(vm.selectedCounties || '')
					&& tower.Bells.includes(vm.selectedBells || '')
					&& tower.PracN.includes(vm.selectedPn || '');
			}
		}

		vm.sortCounty = ['+ctry', '+cty'];
		vm.sortBells = 'b';
		vm.sortPn = 'pn';

		vm.selectedCounties = [];
		vm.selectedBells = [];
		vm.selectedPn = [];

	}

})();
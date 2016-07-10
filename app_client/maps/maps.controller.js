(function() {
  angular
    .module('jofApp')
    .controller('mapsController', mapsController);

  mapsController.$inject = ['$scope', 'mapsData']
  function mapsController($scope, mapsData) {
    var vm = this;

    vm.sortOrder = ['-filename'];

    vm.pageHeader = {
      title: 'My Little Walks',
      description: 'Come rain. Come shine. Just do it.',
      buttonText: 'Go Walkies',
      link: 'maps#maps'
    };

    vm.getMaps = function() {
      vm.message = 'Fetching some cool stuff.';

      mapsData.maps()
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
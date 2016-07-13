(function() {
  angular
    .module('jofApp')
    .controller('mapsController', mapsController);

  mapsController.$inject = ['$scope', 'mapsData']
  function mapsController($scope, mapsData) {
    var vm = this;

    vm.sortOrder = ['-filename'];

    vm.pageHeader = {
      image: 'mapHeader.jpg',
      title: 'My Little Walks',
      description: 'Come rain. Come shine. Just do it.',
      buttonText: 'Go Walkies',
      linkId: '#maps'
    };

    vm.getMaps = function() {
      vm.message = 'Fetching some cool stuff.';

      mapsData.maps()
        .success(function(data) {
          vm.message = data.jsonData.length > 0 ? "" : "No cool stuff found.  Boo :o( <br><br>Please try clicking here: <a href='/maps' onclick='location.reload()'>Reload</a>";
          vm.data = { maps: data };
        })
        .error(function(e) {
          vm.message = "Sorry, I'm having a tantrum, please try again later.  Error: " + e;
        });
    };

    vm.getMaps();
  }
})();
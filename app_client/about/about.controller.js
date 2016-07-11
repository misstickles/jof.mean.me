(function() {
  angular
    .module('jofApp')
    .controller('aboutController', aboutController);

  aboutController.$inject = ['$scope', 'mapsData']
  function aboutController($scope, mapsData) {
    var vm = this;

    vm.pageHeader = {
      image: 'aboutHeader.jpg',
      title: 'Jo Faircloth',
      description: 'BEng(hons) BSc(hons) DIS CertWAD(open) CertAPS(open) MIET',
      buttonText: 'OK, let\'s read it',
      linkId: '#about'
    };
  }
})();
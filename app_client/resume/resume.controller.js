(function() {
	angular
		.module('jofApp')
		.controller('resumeController', resumeController);

	resumeController.$inject = ['$scope']
	function resumeController($scope) {
		var vm = this;

		vm.pageHeader = {
			image: 'resumeHeader.jpg',
			title: 'Jo Faircloth',
			description: '.Net Developer<br><small>Interactive Resume</small>',
			buttonText: 'OK. I\'ll read it',
			linkId: '#resume'
		};
	}

})();
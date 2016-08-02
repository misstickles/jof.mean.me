(function() {
	angular
		.module('jofApp')
		.controller('resumeController', resumeController);

	resumeController.$inject = ['$scope', 'resumeData']
	function resumeController($scope, resumeData) {
		var vm = this;

		resumeData.resume()
			.success(function(data) {
				vm.message = data.length > 0 ? "" : "No cool stuff found.  Boo :o( <br><br>Please try clicking here: <a href='/maps' onclick='location.reload()'>Reload</a>";
				vm.data = data;
				console.log(vm.data);
			})
			.error(function(e) {
				vm.message = "Sorry, I'm having a tantrum, please try again later.  Error: " + e;
			});

		vm.pageHeader = {
			image: 'resumeHeader.jpg',
			title: 'Jo Faircloth',
			description: 'BEng(hons) DIS CertWAD CertAPS MIET<br><br>.Net Developer<br>Interactive Resume',
			buttonText: 'OK. I\'ll read it',
			linkId: '#resume'
		};

		vm.sidebar = {
			menu: [
				{
					"title": "Experience",
					"link": "#experience",
					"icon": "pencil-square-o",
					"class": "experience"
				},
				{
					"title": "Education",
					"link": "#education",
					"icon": "mortar-board",
					"class": "education"
				},
				{
					"title": "Professional Quals",
					"link": "#professional",
					"icon": "mortar-board",
					"class": "professional"
				},
				{
					"title": "Key Skills",
					"link": "#skills",
					"icon": "mortar-board",
					"class": "skills"
				}
			],
			offset: 0
		}
	}

})();
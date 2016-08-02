(function() {
	angular
		.module('jofApp')
		.service('resumeData', resumeData);

	resumeData.$inject = ['$http'];
	function resumeData($http) {
		var resume = function() {
			return $http.get('/api/resume')
				// .then(
				// 	function(response) {
				// 		return response;
				// 	},
				// 	function(httpError) {
				// 		throw httpError.status + ' : ' + httpError.data;
				// 	});
		};

		return {
			resume : resume
		};
	}
})();
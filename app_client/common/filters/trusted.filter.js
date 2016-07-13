(function() {
	angular
		.module('jofApp')
		.filter('trusted', trusted);

	trusted.$inject = ['$sce'];
	function trusted($sce) {
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}
})();

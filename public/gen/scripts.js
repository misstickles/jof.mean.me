(function() {
	angular.module('jofApp', ['ngRoute']);

	function config($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: '/maps/maps.view.html',
				controller: 'mapsController',
				controllerAs: 'vm'
			}).when('/maps', {
				templateUrl: '/maps/maps.view.html',
				controller: 'mapsController',
				controllerAs: 'vm'
			}).when('/about', {
				templateUrl: '/about/about.view.html',
				controller: 'aboutController',
				controllerAs: 'vm'
			}).otherwise({
				redirectTo: '/'
			});

		$locationProvider.html5Mode(true);
	}

	angular
		.module('jofApp')
		.config(['$routeProvider', '$locationProvider', config]);
})();
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
(function () {

  angular
    .module('jofApp')
    .controller('homeCtrl', homeCtrl);

  homeCtrl.$inject = ['$scope', 'loc8rData', 'geolocation'];
  function homeCtrl ($scope, loc8rData, geolocation) {
    var vm = this;
    vm.pageHeader = {
      title: 'Loc8r',
      strapline: 'Find places to work with wifi near you!'
    };
    vm.sidebar = {
      content: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for."
    };
    vm.message = "Checking your location";

    vm.getData = function (position) {
      var lat = position.coords.latitude,
          lng = position.coords.longitude;
      vm.message = "Searching for nearby places";
      loc8rData.locationByCoords(lat, lng)
        .success(function(data) {
          vm.message = data.length > 0 ? "" : "No locations found nearby";
          vm.data = { locations: data };
          console.log(vm.data);
        })
        .error(function (e) {
          vm.message = "Sorry, something's gone wrong, please try again later";
        });
    };

    vm.showError = function (error) {
      $scope.$apply(function() {
        vm.message = error.message;
      });
    };

    vm.noGeo = function () {
      $scope.$apply(function() {
        vm.message = "Geolocation is not supported by this browser.";
      });
    };

    geolocation.getPosition(vm.getData,vm.showError,vm.noGeo);

  }

})();
/*
 AngularJS v1.5.7
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(F,d){'use strict';function x(t,l,g){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(b,e,a,c,k){function p(){m&&(g.cancel(m),m=null);h&&(h.$destroy(),h=null);n&&(m=g.leave(n),m.then(function(){m=null}),n=null)}function A(){var a=t.current&&t.current.locals;if(d.isDefined(a&&a.$template)){var a=b.$new(),c=t.current;n=k(a,function(a){g.enter(a,null,n||e).then(function(){!d.isDefined(z)||z&&!b.$eval(z)||l()});p()});h=c.scope=a;h.$emit("$viewContentLoaded");
h.$eval(s)}else p()}var h,n,m,z=a.autoscroll,s=a.onload||"";b.$on("$routeChangeSuccess",A);A()}}}function w(d,l,g){return{restrict:"ECA",priority:-400,link:function(b,e){var a=g.current,c=a.locals;e.html(c.$template);var k=d(e.contents());if(a.controller){c.$scope=b;var p=l(a.controller,c);a.controllerAs&&(b[a.controllerAs]=p);e.data("$ngControllerController",p);e.children().data("$ngControllerController",p)}b[a.resolveAs||"$resolve"]=c;k(b)}}}var C=d.isArray,D=d.isObject,s=d.module("ngRoute",["ng"]).provider("$route",
function(){function t(b,e){return d.extend(Object.create(b),e)}function l(b,d){var a=d.caseInsensitiveMatch,c={originalPath:b,regexp:b},g=c.keys=[];b=b.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)(\*\?|[\?\*])?/g,function(b,a,d,c){b="?"===c||"*?"===c?"?":null;c="*"===c||"*?"===c?"*":null;g.push({name:d,optional:!!b});a=a||"";return""+(b?"":a)+"(?:"+(b?a:"")+(c&&"(.+?)"||"([^/]+)")+(b||"")+")"+(b||"")}).replace(/([\/$\*])/g,"\\$1");c.regexp=new RegExp("^"+b+"$",a?"i":"");return c}var g={};this.when=
function(b,e){var a;a=void 0;if(C(e)){a=a||[];for(var c=0,k=e.length;c<k;c++)a[c]=e[c]}else if(D(e))for(c in a=a||{},e)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=e[c];a=a||e;d.isUndefined(a.reloadOnSearch)&&(a.reloadOnSearch=!0);d.isUndefined(a.caseInsensitiveMatch)&&(a.caseInsensitiveMatch=this.caseInsensitiveMatch);g[b]=d.extend(a,b&&l(b,a));b&&(c="/"==b[b.length-1]?b.substr(0,b.length-1):b+"/",g[c]=d.extend({redirectTo:b},l(c,a)));return this};this.caseInsensitiveMatch=!1;this.otherwise=function(b){"string"===
typeof b&&(b={redirectTo:b});this.when(null,b);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(b,e,a,c,k,p,l){function h(a){var f=v.current;(B=(r=x())&&f&&r.$$route===f.$$route&&d.equals(r.pathParams,f.pathParams)&&!r.reloadOnSearch&&!y)||!f&&!r||b.$broadcast("$routeChangeStart",r,f).defaultPrevented&&a&&a.preventDefault()}function n(){var u=v.current,f=r;if(B)u.params=f.params,d.copy(u.params,a),b.$broadcast("$routeUpdate",u);else if(f||
u)y=!1,(v.current=f)&&f.redirectTo&&(d.isString(f.redirectTo)?e.path(w(f.redirectTo,f.params)).search(f.params).replace():e.url(f.redirectTo(f.pathParams,e.path(),e.search())).replace()),c.when(f).then(m).then(function(c){f==v.current&&(f&&(f.locals=c,d.copy(f.params,a)),b.$broadcast("$routeChangeSuccess",f,u))},function(a){f==v.current&&b.$broadcast("$routeChangeError",f,u,a)})}function m(a){if(a){var b=d.extend({},a.resolve);d.forEach(b,function(a,c){b[c]=d.isString(a)?k.get(a):k.invoke(a,null,
null,c)});a=s(a);d.isDefined(a)&&(b.$template=a);return c.all(b)}}function s(a){var b,c;d.isDefined(b=a.template)?d.isFunction(b)&&(b=b(a.params)):d.isDefined(c=a.templateUrl)&&(d.isFunction(c)&&(c=c(a.params)),d.isDefined(c)&&(a.loadedTemplateUrl=l.valueOf(c),b=p(c)));return b}function x(){var a,b;d.forEach(g,function(c,g){var q;if(q=!b){var h=e.path();q=c.keys;var l={};if(c.regexp)if(h=c.regexp.exec(h)){for(var k=1,p=h.length;k<p;++k){var m=q[k-1],n=h[k];m&&n&&(l[m.name]=n)}q=l}else q=null;else q=
null;q=a=q}q&&(b=t(c,{params:d.extend({},e.search(),a),pathParams:a}),b.$$route=c)});return b||g[null]&&t(g[null],{params:{},pathParams:{}})}function w(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var e=a.match(/(\w+)(?:[?*])?(.*)/),g=e[1];c.push(b[g]);c.push(e[2]||"");delete b[g]}});return c.join("")}var y=!1,r,B,v={routes:g,reload:function(){y=!0;var a={defaultPrevented:!1,preventDefault:function(){this.defaultPrevented=!0;y=!1}};b.$evalAsync(function(){h(a);
a.defaultPrevented||n()})},updateParams:function(a){if(this.current&&this.current.$$route)a=d.extend({},this.current.params,a),e.path(w(this.current.$$route.originalPath,a)),e.search(a);else throw E("norout");}};b.$on("$locationChangeStart",h);b.$on("$locationChangeSuccess",n);return v}]}),E=d.$$minErr("ngRoute");s.provider("$routeParams",function(){this.$get=function(){return{}}});s.directive("ngView",x);s.directive("ngView",w);x.$inject=["$route","$anchorScroll","$animate"];w.$inject=["$compile",
"$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});
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
(function() {
	angular
		.module('jofApp')
		.factory('googleMapsPromise', googleMapsFactory);

	googleMapsFactory.$inject = ['$q', '$rootScope', '$window'];
	function googleMapsFactory($q, $rootScope, $window) {
		var asyncUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA4dd9bVUFlxCouni33X-NkNZSAZJfnzx0&callback=';
		var deferred = $q.defer();

		// global variable - callback function
		$window.googleMapsInitialised = deferred.resolve;

		// // async loader
		var asyncLoader = function(asyncUrl, callback) {
			var script = document.createElement('script');
			script.src = asyncUrl + callback;
			document.body.appendChild(script);
		};

		asyncLoader(asyncUrl, 'googleMapsInitialised');

		// Usage: mapsFactoryPromise.mapsInitialised.then(callback)
		return {
			mapsInitialised: deferred.promise
		};
	}

})();
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

(function() {
	angular
		.module('jofApp')
		.service('mapsData', mapsData);

	mapsData.$inject = ['$http'];
	function mapsData($http) {
		var maps = function() {
			return $http.get('/api/maps')
				// .then(
				// 	function(response) {
				// 		return response;
				// 	},
				// 	function(httpError) {
				// 		throw httpError.status + ' : ' + httpError.data;
				// 	});
			};

		return {
			maps : maps
		};
	}
})();

(function() {
	angular
		.module('jofApp')
		.service('mapsDataAsync', mapsDataAsync);

	mapsDataAsync.$inject = ['$http', '$q'];
	function mapsDataAsync($http, $q) {
		return {
			loadMaps: function(maps) {
				var deferred = $q.defer();
				var mapCalls = [];
				angular.forEach(maps, function(map) {
					mapCalls.push($http.get(map.jsonData));
				});

				$q.all(mapCalls)
					.then(
						function(results) {
							deferred.resolve(JSON.stringify(results));
						},
						function(errors) {
							deferred.reject(errors);
						},
						function(updates) {
							deferred.update(updates);
						});

					return deferred.promise;
				}
			};
		};

})();
(function() {
	angular
		.module('jofApp')
		.directive('chart', chart);

	function chart() {
		return {
			restrict: 'EA',
			scope: {
				content: '=content',
			},
			templateUrl: '/common/directives/chart/chart.template.html',
			link: chartLink
		}
	}

	function chartLink($scope, $element, $attrs) {
		// googleChartsPromise.chartsInitialised.then(function() {

		google.charts.setOnLoadCallback(drawChart);

		function drawChart() {

			var data = new google.visualization.DataTable();
			data.addColumn('datetime', 'X');
			data.addColumn('number', 'Altitude');

			var xml = $scope.content;
			var points = [];
			var tmpTime = new Date();

			// TODO: assuming only one track
			$.each(xml.gpx.trk[0].trkseg, function(idx, el) {
				points = [];

				$.each(el.trkpt, function(idx, el) {
					var elev = Math.round(el.ele * 1000) / 1000;
					var time = new Date(el.time);
					if (!time.isValidDate()) {
						time = new Date(tmpTime.addSeconds(15));
					}
//					var time = el.time ? new Date(el.time) : (tmpTime += tmpTime.addSeconds(15));
					var d = [time, elev];
					points.push(d);
				});
			});

			data.addRows(points);

			var options = {
				hAxis: {
					title: 'Time'
				},
				vAxis: {
					title: 'Altitude (ft)'
				},
				width: '100%',
				height: '100%',
				colors: ['#800000'],
				is3D: true,
				legend: 'none'

			};

			var chart = new google.visualization.LineChart(
				$element[0].querySelector('#chart'));

			chart.draw(data, options);

			$(window).resize(function() {
				chart.draw(data, options);
			});
			// window.addEventListener('resize', function() {
			// 	chart.draw(data, options);
			// });
		}
	}

	google.charts.load('current', {packages: ['corechart', 'line']});

})();
(function() {
	angular
		.module('jofApp')
		.directive('scrollOnClick', scrollOnClick);

	function scrollOnClick() {
		return {
			restrict: 'A',
			scope: {
				scrollTo: '@'
			},
			link: function($scope, $element, $attrs) {
				$element.on('click', function() {
				    $('html, body').stop().animate({
				        scrollTop: ($($scope.scrollTo).offset().top - 50)
				    }, 1250, 'easeInOutExpo');
				    event.preventDefault();

//					$('html, body').animate({ scrollTop: $($scope.scrollTo).offset().top }, "easeInOutExpo");
				});
			}
		};
	}
})();
(function() {
	angular
		.module('jofApp')
		.directive('myFooter', myFooter);

	function myFooter() {
		return {
			restrict: 'EA',
			templateUrl: '/common/directives/myFooter/myFooter.template.html'
		};
	}
})();
(function() {
	angular
		.module('jofApp')
		.directive('map', map);

	map.$inject = ['googleMapsPromise'];
	function map(googleMapsPromise) {
		return {
			restrict: 'EA',
			scope: {
				content: '=content',
			},
			templateUrl: '/common/directives/map/map.template.html',
			link: function($scope, $element, $attrs) {
				googleMapsPromise.mapsInitialised.then(function() {
					var options = {
						mapTypeId: google.maps.MapTypeId.TERRAIN,
						polyColours: [ '#800000', '#008000' ]
					};
					var map = new google.maps.Map($element[0].querySelector('#map'), options);
					var points = [];
					var bounds = new google.maps.LatLngBounds();
					var xml = $scope.content;

					// TODO: assuming only one track
					$.each(xml.gpx.trk[0].trkseg, function(idx, el) {
						points = [];

						$.each(el.trkpt, function(idx, el) {
							var lat = el.$.lat;
							var lon = el.$.lon;
							var p = new google.maps.LatLng(lat, lon);
							points.push(p);
							bounds.extend(p);
						});

						var poly = new google.maps.Polyline({
							path: points,
							strokeColor: options.polyColours[idx],
							strokeOpacity: 0.7,
							strokeWeight: 2
						});
	
						poly.setMap(map);
					});

					map.fitBounds(bounds);

					google.maps.event.addDomListener(window, 'resize', function() {
						var center = map.getCenter();
						google.maps.event.trigger(map, 'resize');
						map.setCenter(center);
					});
				});
			},
		};
	}
})();
(function() {
	angular
		.module('jofApp')
		.directive('mapDetail', mapDetail);

	function mapDetail() {
		return {
			restrict: 'EA',
			scope: {
				content: '=content',
			},
			templateUrl: '/common/directives/map/mapDetail.template.html',
			link: function($scope, $element, $attrs) {
				// TODO: put tooltip somewhere more generic!
				$('[data-toggle="tooltip"]').tooltip();
			},
		};
	}
})();
(function() {
	angular
		.module('jofApp')
		.directive('navigation', navigation);

	function navigation() {
		return {
			restrict: 'EA',
			templateUrl: '/common/directives/navigation/navigation.template.html',
			link: function($scope, $element, $attrs) {

				// Highlight the top nav as scrolling occurs
				$('body').scrollspy({
				    target: '.navbar-fixed-top',
				    offset: 51
				});

				// Closes the Responsive Menu on Menu Item Click
				$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
				    $('.navbar-toggle:visible').click();
				});

				// Offset for Main Navigation
				$('#mainNav').affix({
				    offset: {
				        top: 200
				    }
				})
			},
		};
	}
})();
(function() {
	angular
		.module('jofApp')
		.directive('pageHeader', pageHeader);

	function pageHeader() {
		return {
			restrict: 'EA',
			scope: {
				content: '=content',
			},
			templateUrl: '/common/directives/pageHeader/pageHeader.template.html'
		};
	}
})();
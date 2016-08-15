;(function() {
	'use strict';

	var pi = Math.PI, rads = pi / 180, cos = Math.cos, sin = Math.sin;
	var PIXELS_PER_AU = 50;

	var Orbit3D = function(eph, opts) {
		opts = opts || {};
		opts.jed = opts.jed || 2451545.0;	// J2000
		opts.tolerance = opts.tolerance || 0.000001;

		this.opts = opts;
		this.elements = eph;
		this.elements = eph.orbit.base;
	};

	Orbit3D.prototype.createOrbit = function(jed) {
		var time = jed;
		var period = this.elements.P + 1;
		var parts = this.elements.e > 0.20 ? 1000 : 500;
		var deltaT = Math.ceil(period / parts);
		var position, vector, vertices = [];
		for (var i = 0; i <= parts; i++, time += deltaT) {
			position = getPositionAtTime(time, this.elements);
			vector = new THREE.Vector3(position[0], position[1], position[2]);
			vertices.push(vector);
		}

		var path = new THREE.Path();
		var geometry = path.createGeometry(vertices);
		var material = new THREE.LineBasicMaterial({
			color: 0x990000,
			linewidth: 10,
			opacity: 0.5
		});

		var line = new THREE.Line(geometry, material);
		return line;
	}

	Orbit3D.prototype.getOrbit = function() {
		// TODO: where are we storing orbit??  (aka ellipse)
		if (!this.orbit) {
			this.orbit = this.createOrbit(this.opts.jed);
		}
		return this.orbit;
	}

	window.Orbit3D = Orbit3D;
})();
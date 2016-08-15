// TODO: un-globalise all this
var pi = Math.PI, rads = pi / 180, cos = Math.cos, sin = Math.sin;
var PIXELS_PER_AU = 50;

// calculate the Julian Ephemeris Date
function toJED(date) {
	return Math.floor((date.getTime() / 86400000) - 0.5) + 2440588;
//	return Math.floor((date.getTime() / (1000 * 60 * 60 * 24)) - 0.5) + 2440588;
}

function constrain(value, min, max){
	if(value < min)
		value = min;
	else if(value > max)
		value = max;
	return value;
}

function loadTexture(path) {
    return new THREE.TextureLoader().load(path);
}

function loadImage(path, callback) {
    var image = new Image();
    image.onload = callback;
    image.src = path;
    return image;
}

// http://ssd.jpl.nasa.gov/txt/aprx_pos_planets.pdf
// TODO: Why does my version not work??
function getPositionAtTime(jed, element) {
	var e = element.e;
    var a = element.a;
    var i = element.i * pi/180;
    var o = element.o * pi/180; // longitude of ascending node
    // TODO this logic prevents values of 0 from being treated properly.
    var p = (element.w_bar || (element.w + element.o)) * pi/180; // LONGITUDE of perihelion
    var ma = (element.L - (element.w_bar - element.o)) * pi/180;

    // Calculate mean anomaly at jed.
    var n;
    if (element.n) {
      n = element.n * pi/180; // mean motion
      //n = 17.0436 / sqrt(a*a*a);
    } else {
      n = 2*pi / element.P;
    }
    var epoch = element.epoch;
    var d = jed - epoch;
    var M = ma + n * d;

    // Estimate eccentric and true anom using iterative approx.
    var E0 = M;
    var lastdiff;
    do {
      var E1 = M + e * sin(E0);
      lastdiff = Math.abs(E1-E0);
      E0 = E1;
    } while(lastdiff > 0.0000001);
    var E = E0;
    var v = 2 * Math.atan(Math.sqrt((1+e)/(1-e)) * Math.tan(E/2));

    // radius vector, in AU
    var r = a * (1 - e*e) / (1 + e * cos(v)) * PIXELS_PER_AU;

    // heliocentric coords
    var X = r * (cos(o) * cos(v + p - o) - sin(o) * sin(v + p - o) * cos(i))
    var Y = r * (sin(o) * cos(v + p - o) + cos(o) * sin(v + p - o) * cos(i))
    var Z = r * (sin(v + p - o) * sin(i))
    var ret = [X, Y, Z];
    return ret;
}

function getPositionAtTime1(jed, element) {
	var a = element.a;
	var e = element.e;
	var i = element.i * rads;
	var o = element.o * rads;
	var L = element.L * rads;
	var w_bar = element.w_bar * rads;

	// argument of perihelion, w_bar
	var p = (element.w_bar || element.w + element.o) * rads;

	// mean daily motion of a planet, n
	// n = 2pi / P
	var n;
	if (element.n) {
		n = element.n * rads;
	} else {
		n = 2 * pi / element.P;
	}

	// mean anomoly, M
	var d = jed - element.epoch;
	var M = n * d + (L - w_bar);
	// TODO: Jupiter, Saturn, Uranus, Neptune, Pluto
	// T = (Teph - 2451545.0)/36525
	// M = L - w_bar + bT2 + ccos(fT) + ssin(fT) (when using formulae 3000BC to 3000AD)
	
	var e_star = 57.27578 * e;
	var E0 = M, E1, deltaE;
	// TODO: not sure I understand this from the documentation
	do {
		E1 = M + e * sin(E0);
		deltaE = Math.abs(E1 - E0);
		E0 = E1;
		// deltaM = M - (E1 - e_star * sin(E1));
		// deltaE = deltaM / (1 - e * cos(E1));
		// E1 = E1 + deltaE;
	} while (deltaE > opts.tolerance);

	var E = E0;
}

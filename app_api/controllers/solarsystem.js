var stars = require('../data/solarsystem/stars.json');
var constellations = require('../data/solarsystem/constellations.json');

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

// GET return resume data
module.exports.getStars = function(req, res) {
	sendJsonResponse(res, 200, stars);
};

module.exports.getConstellations = function(req, res) {
	sendJsonResponse(res, 200, constellations);
};
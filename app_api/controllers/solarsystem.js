var stars = require('../data/solarsystem/stars.json');

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

// GET return resume data
module.exports.getStars = function(req, res) {
	sendJsonResponse(res, 200, stars);
};

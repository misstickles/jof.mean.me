var resume = require('../data/resume/resume.json');

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

// GET return resume data
module.exports.getResume = function(req, res) {
	sendJsonResponse(res, 200, resume);
};

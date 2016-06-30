var request = require('request');
var apiOptions = {
	server: "http://localhost:3000"
};

if (process.env.NODE_ENV === 'production') {
	apiOptions.server = "http://jofmean.azurewebsites.net";
}

var renderMaps = function(req, res) {
	// var message;

	// if (!(responseBody instanceof Array)) {
	// 	message = "I'm not an array...";
	// 	// responseBody = [];
	// } else {
	// 	if (!responseBody.length) {
	// 		message = "No data";
	// 	}
	// }

	res.render('maps-list', {
		title: 'Jo F - maps thingy',
		pageHeader: {
			title: 'JoF maps',
			strapline: 'strap'
		},
		// message: message,
		// data: responseBody,
	});
};

/* GET maps page */
module.exports.maps = function(req, res) {
	// var requestOptions, path;
	// path = '/api/maps';	// /' + req.params.id
	// requestOptions = {
	// 	url: apiOptions.server + path,
	// 	method: 'GET',
	// 	json: {},
	// 	qs: {
	// 		id: 0	// 
	// 	}
	// };

	// request(
	// 	requestOptions,
	// 	function(err, response, body) {
	// 		if (err) {
	// 			return console.error(err);
	// 		}

	// 		var i, data;
	// 		data = body;

	// 		if (response.statusCode === 200 && data.length) {
	// 			console.log(data);
	// 			data = "test 123";
	// 		}

	renderMaps(req, res);
	//	}
	// );
};


var parseString = require('xml2js').parseString;
var fs = require('mz/fs');
var path = require('path');

var mapDirectory = './public/data/maps/';
var mapData = require('../data/map.detail.json');

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

var jsonData = [];

// GET all maps
module.exports.getAllMaps = function(req, res) {
	fs.readdir(mapDirectory)
		.then(filenames => {
			filenames.forEach(filename => {
				_readGpxFileToJson(filename);
			});

			sendJsonResponse(res, 200, { jsonData });
			jsonData = [];
		})
		.catch(err => {
			console.error(err);
			sendJsonResponse(res, 500, { "message": err });
		});
};

var _readGpxFileToJson = function(filename) {
	fs.readFile(mapDirectory + filename, 'utf8', function(err, xml) {
		if (path.extname(filename) === ".gpx") {
			if (err) {
				return console.error(err);
			}

			parseString(xml.toString(), function(err, result) {
				if (err) {
					return console.error('parseString error: ' + err);
				}

				result['title'] = mapData[filename].title;
				result['desc'] = mapData[filename].desc;
				result['tags'] = mapData[filename].tags;
				result['dist'] = mapData[filename].dist;
				result['circular'] = mapData[filename].circular;
				result['filename'] = filename;
				result['date'] = mapData[filename].date;
				jsonData.push(result);
			});
		}
	});
}

var _readFilePromisified = function(filename, index, array) {
	filename = 'public/data/maps/' + filename;
	return new Promise(
		function (resolve, reject) {
			readFile(filename, { encoding: 'utf8' },
				(error, data) => {
					if(error) {
						reject(error);
					} else {
						console.log(data);
						resolve(data);
					}
				});
		});
}
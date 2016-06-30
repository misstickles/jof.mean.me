var parseString = require('xml2js').parseString;
const fs = require('mz/fs');

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

var jsonData = [];

/* GET all maps */
// TODO: WTF??  This needs to be run twice to get the jsonData...
module.exports.getAllMaps = function(req, res) {

	fs.readdir('public/data/maps')
		.then(function(filenames) {
			filenames.forEach(function(filename) {
				_readGpxFileToJson(filename);
				//console.log(jsonData);
			});

			sendJsonResponse(res, 200, { "status":"success", jsonData });
			jsonData = [];
		})
		.catch(function(err) {
			sendJsonResponse(res, 500, { "status":"error", "message":err })
		});
};

/* GET map data points by data id */
module.exports.getMapData = function(req, res) {
	console.log('getMapData ' + req);
	if (req.params && req.params.mapid) {
		_readGpxFileToJson(req.params.mapid + ".gpx");
		sendJsonResponse(res, 200, { "status":"success", jsonData });
		jsonData = [];
	}
};

function _readGpxFileToJson(filename) {
	fs.readFile('public/data/maps/' + filename, 'utf8', function(err, xml) {
		if (err) {
			return console.error(err);
		}

		parseString(xml.toString(), function(err, result) {
			if (err) {
				return console.error('parseString error: ' + err);
			}

			result['filename'] = filename;
			jsonData.push(result); // JSON.stringify(result);
		});
	});
}

function _readFilePromisified(filename, index, array) {
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

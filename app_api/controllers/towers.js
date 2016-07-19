var fs = require('mz/fs');

var towersListDirectory = './app_api/data/towers/';

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

var jsonData = [];

// GET all maps
module.exports.getAllData = function(req, res) {
	fs.readdir(towersListDirectory)
		.then(file => {
			_readFileToJson(file);
			
			sendJsonResponse(res, 200, { jsonData });
			jsonData = [];
		})
		.catch(err => {
			console.error(err);
			sendJsonResponse(res, 500, { "message": err });
		});
};

var _readFileToJson = function(filename) {
	fs.readFile(towersListDirectory + filename, 'utf8', function(err, data) {
		if (err) {
			return console.error(err);
		}

		var lines = data.toString().split('\r\n');

		lines.forEach(line => {
			var d = {};
			var i = line.split('\\');

			d["DoveID"] = i["0"]
			d["NG"] = i["1"]
			d["SNLat"] = i["2"]
			d["SNLong"] = i["3"]
			d["Postcode"] = i["4"]
			d["TowerBase"] = i["5"]
			d["County"] = i["6"]
			d["Country"] = i["7"]
			d["ISO3166code"] = i["8"]
			d["Diocese"] = i["9"]
			d["Place"] = i["10"]
			d["Place2"] = i["11"]
			d["PlaceCL"] = i["12"]
			d["Dedicn"] = i["13"]
			d["Bells"] = i["14"]
			d["Wt"] = i["15"]
			d["App"] = i["16"]
			d["Note"] = i["17"]
			d["Hz"] = i["18"]
			d["Details"] = i["19"]
			d["GF"] = i["20"]
			d["Toilet"] = i["21"]
			d["UR"] = i["22"]
			d["PDNo"] = i["23"]
			d["PracN"] = i["24"]
			d["PSt"] = i["25"]
			d["PrXF"] = i["26"]
			d["OvhaulYr"] = i["27"]
			d["Contractor"] = i["28"]
			d["TuneYr"] = i["29"]
			d["ExtraInfo"] = i["30"]
			d["WebPage"] = i["31"]
			d["Updated"] = i["32"]
			d["Affiliations"] = i["33"]
			d["AltName"] = i["34"]
			d["Simulator"] = i["35"]
			d["Lat"] = i["36"]
			d["Long"] = i["37"]
			
			jsonData.push(d);
		});
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
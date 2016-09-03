var fs = require('mz/fs');

var towersListDirectory = './app_api/data/towers/';
var towersList = require('../data/towers/towers.data.json');

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

var jsonData = [];

// GET return all towers
module.exports.getAll = function(req, res) {
	sendJsonResponse(res, 200, towersList);
};

module.exports.counties = function(req, res) {
	var unique = {};
	var distinct = [];

	var counter = towersList.reduce(function(cnt, curr) {
		cnt[curr.County] = (cnt[curr.County] || 0) + 1;
		return cnt;
	}, {});

	towersList.forEach(tower => {
		if (typeof(unique[tower.County]) == 'undefined') {
			distinct.push({ "ctry": tower.Country, "cty": tower.County, "cnt": counter[tower.County] });
		}

		unique[tower.County] = 0;
	});

	sendJsonResponse(res, 200, distinct);
};

module.exports.noBells = function(req, res) {
	var unique = {};
	var distinct = [];

	var counter = towersList.reduce(function(cnt, curr) {
		cnt[curr.Bells] = (cnt[curr.Bells] || 0) + 1;
		return cnt;
	}, {});

	towersList.forEach(tower => {
		if (typeof(unique[tower.Bells]) == 'undefined') {
			distinct.push({"b": parseInt(tower.Bells), "cnt": counter[tower.Bells] });
		}

		unique[tower.Bells] = 0;
	});

	sendJsonResponse(res, 200, distinct);
};

module.exports.pracNight = function(req, res) {
	var unique = {};
	var distinct = [];

	var counter = towersList.reduce(function(cnt, curr) {
		cnt[curr.PracN] = (cnt[curr.PracN] || 0) + 1;
		return cnt;
	}, {});

	towersList.forEach(tower => {
		if (typeof(unique[tower.PracN]) == 'undefined') {
			distinct.push({"pn": tower.PracN, "cnt": counter[tower.PracN] });
		}

		unique[tower.PracN] = 0;
	});

	sendJsonResponse(res, 200, distinct);
};


// GET import text file to json object
module.exports.importJsonData = function(req, res) {
	fs.readdir(towersListDirectory)
		.then(file => {
			_readFileToJson(file);
			
			sendJsonResponse(res, 200, jsonData);
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
var express = require('express');
var router = express.Router();

var mapsController = require('../controllers/maps');
//var weatherController = require('../controllers/weather');

//router.get('/maps/:mapid', mapsController.getMapData);
router.get('/maps', mapsController.getAllMaps);

//router.get('/weather/:time/:locationid', weatherController.getAllWeather);
// 

module.exports = router;
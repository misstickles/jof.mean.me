var express = require('express');
var router = express.Router();

var mapsController = require('../controllers/maps');
var towersController = require('../controllers/towers');

//var weatherController = require('../controllers/weather');

// router.use(function(req, res, next) {
// 	console.log('Magic is happening in app_api\\routes\\index.js');
// 	next();
// });

//router.get('/maps/:mapid', mapsController.getMapData);
router.get('/maps', mapsController.getAllMaps);

router.get('/towers', towersController.getAllData);
//router.get('/weather/:time/:locationid', weatherController.getAllWeather);
// 

module.exports = router;
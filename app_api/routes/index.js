var express = require('express');
var router = express.Router();

var mapsController = require('../controllers/maps');
var towersController = require('../controllers/towers');
var resumeController = require('../controllers/resume');
var solarsystemController = require('../controllers/solarsystem');

//var weatherController = require('../controllers/weather');

// router.use(function(req, res, next) {
// 	console.log('Magic is happening in app_api\\routes\\index.js');
// 	next();
// });

//router.get('/maps/:mapid', mapsController.getMapData);
router.get('/maps', mapsController.getAllMaps);

router.get('/towers/', towersController.getAll);
router.get('/towers/counties', towersController.counties);
router.get('/towers/noBells', towersController.noBells);
router.get('/towers/pracNight', towersController.pracNight);
router.get('/towers/importData', towersController.importJsonData);
//router.get('/weather/:time/:locationid', weatherController.getAllWeather);
// 
router.get('/resume', resumeController.getResume);

router.get('/solarsystem/stars', solarsystemController.getStars);
router.get('/solarsystem/constellations', solarsystemController.getConstellations);

module.exports = router;
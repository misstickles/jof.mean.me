var express = require('express');
var router = express.Router();

var mapsController = require('../controllers/maps');

router.get('/maps/:mapid', mapsController.getMapData);
router.get('/maps', mapsController.getAllMaps);

module.exports = router;
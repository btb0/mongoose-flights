var express = require('express');
var router = express.Router()

// Controller Module
var flightsCtrl = require('../controllers/flights')

// All actual paths start with "/flights"

// GET /flights
router.get('/', flightsCtrl.index);

module.exports = router;

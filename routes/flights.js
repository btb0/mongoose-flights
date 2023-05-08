var express = require('express');
var router = express.Router()

// Controller Module
var flightsCtrl = require('../controllers/flights')

// All actual paths start with "/flights"

// GET /flights
router.get('/', flightsCtrl.index);
// GET /flights/new
router.get('/new', flightsCtrl.new);
// POST /flights
router.post('/', flightsCtrl.create);

module.exports = router;

var express = require('express');
var router = express.Router();

// Controller Module
var destinationsCtrl = require('../controllers/destinations')

// All actual paths start with '/' (root)

// POST /flights/:id/destinations
router.post('/flights/:id/destinations', destinationsCtrl.create)

module.exports = router;
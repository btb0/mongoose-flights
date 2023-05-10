const express = require('express');
const router = express.Router();

const ticketsCtrl = require('../controllers/tickets');

// GET /flights/:id/tickets
router.get('/flights/:id/tickets', ticketsCtrl.new);


module.exports = router;
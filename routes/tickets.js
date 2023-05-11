const express = require('express');
const router = express.Router();

const ticketsCtrl = require('../controllers/tickets');

// GET /flights/:id/tickets
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
// POST /flights/:id/tickets
router.post('/flights/:id/tickets', ticketsCtrl.create);
// DELETE flights/:id/tickets/:d
router.delete('/flights/:id/tickets/:ticketId', ticketsCtrl.delete);


module.exports = router;
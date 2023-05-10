const Ticket = require('../models/ticket');
const { Flight } = require('../models/flight');

module.exports = {
    new: newTicket
}

async function newTicket(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render(`/flights/${flight._id}/tickets`);
}
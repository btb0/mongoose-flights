const Ticket = require('../models/ticket');
const { Flight } = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    delete: deleteTicket
}

async function newTicket(req, res) {
    res.render(`tickets/new`, { flightId: req.params.id });
}

async function create(req, res) {
    try {
        req.body.flight = req.params.id;
        await Ticket.create(req.body);
        res.redirect(`/flights/${req.params.id}`)
    } catch (err) {
        console.log(err);
        res.render('tickets/new', { errorMsg: 'Whoops! Failed to make that ticket. Please try again.' });
    }
}

async function deleteTicket (req, res) {
    await Ticket.findByIdAndDelete(req.params.ticketId);
    res.redirect(`/flights/${req.params.id}`);
}
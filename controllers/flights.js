// Flight Model
const { Flight, Airports } = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show
}

async function index (req, res) {
                                        // Sorts flights in ascending order
    const flights = await Flight.find({}).sort({ departs: 1 }).exec();
    res.render('flights/index', {
        flights: flights
    })
}

function newFlight(req, res) {
    const newFlight = new Flight();
    // Obtain the default date
    const dt = newFlight.departs;
    // Format the date for the value attribute of the input
    // yyyy-MM-ddThh:mm   ("T" is used to separate the date portion from the time portion)
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    res.render('flights/new', { departsDate, errorMsg: '' }, console.log(departsDate));
}

async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        await Flight.create(req.body)
        res.redirect('/flights');
    } catch {
        console.log(err)
        res.render('flights/new', { errorMsg: err.message });
    }
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    const destinationAirports = flight.destinations.map((destination) => destination.airport);
    const filteredAirports = Airports.filter((airport) => !destinationAirports.includes(airport));
    // sorts destinations by arrival
    flight.destinations.sort((a, b) => a.arrival - b.arrival);
    res.render('flights/show', { flight, Airports: filteredAirports })
}
// seed/intitialize the database

require('dotenv').config();
require('./config/database');

const Flight = require('./models/flight');

const data = require('./data');

Flight.create(data.flights);
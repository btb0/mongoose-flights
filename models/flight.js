const mongoose = require('mongoose');
// shortcut to mongoose.Schema class
const Schema = mongoose.Schema;

const Airports = ['DEN', 'JFK', 'LGA', 'PHL', 'YYZ'];

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['DEN', 'JFK', 'LGA', 'PHL', 'YYZ']
    },
    arrival: Date
});

const flightSchema = new Schema({
    airline: { 
        type: String,
        enum: ['Air Canada', 'Delta', 'Spirit']
    },
    airport: {
        type: String,
        enum: ['DEN', 'JFK', 'LGA', 'PHL', 'YYZ'],
        default: 'YYZ'
    },
    flightNo: { 
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            const defaultDate = new Date();
            defaultDate.setFullYear(defaultDate.getFullYear() + 1)
            return defaultDate
        }
    },
    destinations: [destinationSchema]
});

const Flight = mongoose.model('Flight', flightSchema)

// compiles the schema into a model and exports it
module.exports = { Flight, Airports }
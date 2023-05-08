const mongoose = require('mongoose');
// shortcut to mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: { 
        type: String,
        enum: ['Air Canada', 'Delta', 'United']
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
    }
});

// compiles the schema into a model and exports it
module.exports = mongoose.model('Flight', flightSchema)
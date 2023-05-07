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
            return new Date().getFullYear() + 1
        }
    }
});
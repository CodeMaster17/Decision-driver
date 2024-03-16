const mongoose = require('mongoose');

const propertyDataScehema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})
// export const PropertyData = mongoose.model('PropertyData', propertyDataScehema);
module.exports = mongoose.model('PropertyData', propertyDataScehema)
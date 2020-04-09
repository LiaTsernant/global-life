const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema({
    name: String,
    resque: {
        emergency: Number,
        police: Number,
        firefighters: Number,
        crisisHotline: Number
    }
}, {timestamps: true});

module.exports = mongoose.model("Country", CountrySchema);
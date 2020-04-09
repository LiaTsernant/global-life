const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    address: String,
    photo: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
    },
    contactPersonName: String,
    contactPersonPhone: String,
    country: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Country'
    }
}, {timestamps: true});

module.exports = mongoose.model("User", UserSchema);
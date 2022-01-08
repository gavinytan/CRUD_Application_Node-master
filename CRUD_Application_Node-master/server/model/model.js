const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    quantity : {
        type : String,
        required: true
    },
    item : {
        type: String,
        required: true
    },
    location : String,
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;
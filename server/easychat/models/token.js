const mongoose = require('mongoose');

const tokenScheme = new mongoose.Schema({
    token: {
        type: String,
        required: true
    } ,
    username: { 
        type: String,
        required: true
    }
});

module.exports =  mongoose.model('Token', tokenScheme);
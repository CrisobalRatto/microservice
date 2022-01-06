const config = require('../config.js');
var mongoose = require('mongoose');

//usar mongoose promise 
mongoose.Promise = global.Promise;



// crear schema
var userSchema = new mongoose.Schema({
    user: String,
    pass: String,
    rol: String,
    nombre: String
});

module.exports = mongoose.model('User', userSchema);




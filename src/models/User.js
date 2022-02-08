const config = require('../config.js');
var mongoose = require('mongoose');
const opts = { toJSON: { virtuals: true } };

//usar mongoose promise 
mongoose.Promise = global.Promise;



// crear schema
var userSchema = new mongoose.Schema({
    user: String,
    pass: String,
    rol: String,
    nombre: String
}, opts);

module.exports = mongoose.model('User', userSchema);




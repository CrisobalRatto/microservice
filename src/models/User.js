const config = require('../config');
var mongoose = require('mongoose');

//usar mongoose promise 
mongoose.Promise = global.Promise;

mongoose.connect(config.db);
var db = mongoose.connection;


//pasar coneccion por error para tener notificacion de errores de conexion 
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// crear schema
var userSchema = new mongoose.Schema({
    user: String,
    pass: String,
    rol: String,
    nombre: String
});

module.exports = mongoose.model('User', userSchema);




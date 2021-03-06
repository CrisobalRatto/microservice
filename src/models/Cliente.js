//const mongoose = require("mongoose");
const {Schema, model} = require("mongoose");


const ClienteSchema = Schema({
    apellidoPaterno: {
        type: String,
        //required: [true ]

    },
    apellidoMaterno: {
        type: String,
        //required: [true ]

    },
    nombre: {
        type: String,
        //required: [true ]

    },
    fechaNacimiento: {
        type: Date,
        //required: [true ]

    },
    sexo: {
        type: Boolean,
        //Require: true,
        default:false
    },
    telefono: {
        type: Number,
        //Require: true

    },
    direccion: {
        type: String,
        //required: [true]

    },
    fechaCreacion: {
        type: Date,
        required: [false],
        //default: Date.now

    },
    fechaModificacion: {
        type: Date,
        required: [false],
        //default: Date.now
    },


});



module.exports = model('Cliente', ClienteSchema);
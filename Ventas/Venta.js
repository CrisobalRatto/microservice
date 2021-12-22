const mongoose = require('mongoose');

mongoose.model('Ventas', {
    

    folio: {
        type: String,
        //required: [true ]

    },
    idCliente: {
        type: mongoose.SchemaType.ObjectId,
        //required: [true ]

    },
    idProducto: {
        type: mongoose.SchemaType.ObjectId,
        //required: [true ]

    },
    cantidad: {
        type: Date,
        //required: [true ]

    },
    subtotal: {
        type: Number,
        //Require: true,
        default:false
    },
    iva: {
        type: Number,
        //Require: true

    },
    total: {
        type: Number,
        //required: [true]

    },
    fechaCreacion: {
        type: Date,
        required: [false],
        default: Date.now

    },
    fechaModificacion: {
        type: Date,
        required: [false],
        default: Date.now
    },



});
const mongoose = require('mongoose');
require("../Productos/Producto.js") 



mongoose.model('Ventas', {
    

    folio: {
        type: String,
        //required: [true ]

    },
    idCliente: {
        type: mongoose.SchemaTypes.ObjectId,
        //required: [true ]

    },
    idProducto: {
        type: mongoose.SchemaTypes.ObjectId,
        //required: [true ]

    },
    cantidad: {
        type: Number,
        //required: [true ]

    },
    subtotal: {
        type: Number,
        //Require: true,
        default:false
    },
    iva: {
        type: Number,
        // get: subtotal => {
            
        //     let iva = Math.floor( 19 / ( subtotal * 100 ) );
        //     return iva;
        // },
        // set: iva => iva,
        //Require: true

    },
    total: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Productos"

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
    }

});



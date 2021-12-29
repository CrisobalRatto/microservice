const mongoose = require("mongoose");

const ventaSchema = new mongoose.Schema({
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
        type: Number,
        

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

var venta = mongoose.model('Ventas', ventaSchema);
module.exports = venta;

//module.exports = mongoose.model('Ventas', ventaSchema);

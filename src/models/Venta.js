//areglar relaciones foreing key 

const mongoose = require("mongoose");
const {Schema, model} = require("mongoose");


const VentaSchema =  Schema({
    folio: {
        type: String,
        //required: [true ]

    },
    idCliente: {
        type: mongoose.Types.ObjectId,
        ref: "Cliente"
        //required: [true ]

    },
    idProducto: {
        type: mongoose.Types.ObjectId,
        ref: "Producto"
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
        //default: Date.now

    },
    fechaModificacion: {
        type: Date,
        required: [false],
        //default: Date.now
    }
});

module.exports =  model("Venta", VentaSchema );


//var venta = mongoose.model('Ventas', ventaSchema);
//module.exports = venta;

//module.exports = mongoose.model('Ventas', ventaSchema);

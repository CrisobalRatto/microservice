const mongoose = require("mongoose")

var Schema   = mongoose.Schema;


var productoSchema = new Schema({
    sku: {
        type: String,
        //required: [true ]
        unique:true

    },
    nombre: {
        type: String,
        //required: [true ]

    },
    marca: {
        type: String,
        //required: [true ]

    },
    descripcion: {
        type: String,
        //required: [true ]

    },
    precio: {
        type: Number,
        //required: [true ]

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

  const Productos = mongoose.model('Productos', productoSchema);

  module.exports = mongoose.model('Productos', productoSchema );

























// mongoose.model('Productos', {
    

        // sku: {
        //     type: String,
        //     //required: [true ]
        //     unique:true
    
        // },
        // nombre: {
        //     type: String,
        //     //required: [true ]
    
        // },
        // marca: {
        //     type: String,
        //     //required: [true ]
    
        // },
        // descripcion: {
        //     type: String,
        //     //required: [true ]
    
        // },
        // precio: {
        //     type: Number,
        //     //required: [true ]
    
        // },
        // fechaCreacion: {
        //     type: Date,
        //     required: [false],
        //     default: Date.now
    
        // },
        // fechaModificacion: {
        //     type: Date,
        //     required: [false],
        //     default: Date.now
        // },
    
    
    
    // });



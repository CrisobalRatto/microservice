const mongoose = require("mongoose");
const {Schema, model} = require("mongoose");



const ProductoSchema =  Schema({
    sku: {
        type: String,
        //required: [true ]

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
        //default: Date.now

    },
    fechaModificacion: {
        type: Date,
        required: [false],
        //default: Date.now
    },
});

//module.exports = mongoose.model('Productos', productoSchema);


 module.exports =  model("Producto", ProductoSchema );



//const mongoose = require('mongoose');
//const { Schema } = mongoose;
// const featuredSchema = new Schema({}, { collection: "featured" });
// module.exports = mongoose.model('featured', featuredSchema);







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



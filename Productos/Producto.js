const mongoose = require("mongoose")



    mongoose.model('Productos', {
    

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
            type: Date,
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



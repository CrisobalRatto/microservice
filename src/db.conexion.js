const mongoose = require ("mongoose");

    //connect 
    const conexionDB = async ()=>{
        try{
            const DB = await mongoose.connect("mongodb+srv://cris20xx:NfxFeNq3RUVtubwQ@cluster0.j89qi.mongodb.net/lab", 
            {useNewUrlParser: true, 
            useUnifiedTopology: true
           });
        console.log("Conexión satisfactoria", DB.connection.name);
            } catch(error){
            console.log("Error de conexión BD: ",error);
    }
}

module.exports = conexionDB;
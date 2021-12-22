const express = require ("express");

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());


//cargar mongose
    const mongoose = require ("mongoose");
    require("./Cliente.js"); 
    
    const cliente = mongoose.model("Cliente")

    //connect 
    mongoose.connect("mongodb+srv://cris20xx:NfxFeNq3RUVtubwQ@cluster0.j89qi.mongodb.net/lab", () => {
        console.log("database connected - sercivio clientes");
    })

//mongodb+srv://cris20xx:NfxFeNq3RUVtubwQ@cluster0.j89qi.mongodb.net/test

app.get('/', (req, res) => {
    console.log(req.body)
    res.send("Clientes Servicio")

} )


// //create func
// app.post("/cliente", (req,res) => {
//     console.log(req.body)
//     res.send("00:D")

// })





//Agregar 
app.post("/cliente", (req, res) => {
    var newCliente = {
        nombre: req.body.nombre,
        apellidoPaterno: req.body.apellidoPaterno,
        apellidoMaterno: req.body.apellidoMaterno,
        fechaNacimiento: req.body.fechaNacimiento,
        sexo: req.body.sexo,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        fechaCreacion: req.body.fechaCreacion,
        fechaModificacion: req.body.fechaModificacion
    }
    var Cliente = new cliente(newCliente)
    Cliente.save().then(() => {
        console.log("nuevo cliente creado")
    }).catch((err) => {
        if(err){
            throw err;
        }
    })
    res.send("nuevo cliente creado con exito")
})

app.get("/clientes",(req,res) => {
    cliente.find().then((cliente) => {
        console.log(cliente)
        res.json(cliente)
    }).catch(err  => {
        if(err){
            throw err;
        }

    })


} )





app.get("/cliente/:_id", (req, res) => {
    cliente.findById(req.params._id).then ((cliente) => {
        
        if(cliente){

            res.json(cliente)
        }else{
            res.sendStatus(404);
        }

    }).catch(err => {
        if(err){
            res.status(404).send("no se encontro cliente con ese id")
        }

    })

} )

app.delete("/cliente/:_id", (req,res) => {
    cliente.findOneAndRemove(req.params._id).then(() => {
        res.send("cliente eliminado")

    }).catch(err => {
        if(err){
            res.status(404).send("no se encontro cliente con ese id para ser eliminado")
            
            
        }
    })

} )

app.post("/cliente/modificar/:_id", (req,res) => {
    cliente.findOneAndUpdate(
        {
            _id:req.params._id

        }, 
        {
            nombre: req.body.nombre,
            apellidoPaterno: req.body.apellidoPaterno,
            apellidoMaterno: req.body.apellidoMaterno,
            fechaNacimiento: req.body.fechaNacimiento,
            sexo: req.body.sexo,
            telefono: req.body.telefono,
            direccion: req.body.direccion,
            fechaCreacion: req.body.fechaCreacion,
            fechaModificacion: req.body.fechaModificacion

        }, 
        {

            upsert:true,
            new: true
        }).then(() => {
            res.send("cliente actualizado")
    
        }).catch(err => {
            if(err){
                res.status(404).send("no se encontro cliente con ese id para ser eliminado")
                
                
            }
        })



})


app.listen(8088, () => {
    console.log("corriendo");

})

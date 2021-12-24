const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

app.use(bodyParser.json());


//connect 
mongoose.connect("mongodb+srv://cris20xx:NfxFeNq3RUVtubwQ@cluster0.j89qi.mongodb.net/lab", () => {
    console.log("database connected - servicio productos");
})

//cargar modelo
require("./Producto") 
const producto = mongoose.model("Productos")

app.get('/', (req, res) => {
    console.log(req.body)
    res.send("Productos Servicio")

} )



app.post("/producto", (req, res) => {
    var newProducto = {
        sku: req.body.sku,
        nombre: req.body.nombre,
        marca: req.body.marca,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        fechaCreacion: req.body.fechaCreacion,
        fechaModificacion: req.body.fechaModificacion
    }
    var Producto = new producto(newProducto)
    Producto.save().then(() => {
        console.log("nuevo producto creado")
    }).catch((err) => {
        if(err){
            throw err;
        }
    })
    res.send("nuevo producto creado con exito")
})

app.get("/productos",(req,res) => {
    producto.find().then((producto) => {
        console.log(producto)
        res.json(producto)
    }).catch(err  => {
        if(err){
            throw err;
        }

    })


} )

app.get("/producto/:_id", (req, res) => {
    producto.findById(req.params._id).then ((producto) => {
        
        if(producto){

            res.json(producto)
        }else{
            res.sendStatus(404);
        }

    }).catch(err => {
        if(err){
            res.status(404).send("no se encontro producto con ese id")
        }

    })

} )

app.delete("/producto/:_id", (req,res) => {
    producto.findOneAndRemove(req.params._id).then(() => {
        res.send("cliente eliminado")

    }).catch(err => {
        if(err){
            res.status(404).send("no se encontro cliente con ese id para ser eliminado")
            
            
        }
    })

} )

app.post("/producto/modificar/:_id", (req,res) => {
    producto.findOneAndUpdate(
        {
            _id:req.params._id

        }, 
        {
            sku: req.body.sku,
            nombre: req.body.nombre,
            marca: req.body.marca,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            fechaCreacion: req.body.fechaCreacion,
            fechaModificacion: req.body.fechaModificacion

        }, 
        {

            upsert:true,
            new: true
        }).then(() => {
            res.send("producto actualizado")
    
        }).catch(err => {
            if(err){
                res.status(404).send("no se encontro producto con ese id para ser modificado")
                
                
            }
        })

})

app.listen("5656", () => {
    console.log ("servicio productos corriendo")


})
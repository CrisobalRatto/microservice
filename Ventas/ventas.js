const express = require ("express")
const app = express()
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//cargar mongose
const mongoose = require ("mongoose");
const { default: axios } = require("axios");
require("./Venta.js"); 

const venta = mongoose.model("Ventas")

//connect 
mongoose.connect("mongodb+srv://cris20xx:NfxFeNq3RUVtubwQ@cluster0.j89qi.mongodb.net/lab", () => {
    console.log("database connected - sercivio ventas");
})

//Agregar 
app.post("/venta", (req, res) => {
    var newCliente = {
        folio: req.body.folio,
        idCliente: mongoose.Types.ObjectId(req.body.idCliente),
        idProducto: mongoose.Types.ObjectId(req.body.idProducto),
        cantidad: req.body.cantidad,
        subtotal: req.body.subtotal,
        iva: req.body.iva,
        total: req.body.total,
        fechaCreacion: req.body.fechaCreacion,
        fechaModificacion: req.body.fechaModificacion
    }
    var Venta = new venta(newCliente)
    Venta.save().then(() => {
        res.send("nueva venta creada con exito")
    }).catch((err) => {
        if(err){
            throw err;
        }
    })
    
})


app.get("/ventas",(req,res) => {
    venta.find().then((venta) => {
        console.log(venta)
        res.json(venta)
    }).catch(err  => {
        if(err){
            throw err;
        }

    })


} )

app.get("/venta/:_id", (req, res) => {
    venta.findById(req.params._id).then ((venta) => {
        
        if(venta){
            axios.get("http://localhost:8088/cliente" + venta.idCliente).then((response) =>{
                console.log(response)
                var ventaObject = {nombreCliente: response.data.nombre, nombreProducto:'' }

                axios.get("http:/localhost:5555/producto" + venta.idProducto).then(response) => {
                    ventaObject.nombreProducto = response.data.nombre
                    res.json(ventaObject)

                }


            })
            res.send("respuesta")
            //res.json(venta)
        }else{
            res.send("venta invalida");
        }

    }).catch(err => {
        if(err){
            res.status(404).send("no se encontro cliente con ese id")
        }

    })

} )

app.post("/venta/modificar/:_id", (req,res) => {
    venta.findOneAndUpdate(
        {
            _id:req.params._id

        }, 
        {
            folio: req.body.folio,
            idCliente: mongoose.Types.ObjectId(req.body.idCliente),
            idProducto: mongoose.Types.ObjectId(req.body.idProducto),
            cantidad: req.body.cantidad,
            subtotal: req.body.subtotal,
            iva: req.body.iva,
            total: req.body.total,
            fechaCreacion: req.body.fechaCreacion,
            fechaModificacion: req.body.fechaModificacion

        }, 
        {

            upsert:true,
            new: true
        }).then(() => {
            res.send("venta actualizada")
    
        }).catch(err => {
            if(err){
                res.status(404).send("no se encontro venta con ese id para ser modificado")
                
                
            }
        })

})


app.listen(7070, () => {
console.log("servicio ventas corriendo")


})
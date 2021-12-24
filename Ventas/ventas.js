const express = require ("express")
const app = express()
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//cargar mongose
const mongoose = require ("mongoose");
const { default: axios } = require("axios");
require("./Venta.js"); 
require("../Productos/Producto.js") 


const venta = mongoose.model("Ventas")
const venta = mongoose.model("Productos")





//connect 
mongoose.connect("mongodb+srv://cris20xx:NfxFeNq3RUVtubwQ@cluster0.j89qi.mongodb.net/lab", () => {
    console.log("database connected - sercivio ventas");
})

app.get('/', (req, res) => {
    console.log(req.body)
    res.send("Ventas Servicio")

} )



//Agregar 
app.post("/venta", (req, res) => {
    var newVenta = {
        folio: req.body.folio,
        idCliente: mongoose.Types.ObjectId(req.body.idCliente),
        idProducto: mongoose.Types.ObjectId(req.body.idProducto),
        cantidad: req.body.cantidad,
        subtotal: req.body.precio,
        iva: (req.body.iva),
        total: (req.body.precio * cantidad ) ,
        fechaCreacion: req.body.fechaCreacion,
        fechaModificacion: req.body.fechaModificacion
    }
    var Venta = new venta(newVenta)
    Venta.save().then(() => {
        res.send("nueva venta creada con exito")
    }).catch((err) => {
        if(err){
            throw err;
        }
    })
    
})

//Order.find(any order).populate([ { path: 'orderItems.product', model: 'Order', populate: [ { path: 'user', model: 'User', select: 'name', }, ], }, ])



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

                axios.get("http:/localhost:5555/producto" + venta.idProducto).then((response) => {
                    ventaObject.nombreProducto = response.data.nombre
                    res.json(ventaObject)

                })


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
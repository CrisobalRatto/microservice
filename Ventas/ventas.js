const express = require ("express")
const app = express()
const mongoose = require ("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());


//connect 





try{
await mongoose.connect("mongodb+srv://cris20xx:NfxFeNq3RUVtubwQ@cluster0.j89qi.mongodb.net/lab", 


{
      keepAlive: 300000,
      connectTimeoutMS: 30000,
      autoReconnect: true,
      reconnectTries: 300000,
      reconnectInterval: 5000,
      useMongoClient: true
    }, 
    () => {
      console.log("Conectado a la base de datos!");
    }
  );
}catch(error){console.log(error)}



//cargar modelo
const producto = require("../Productos/Producto.js") 



const venta = require("./Venta.js"); 


const { default: axios } = require("axios");








app.get('/', (req, res) => {
    console.log(req.body)
    res.send("Ventas Servicio")

} )



//Agregar 
app.post("/venta", async (req, res) => {
    //
    //var Productos = mongoose.model(productoSchema, "Productos")
    //var ProductosModel = require('../Productos/Producto.js')
    console.log("body",req.body)
    var productoAgregar = await producto.findById(req.body.idProducto)
    console.log( productoAgregar.precio)
    var newVenta = {

        folio: req.body.folio,
        idCliente: mongoose.Types.ObjectId(req.body.idCliente),
        // idProducto: mongoose.Types.ObjectId(req.body.idProducto),
        cantidad: req.body.cantidad,
        subtotal: req.body.precio,
        iva: (req.body.iva),
        total: productoAgregar.precio ,
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

app.delete("/venta/:_id", (req,res) => {
    venta.findOneAndRemove(req.params._id).then(() => {
        res.send("venta eliminada")

    }).catch(err => {
        if(err){
            res.status(404).send("no se encontro venta con ese id para ser eliminada")
            
            
        }
    })

} )

app.listen(7091, () => {
console.log("servicio ventas corriendo")


})


// Venta venta = new Venta();
		
// 		try {
// 		Cliente cliente = clientesDAO.findById(vDTO.getIdcliente()).get();
// 		venta.setCliente(cliente);

// 		Product product = productsDAO.findById(vDTO.getIdproducto()).get();
// 		venta.setProduct(product);
		
// 		venta.setFolio(Integer.parseInt("100"+vDTO.getFolio()));
// 		venta.setCantidad(vDTO.getCantidad());
// 		venta.setSubtotal(vDTO.getCantidad()*product.getPrecio());
// 		venta.setIva(vDTO.getIva());
// 		venta.setTotal(Math.round(venta.getSubtotal()*(1+venta.getIva()/100f)/10)*10);
// 		venta.setFechaCreacion(new Date(System.currentTimeMillis()));
// 		venta.setFechaModificacion(null);
	
// 		ventasDAO.save(venta);
// 		return ResponseEntity.ok(venta);
// 		}
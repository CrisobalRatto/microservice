const mongoose = require("mongoose");
const Venta = require("../models/Venta");
const Producto = require("../models/Producto");



//listar ventas
exports.obtenerVentas = async (req, res)=>{
    try{
    const ventas = await Venta.find();
    res.json(ventas);
    }catch(error){
        console.log("error al obtener ventas");
        res.json(error);
    }

}

//inicio Ventas

exports.inicioVentas = (req, res) => {
    console.log(req.body)
    res.send("Ventas Servicio")

} 


//agregar v2

// async function listGames() {
//     const games = await Game
//         .find()
//         .select('title');
//     console.log(games);
// }



//Agregar ventas
exports.agregarVentas = async (req, res)=>{
   
            
        await Producto.findById(mongoose.Types.ObjectId(req.body.idProducto)).then((producto)=> {
            if(producto){
                console.log("producto encontrado: ", producto);
            }else{
                console.log("producto no existe");
                res.json({"error": "error producto no encontrado"});

            };
        
        var newVenta = {

            folio: req.body.folio,
            idCliente: mongoose.Types.ObjectId(req.body.idCliente),
            // idProducto: mongoose.Types.ObjectId(req.body.idProducto),
            cantidad: req.body.cantidad,
            subtotal: producto.precio,
            iva: producto.precio * 0.19 ,
            total: (producto.precio + iva) * cantidad ,
            fechaCreacion: new Date(),
            fechaModificacion: new Date()
        }
    
        var venta = new Venta(newVenta);
        console.log("venta: ",venta);
        venta
        .save()    
        .then((venta) => {
           if (venta) {
             res.status(200).send("Orden completada",data);
           } else {
             res.status(400).send("orden no se pudo completar");
           }
         })
         .catch((err) => res.send(err));
        res.json(venta); 
    });







}


// {status: 200, description : "servicio ejecutado correctamente ", 
// data: {id: valor, descripcion: etc etc}}
//Order.find(any order).populate([ { path: 'orderItems.product', model: 'Order', populate: [ { path: 'user', model: 'User', select: 'name', }, ], }, ])



//buscar venta por id

exports.listarVentasID = (req, res) => {
    Venta.findById(req.params._id).then ((venta) => {
        
        if(venta){

            res.json(venta)
        }else{
            res.sendStatus(404);
        }

    }).catch(err => {
        if(err){
            res.status(404).send("no se encontro venta con ese id")
        }

    })

}





// exports.listarVentasID = (req, res) => {
//     Venta.findById(req.params._id).then ((venta) => {
        
//         if(venta){
//             axios.get("http://localhost:3001/cliente" + venta.idCliente).then((response) =>{
//                 console.log(response)
//                 var ventaObject = {nombreCliente: response.data.nombre, nombreProducto:'' }

//                 axios.get("http://localhost:3001/producto" + venta.idProducto).then((response) => {
//                     ventaObject.nombreProducto = response.data.nombre
//                     res.json(ventaObject)

//                 })


//             })
//             res.send("respuesta")
//             //res.json(venta)
//         }else{
//             res.send("venta invalida");
//         }

//     }).catch(err => {
//         if(err){
//             res.status(404).send("no se encontro venta con ese id")
//         }

//     })

// } 

//modificar venta por id

exports.modificarVentaID = (req,res) => {
    Venta.findOneAndUpdate(
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
            fechaCreacion: req.params.fechaCreacion,
            fechaModificacion: new Date()

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

}


//eliminar Venta por id

exports.eliminarVentaID = (req,res) => {
    Venta.findOneAndRemove(req.params._id).then(() => {
        res.send("venta eliminada")

    }).catch(err => {
        if(err){
            res.status(404).send("no se encontro venta con ese id para ser eliminada")
            
            
        }
    })

} 



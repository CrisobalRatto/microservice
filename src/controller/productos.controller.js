const Producto = require("../models/Producto");

//listar productos
exports.obtenerProductos = async (req, res)=>{
    try{
    const productos = await Producto.find();
    res.json(productos);
    }catch(error){
        console.log("error al obtener productos");
        res.json(error);
    }

}
//inicio

exports.inicioProductos = (req, res) => {
    console.log(req.body)
    res.send("Productos Servicio")

} 

//agregar producto

exports.agregarProductos = (req, res) => {
    var newProducto = {
        sku: req.body.sku,
        nombre: req.body.nombre,
        marca: req.body.marca,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        fechaCreacion: req.body.fechaCreacion,
        fechaModificacion: req.body.fechaModificacion
    }
    var Producto = new Producto(newProducto)
    Producto.save().then(() => {
        console.log("nuevo producto creado")
    }).catch((err) => {
        if(err){
            throw err;
        }
    })
    res.send("nuevo producto creado con exito")
}





//buscar producto por id

exports.listarProductoID = (req, res) => {
    Producto.findById(req.params._id).then ((Producto) => {
        
        if(Producto){

            res.json(Producto)
        }else{
            res.sendStatus(404);
        }

    }).catch(err => {
        if(err){
            res.status(404).send("no se encontro producto con ese id")
        }

    })

}


//eliminar productos por id

exports.eliminarProductoID = (req,res) => {
    Producto.findOneAndRemove(req.params._id).then(() => {
        res.send("cliente eliminado")

    }).catch(err => {
        if(err){
            res.status(404).send("no se encontro cliente con ese id para ser eliminado")
            
            
        }
    })

} 



//modificar producto por id

exports.modificarProductoID = (req,res) => {
    Producto.findOneAndUpdate(
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

}




const Cliente = require("../models/Cliente");
//find Clientes
exports.obtenerClientes = async (req, res)=>{
    try{
    const clientes = await Cliente.find();
    res.json(clientes);
    }catch(error){
        console.log("Error al obtener clientes");
        res.json(error);
    }

}
//inicio 
exports.inicioClientes = (req, res) => {
    console.log(req.body)
    res.send("==Servicio Clientes==");

} 


//agregar

exports.agregarClientes =  (req, res) => {
    var newCliente = {
        nombre: req.body.nombre,
        apellidoPaterno: req.body.apellidoPaterno,
        apellidoMaterno: req.body.apellidoMaterno,
        fechaNacimiento: req.body.fechaNacimiento,
        sexo: req.body.sexo,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        fechaCreacion: new Date(),
        fechaModificacion: new Date()
    }
    var cliente =  new Cliente(newCliente)
    cliente.save().then(() => {
        console.log("nuevo cliente creado")
    }).catch((err) => {
        if(err){
            throw err;
        }
    })
    res.send("nuevo cliente creado con exito")
    res.status(201)
}

//listar por id
exports.listarClienteID = (req, res) => {
    Cliente.findById(req.params._id).then ((Cliente) => {
        
        if(Cliente){

            res.json(Cliente)
        }else{
            res.sendStatus(404);
        }

    }).catch(err => {
        if(err){
            res.status(404).send("no se encontro cliente con ese id")
        }

    })

} 

//eliminar por id

exports.eliminarClienteID = (req,res) => {
    Cliente.findOneAndRemove(req.params._id).then(() => {
        res.send("cliente eliminado")

    }).catch(err => {
        if(err){
            res.status(404).send("no se encontro cliente con ese id para ser eliminado")
            
            
        }
    })

} 


//eliminando clientes
exports.eliminarClienteIDBulk = async (req, res)=>{
   try { 
    await Cliente.deleteMany(
        {
          _id: {
            $in: req.body
          }
        },
        
      );    
        res.json({response:'success'})
    } catch (error ) {
        res.json({error})
    }
}



//modificar por id

exports.modificarClienteID = (req,res) => {
    Cliente.findOneAndUpdate(
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
            fechaCreacion: req.params.fechaCreacion,
            fechaModificacion: new Date()
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

}






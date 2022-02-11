const {Router} = require ("express");
const controllerClientes = require ("../controller/clientes.controller");

const routerClientes = Router();
const Cliente = require("../models/Cliente");
var jwtVerify = require('../middleware/jwt');

routerClientes.use(jwtVerify);



//listar clientes
routerClientes.get("/clientesregistrados", controllerClientes.obtenerClientes);

// pagina inicio
//routerClientes.get("/", controllerClientes.inicioClientes);

//Agregar 
routerClientes.post("/", controllerClientes.agregarClientes);

//listar por id 
routerClientes.get("/:_id", controllerClientes.listarClienteID);

//eliminar por id
routerClientes.delete("/:_id", controllerClientes.eliminarClienteID);

//eliminar muchos id
routerClientes.delete("/", controllerClientes.eliminarClienteIDBulk);




// delete a ninja from the db
routerClientes.delete('/clientes/:id', function(req, res, next){
    Cliente.findByIdAndRemove({id: req.params.id}).then(function(cliente){
        res.send(cliente);
    }).catch(next);
});

//modificar por id 
routerClientes.put("/:_id",controllerClientes.modificarClienteID);

module.exports= routerClientes;
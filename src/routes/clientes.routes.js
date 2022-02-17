const {Router} = require ("express");
const controllerClientes = require ("../controller/clientes.controller");

const routerClientes = Router();
const Cliente = require("../models/Cliente");
var jwtVerify = require('../middleware/jwt');

routerClientes.use(jwtVerify);



//listar clientes
/**
 * @swagger
 * cliente/clientesregistrados:
 *  get:
 *    description: Mostrar todos los clientes registrados
 *    responses:
 *      '200':
 *        description: A successful response
 */
routerClientes.get("/clientesregistrados", controllerClientes.obtenerClientes);

// pagina inicio
//routerClientes.get("/", controllerClientes.inicioClientes);

//Agregar 
/**
 * @swagger
 * cliente/:
 *  post:
 *    description: Agrega clientes
 *    responses:
 *      '200':
 *        description: A successful response
 */
routerClientes.post("/", controllerClientes.agregarClientes);

//listar por id 
/**
 * @swagger
 * cliente/:_id:
 *  get:
 *    description: lista cliente por id 
 *    responses:
 *      '200':
 *        description: A successful response
 */
routerClientes.get("/:_id", controllerClientes.listarClienteID);

//eliminar por id
/**
 * @swagger
 * cliente/:_id:
 *  delete:
 *    description: Elimina cliente por id 
 *    responses:
 *      '200':
 *        description: A successful response
 */
routerClientes.delete("/:_id", controllerClientes.eliminarClienteID);

//eliminar muchos id
/**
 * @swagger
 * cliente/:
 *  get:
 *    description: Elimina ids en bulk 
 *    responses:
 *      '200':
 *        description: A successful response
 */
routerClientes.delete("/", controllerClientes.eliminarClienteIDBulk);




// delete 
routerClientes.delete('/clientes/:id', function(req, res, next){
    Cliente.findByIdAndRemove({id: req.params.id}).then(function(cliente){
        res.send(cliente);
    }).catch(next);
});

//modificar por id 
/**
 * @swagger
 * cliente/:_id:
 *  put:
 *    description: modifica cliente por id
 *    responses:
 *      '200':
 *        description: A successful response
 */
routerClientes.put("/:_id",controllerClientes.modificarClienteID);

module.exports= routerClientes;
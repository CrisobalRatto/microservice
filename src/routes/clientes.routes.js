const {Router} = require ("express");
const controllerClientes = require ("../controller/clientes.controller");

const routerClientes = Router();

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

//modificar por id 
routerClientes.put("/:_id",controllerClientes.modificarClienteID);

module.exports= routerClientes;
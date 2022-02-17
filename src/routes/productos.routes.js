const {Router} = require ("express");
const controllerProductos = require ("../controller/productos.controller");

const routerProductos = Router();

var jwtVerify = require('../middleware/jwt');

routerProductos.use(jwtVerify);

//routerProductos.get("/", controllerProductos.obtenerProductos);

//listar productos
/**
 * @swagger
 * producto/productosregistrados:
 *  get:
 *    description: Mostrar todos los productos registrados
 *    responses:
 *      '200':
 *        description: A successful response
 */
routerProductos.get("/productosregistrados", controllerProductos.obtenerProductos);

// pagina inicio
//routerProductos.get("/", controllerProductos.inicioProductos);

//Agregar 
/**
 * @swagger
 * producto/:
 *  post:
 *    description: agrega productos
 *    responses:
 *      '200':
 *        description: A successful response
 */
routerProductos.post("/", controllerProductos.agregarProductos);

//listar por id 
/**
 * @swagger
 * producto/:_id:
 *  get:
 *    description: Mostrar productos por id
 *    responses:
 *      '200':
 *        description: A successful response
 */
routerProductos.get("/:_id", controllerProductos.listarProductoID);

//eliminar por id
/**
 * @swagger
 * producto/:_id:
 *  delete:
 *    description: elimina producto por id
 *    responses:
 *      '200':
 *        description: A successful response
 */
routerProductos.delete("/:_id", controllerProductos.eliminarProductoID);

//eliminar productos
/**
 * @swagger
 * producto/:
 *  delete:
 *    description: elimina productos en bulk 
 *    responses:
 *      '200':
 *        description: A successful response
 */
routerProductos.delete("/", controllerProductos.eliminarProductoIDBulk);

//modificar por id 
/**
 * @swagger
 * producto/:_id:
 *  put:
 *    description: modifica producto por id
 *    responses:
 *      '200':
 *        description: A successful response
 */
routerProductos.put("/:_id",controllerProductos.modificarProductoID);




module.exports= routerProductos;



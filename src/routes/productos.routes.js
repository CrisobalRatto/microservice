const {Router} = require ("express");
const controllerProductos = require ("../controller/productos.controller");

const routerProductos = Router();


//routerProductos.get("/", controllerProductos.obtenerProductos);

//listar productos
routerProductos.get("/productosregistrados", controllerProductos.obtenerProductos);

// pagina inicio
//routerProductos.get("/", controllerProductos.inicioProductos);

//Agregar 
routerProductos.post("/", controllerProductos.agregarProductos);

//listar por id 
routerProductos.get("/:_id", controllerProductos.listarProductoID);

//eliminar por id
routerProductos.delete("/:_id", controllerProductos.eliminarProductoID);

//modificar por id 
routerProductos.put("/modificar/:_id",controllerProductos.modificarProductoID);






module.exports= routerProductos;



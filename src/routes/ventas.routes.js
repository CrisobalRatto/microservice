const {Router} = require ("express");
const controllerVentas = require ("../controller/ventas.controller");

const routerVentas = Router();


//routerVentas.get("/", controllerVentas.obtenerVentas);


//listar productos
routerVentas.get("/ventasregistradas", controllerVentas.obtenerVentas);

// pagina inicio
//routerVentas.get("/", controllerVentas.inicioVentas);

//Agregar 
routerVentas.post("/", controllerVentas.agregarVentas);

//listar por id 
routerVentas.get("/:_id", controllerVentas.listarVentasID);

//eliminar por id
routerVentas.delete("/:_id", controllerVentas.eliminarVentaID);

//modificar por id 
routerVentas.put("/modificar/:_id",controllerVentas.modificarVentaID);







module.exports= routerVentas;
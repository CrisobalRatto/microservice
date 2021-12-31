const express = require("express");

const conexionDB = require("./db.conexion");
const routerProductos = require("./routes/productos.routes");
const routerClientes = require("./routes/clientes.routes");
const routerVentas = require("./routes/ventas.routes");
const app = express();

//conexion a base de datos 
conexionDB();

//setting
app.set("name", "Microservice");
app.set("port", process.env.port || 3001)


//middleware
app.use(express.json());

module.exports= app;

// llamado rutas

app.use("/api/producto", routerProductos);
app.use("/api/cliente", routerClientes);
app.use("/api/venta", routerVentas);

module.exports = app;
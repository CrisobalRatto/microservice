const express = require("express");
const bodyParser = require('body-parser');
const clientSessions = require('client-sessions');

var routerUser = require('./routes/user.routes');
// var index = require('./routes/index');
// var api = require('./routes/api');

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

// parse setting
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// client clientSessions
app.use(clientSessions({
    cookieName: 'sessions', // cookie req.session para assignar nombre
    secret: '123123dfghj',
    duration: 5 * 60 * 1000, // cuanto dura la session en ms
    cookie: {
        path: '/api/producto/productosregistrados', // cookie sera mandado aesta direccion '/api'
        maxAge: 5 * 60 * 1000,
        httpOnly: true, 
        ephemeral: false // true, cookie expira al cerrar el navegador
    }
}))

// llamado rutas
app.use('/user', routerUser);
app.use("/api/producto", routerProductos);
app.use("/api/cliente", routerClientes);
app.use("/api/venta", routerVentas);

module.exports = app;
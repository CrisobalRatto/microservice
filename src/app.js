const express = require("express");
const bodyParser = require('body-parser');
const clientSessions = require('client-sessions');
const cors = require('cors')
var routerUser = require('./routes/user.routes');
// var index = require('./routes/index');
// var api = require('./routes/api');


const conexionDB = require("./db.conexion");
const routerProductos = require("./routes/productos.routes");
const routerClientes = require("./routes/clientes.routes");
const routerVentas = require("./routes/ventas.routes");
const routerToken = require("./routes/token.routes");
const app = express();

//conexion a base de datos 
conexionDB();

//setting
app.set("name", "Microservice");
app.set("port", process.env.port || 3001)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});


//middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
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
        path: '/api', // cookie sera mandado aesta direccion '/api'
        

        
        
        maxAge: 5 * 60 * 1000,
        httpOnly: true, 
        ephemeral: false // true, cookie expira al cerrar el navegador
    }
}))

// llamado rutas
app.use('/user', routerUser);
app.use('/api/token', routerToken);
app.use("/api/producto", routerProductos);
app.use("/api/cliente", routerClientes);
app.use("/api/venta", routerVentas);

module.exports = app;
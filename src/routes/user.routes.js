const {Router} = require ("express");
const routerUser = Router();
var jwtVerify = require('../middleware/jwt');

var userController = require('../controller/user.controller');


//usuario logeado o no 


routerUser.get('/checkToken', jwtVerify, function(req, res) {
    res.sendStatus(200);
  });

// registrar nuevo usuario
routerUser.post('/register', userController.register_post);

// POST login
routerUser.post('/login', userController.login_post);

//Logout

routerUser.get('/logout', function (req, res, next) {
    var sessions = require('client-sessions');
    req.sessions.reset();
    res.redirect('/login');
});



module.exports = routerUser;
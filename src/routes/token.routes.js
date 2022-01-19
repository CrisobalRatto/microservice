const {Router} = require ("express");
const routerToken = Router();
//var jwtVerify = require('../middleware/jwt');

//var userController = require('../controller/user.controller');
var jwtVerify = require('../middleware/jwt');

routerToken.use(jwtVerify);

//usuario logeado o no 


routerToken.get('/checkToken', jwtVerify, function(req, res) {
    res.sendStatus(200);
  });

  module.exports = routerToken;
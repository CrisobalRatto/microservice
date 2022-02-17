const {Router} = require ("express");
const routerUser = Router();
var jwtVerify = require('../middleware/jwt');

var userController = require('../controller/user.controller');


//usuario logeado o no 

/**
 * @swagger
 * user/checkToken:
 *  get:
 *    description: revisar si user esta logeado o no 
 *    responses:
 *      '200':
 *        description: A successful response
 */

routerUser.get('/checkToken', jwtVerify, function(req, res) {
    res.sendStatus(200);
  });

// registrar nuevo usuario
/**
 * @swagger
 * user/register:
 *  post:
 *    description: registrar usuario
 *    responses:
 *      '200':
 *        description: A successful response
 */
routerUser.post('/register', userController.register_post);

// POST login
/**
 * @swagger
 * user/login:
 *  post:
 *    description: iniciar session
 *    responses:
 *      '200':
 *        description: A successful response
 */
routerUser.post('/login', userController.login_post);

//Logout
/**
 * @swagger
 * user/logout:
 *  get:
 *    description: cerrar session
 *    responses:
 *      '200':
 *        description: A successful response
 */
routerUser.get('/logout', userController.logout)






module.exports = routerUser;
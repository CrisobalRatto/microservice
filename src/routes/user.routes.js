const {Router} = require ("express");
const routerUser = Router();


var userController = require('../controllers/userController');

// registrar nuevo usuario
routerUser.post('/register', userController.register_post);

// POST login
routerUser.post('/login', userController.login_post);

module.exports = routerUser;
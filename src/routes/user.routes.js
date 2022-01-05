var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

// registrar nuevo usuario
router.post('/register', userController.register_post);

// POST login
router.post('/login', userController.login_post);

module.exports = router;
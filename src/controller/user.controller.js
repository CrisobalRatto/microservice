var User = require('../models/User');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var jwtVerify = require('../middleware/jwt');
var config = require('../config');
const clientSessions = require('client-sessions');

const maxAge = 3 * 24 * 60 * 60;

var jwt_sign = function(payload, secret) {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, secret, {
            expiresIn: maxAge
        }, (err, token) => {
            if (err) reject(err);
            resolve(token);
        });
    });
}

// registrar nuevo usuario en post
exports.register_post = function(req, res) {
    // extract req.body fields to create user
    let user = (({
        nombre, user, pass, rol
    }) => ({nombre, 
        user, 
        pass, 
        rol}))(req.body);

    // ver si esta
    User.findOne({user: user.user}).then((doc) => {
        if (doc) {
            return Promise.reject({
                status: false,
                error: 'usuario ya existe .'
            })

        } else {
            // hash 
            user.pass = bcrypt.hashSync(user.pass, config.xx
                );
            user = new User(user);
            return user.save();
        }
    }).then((doc) => {
        console.log(doc);
        res.status(201).send({
            status: true,
            error: ''
        });
    }).catch((e) => {
        res.status(500).send(e);
    });
};

// Login POST
exports.login_post = function(req, res) {
    let loginInfo = (({
        user, pass
    }) => ({user, 
            pass}))(req.body);

    let userInfo = {};
    let token = '';

    // hash pass
    loginInfo.pass = bcrypt.hashSync(loginInfo.pass, config.xx
        );

    // encontrar user en bd
    User.findOne(loginInfo).then((doc) => {
        // crear jwt
        if (doc) {
            userInfo = (({
                nombre, user, rol
            }) => ({nombre, 
                    user, 
                    rol}))(doc);
                    // sign token
            return jwt_sign(userInfo, config.xx);
        } else {
            return Promise.reject({
                status: false,
                error: 'usuario no encontrado.'
            })
        }
    }).then((token) => {
        // set  clientSessions
        if (! req.sessions.token) {
            req.sessions.token = token;
        }
        console.log(token)
        res.send({
            
            token:token,
            user: userInfo.user,
            nombre: userInfo.nombre,
            rol: userInfo.rol
        });
    }).catch((e) => {
        console.log(e)
        res.
        res.status(400).send(e);
    })
}










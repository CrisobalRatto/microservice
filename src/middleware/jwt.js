const jwt = require('jsonwebtoken');
const config = require('../config');

var jwtVerify = function(req, res, next) {
    let token = req.sessions.token;

    // decode jwt token
    jwt.verify(token, config.secret, (err, payload) => {
        console.log(payload);
        if (err || payload.ext < Date.now() / 1000) {
            res.status(401).send({
                "error": "No esta autorizado para usar api "
            });
        } else {
            req.payload = payload;
            next();
        }
    });
}

module.exports = jwtVerify;
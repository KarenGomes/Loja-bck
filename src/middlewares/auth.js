const jwt = require('jsonwebtoken');
require('dotenv').config();


// Middleware de autenticação
function authenticateToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];

    if(!token) {
        return res.status(401).send('Token não informado');
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) {
            return res.status(403).send('Token inválido');
        }
        req.user = user;
        next();
    })
}

module.exports = authenticateToken;
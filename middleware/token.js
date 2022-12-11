const { request, response } = require("express");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const validarjwt = (req = request, res = response, next) =>{
    const token = req.header('access-token');
    console.log(token);

    if (! token) {
        return res.status(401).json({
            msg: "no tiene token"
        })
    }
    try {
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        //preparar el request para el siguiente middleware
        req.user = payload;
        //__________________________________
        next()
        //__________________________________
    } catch (error) {
        return res.status(401).json({
            msg: "token invalido",
            error
        });
    }
}

module.exports = validarjwt;


const express = require('express');
const { login } = require('../../controllers/auth/auth.controller');
const validarCampos = require('../../middlewares/validarCampos');
const { email, password, dbCheck } = require('./validations/auth.validations');
const router = express.Router();
require('colors');

router.use( ( request, response, next ) =>{

    const peticion = request.method.green;

    const fecha = new Date().toString().green;

    console.log( ` Tipo de peticion: ${ peticion }, fecha: ${ fecha }, ruta: ${('/usuarios'+ request.url).green}` );

    next();

})

router.post('/login',[
    email,
    password,
    validarCampos
],login);


module.exports = router;

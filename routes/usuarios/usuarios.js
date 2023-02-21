
const express = require('express');
const { postNewUser, getUsers, deleteUser } = require('../../controllers/users/users.controller');
const { validarJWT } = require('../../middlewares/validar-jwt');
const validarCampos = require('../../middlewares/validarCampos');
const { userName, emailDB, email, password } = require('./validations/validations');
const router = express.Router();
require('colors');

router.use( ( request, response, next ) =>{

    const peticion = request.method.green;

    const fecha = new Date().toString().green;

    console.log( ` Tipo de peticion: ${ peticion }, fecha: ${ fecha }, ruta: ${('/usuarios'+ request.url).green}` );

    next();

})


router.get('/', getUsers )

router.post('/',[ userName, email, emailDB, password, validarCampos, ], postNewUser);

router.delete('/:id', [ validarJWT ] ,deleteUser)


module.exports = router;
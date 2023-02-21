const express = require('express');
const { postNewProduct, getProducts, deleteProduct } = require('../../controllers/products/products');
const validarCampos = require('../../middlewares/validarCampos');
const { 
    titulo, 
    descripcion, 
    imagenes, 
    precio, 
    categorias } = require('./validaciones/validations');
const { id } = require('./validaciones/deleteValidations');


const router = express.Router();


router.use( ( request, response, next ) =>{

    const peticion = request.method.green;

    const fecha = new Date().toString().green;

    console.log( ` Tipo de peticion: ${ peticion }, fecha: ${ fecha }` );

    next();

})


router.get('/', getProducts )

// body('titulo','El titulo de de ser de al menos 5 caracteres').isLength({ min: 5 }),
//     body('imagenes','Debes cargar por lo menos 1 imagen').isLength({ min: 1 }),
//     body('descripcion','La descripcion es necesaria (min 20 caract.)').isLength({ min: 20 }),


router.post('/', [ titulo, descripcion, imagenes, precio, categorias, validarCampos ], postNewProduct );


router.delete('/:id',[ id, validarCampos ], deleteProduct );




module.exports = router;
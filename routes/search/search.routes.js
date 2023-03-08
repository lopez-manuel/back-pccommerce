
const { Router, request, response } = require('express');
const { param } = require('express-validator');
const { categoriaProductos } = require('../../controllers/search/search.controller');
const validarCampos = require('../../middlewares/validarCampos');
const { mongoID } = require('./validaciones');
const router = Router();


router.get('/:categoria',[
    mongoID,
    validarCampos
], categoriaProductos)


module.exports = router;
const { Router } = require('express');
const { body } = require('express-validator');
const { getCategorias, postCategoria } = require('../../controllers/categorias/categorias.controller');
const validarCampos = require('../../middlewares/validarCampos');
const router = Router();



router.get('/',getCategorias);

router.post('/',[body('nombre','El nombre es requerido').not().isEmpty(), validarCampos ], postCategoria);





module.exports = router;
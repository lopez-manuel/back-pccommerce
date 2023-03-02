const { Router } = require('express');
const { subirArchivo, obtenerArchivo } = require('../../controllers/archivos/archivos.controller');

const router = Router();


router.post('/',[], subirArchivo)

router.get('/:nombre',[], obtenerArchivo )


module.exports = router;
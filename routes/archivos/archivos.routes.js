const { Router } = require('express');
const { subirArchivo } = require('../../controllers/archivos/archivos.controller');

const router = Router();


router.post('/',[], subirArchivo)


module.exports = router;
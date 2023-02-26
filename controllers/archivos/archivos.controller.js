const { request, response } = require("express");
const path = require('path');

const subirArchivo = ( req = request, res = response ) => {
    console.log(req.files);

    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.');
        return;
    }

    for (const [key, value] of Object.entries(req.files)) {
        const archivo = value;
    
        const uploadPath = path.join(__dirname,'../../uploads', archivo.name);
        
        archivo.mv(uploadPath, function(err) {
            if (err) {
            return res.status(500).send(err);
            }
        
        });
    }

    res.status(200).json({
        msg: 'Archivos subidos con exito'
    })
}



module.exports = {
    subirArchivo
}
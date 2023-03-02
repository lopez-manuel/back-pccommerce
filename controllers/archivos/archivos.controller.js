const { request, response } = require("express");
const path = require('path');

const subirArchivo = ( req = request, res = response ) => {
    // console.log(req.body);

    // const { usuario } = req.body;

    // const { nombre, edad } = JSON.parse(usuario);

    // console.log({ nombre, edad});

    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.');
        return;
    }

    let imagesUrl = [];

    for (const [key, value] of Object.entries(req.files)) {

        const archivo = value;
    
        const uploadPath = path.join(__dirname,'../../uploads', archivo.name);
        
        archivo.mv(uploadPath, function(err) {
            if (err) {
            return res.status(500).send(err);
            }
        });

        imagesUrl.push(process.env.DOMAIN + 'archivos/' + archivo.name );
    }

    return imagesUrl;
}



const obtenerArchivo = ( req = request, res = response ) => {

    const { nombre } = req.params;

    const filePath = path.join(__dirname,'../../uploads', nombre );

    res.sendFile( filePath );

}


module.exports = {
    subirArchivo,
    obtenerArchivo
}
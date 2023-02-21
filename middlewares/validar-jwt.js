const { request, response } = require('express');
const jwt = require('jsonwebtoken');



const validarJWT = (req = request, res = response, next ) =>{

    const token = req.header('Authorization');


    if( !token ){
        res.status(401).json({
            message: 'No hay token en la peticion'
        })
    }

    try {
        
        const payload = jwt.verify( token, process.env.SECRETORPRIVATEKEY );

        //lo que hace es extrar el uid del token y mandarlo atraves de la request
        req.uid = payload.uid;

        console.log(payload);

        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: 'Token no valido'
        })
    }

    console.log(token);

}

module.exports ={
    validarJWT
}
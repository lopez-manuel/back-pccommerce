const { request, response } = require("express");
const { default: moongose } = require('mongoose');



const mongoID = ( req = request, res = response, next ) => {

    const {categoria} = req.params;

    if(!categoria){
        return res.json({
            msg: 'La id de la categoria es obligatoria'
        })
    }

    if( !moongose.Types.ObjectId.isValid( categoria ) ){
        return res.json({
            msg: 'No es una ID valida'
        })
    }

    next()

}



module.exports = {
    mongoID
}
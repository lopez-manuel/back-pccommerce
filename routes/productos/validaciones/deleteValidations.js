const { body, check } = require("express-validator");
const { default: moongose } = require('mongoose');
const Producto = require('../../../models/producto')



const id = check('id').custom( async id =>{

    console.log(id);
    if( !moongose.Types.ObjectId.isValid( id ) ){
        throw new Error('Esta id no es valida para la DB')
    }

    const exist = await Producto.findById( id )

    if( !exist ){
        throw new Error('No se encontro el post, verifica el id')
    }

    return true;

})


module.exports = {
    id
}
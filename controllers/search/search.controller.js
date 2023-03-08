const { request, response } = require("express");
const Productos = require('../../models/producto');



const categoriaProductos = async ( req = request, res = response ) =>{

    const { categoria } = req.params;

    const productos = await Productos.find({ categorias: [categoria] })

    console.log( req.params );


    res.json({
        msg: 'Ruta ok',
        productos
    })

}



module.exports = {
    categoriaProductos,
}
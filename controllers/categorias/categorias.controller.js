const { request, response } = require("express");
const Categoria = require('../../models/categoria');



const getCategorias = async ( req = request, res = response ) => {

    const categorias = await Categoria.find();

    res.json({
        msg:'Entro a la ruta',
        categorias
    })

}


const postCategoria = async ( req = request, res = response ) => {

    const { nombre } = req.body;

    const categoria = new Categoria({
        nombre,
    });

    categoria.save();

    res.json({
        msg: 'OK',
        categoria
    })

}



module.exports = {
    getCategorias,
    postCategoria
}
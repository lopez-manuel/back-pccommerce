const { request, response, json } = require('express');
const Producto = require('../../models/producto');
const { precio } = require('../../routes/productos/validaciones/validations');
const { subirArchivo } = require('../archivos/archivos.controller');




const postNewProduct = async ( req = request, res = response ) =>{

    console.log(req.body);

    const { imagenes, titulo, descripcion, precio, categorias, informacion } = JSON.parse(req.body.post);

    const rated = Math.floor((Math.random() * (5 - 3 + 1)) + 3);



    const imagesUrl = await subirArchivo( req, res);

    const producto = new Producto({
        imagenes: imagesUrl,
        titulo,
        descripcion,
        precio,
        informacion,
        categorias,
        rated
    });

    await producto.save();

    res.json({
        status: 'Producto creado con exito',
        producto
    })

}


const getProducts = async ( req = request, res = response ) => {

    const { limite, categoria } = req.query;

    if( categoria ){
        const productos = await Producto.find({ categorias: categoria })
        const total = await Producto.countDocuments({ categorias: categoria });
        res.status(200).json({
            total,
            productos
        })
        return
    }

    const [ productos, total ] = await Promise.all([
        Producto.find().populate('categorias'),
        Producto.countDocuments(),
    ])
    

    res.status(201).json({
        total,
        productos
    })

}


const getProductById = async ( req = request, res = response ) => {

    const { id } = req.params;

    const producto = await Producto.findById( id ).populate('categorias');

    res.json({
        msg: 'peticion correcta',
        producto
    })

}


const deleteProduct = async ( req = request, res = response ) =>{

    const { id } = req.params

    const deleted = await Producto.findByIdAndDelete( id );

    res.json({
        message: ' Producto deleteado xd',
        id,
        deleted
    })


}


module.exports = {
    postNewProduct,
    getProducts,
    getProductById,
    deleteProduct
}
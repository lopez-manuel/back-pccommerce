
const { Schema, model } = require('mongoose');



const ProductoSchema = new Schema({
    imagenes: {
        type: Array,
        required: [true, 'Las imagenes son requeridas']
    },
    titulo: {
        type: String,
        required: [true, 'El titulo es requerido']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripcion es requerida']
    },
    precio: {
        type: Number,
        required: [true, 'El precio es requerido']
    },
    categorias: {
        type: Array,
        required: [true,'Las categorias son requeridas']
    }

})


module.exports = model('Producto',ProductoSchema);
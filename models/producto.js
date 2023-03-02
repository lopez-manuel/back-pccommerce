
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
    categorias: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Categoria',
            required: [true,'Las categorias son requeridas']
        }
    ],
    informacion: {
        marca: { type: String},
        modelo: { type: String},
        fabricante: { type: String},
        peso: { type: String || Number }
    },
    comentarios: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comentario',
        }
    ],
    rated:{
        type: Number
    }
})


module.exports = model('Producto',ProductoSchema);
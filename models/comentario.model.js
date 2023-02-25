const { Schema, model } = require('mongoose');

const ComentarioSchema = new Schema({
    comentario: {
        type: String,
        required: [true, 'El comentario es obligatorio']
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [ true, 'El usuario es requerido']
    }
})

module.exports = model('Comentario', ComentarioSchema);
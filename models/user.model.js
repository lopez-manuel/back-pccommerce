const { Schema, model } = require('mongoose');

const UserSchema = new Schema( {
    userName: {
        type: String,
        require: [true,'El userName es un campo obligatorio']
    },
    email: {
        type: String,
        require: [true,'El email es un campo obligatorio']
    },
    password: {
        type: String,
        require: [true,'El password es un campo obligatorio']
    },
})

UserSchema.methods.toJSON = function (){
    const {__v,password,_id,...usuario} = this.toObject();
    usuario.uid = _id;
    return usuario;
}

module.exports = model('User', UserSchema );
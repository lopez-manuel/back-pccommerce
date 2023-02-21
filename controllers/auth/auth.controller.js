const { request, response } = require("express");
const Usuario = require('../../models/user.model');
const bcryptjs = require('bcryptjs');
const { generarJWT } = require("../../helpers/generarJWT");



const login = async(req = request, res = response) =>{

    const { email,password} = req.body;

    try {

        //verificar si el email existe
        const usuario = await Usuario.findOne({email});

        if(!usuario){
            return res.status(400).json({
                message: 'El email no es correcto'
            })
        }

        //verificar si el usuario esta activo

        //verificar la contraseña
        const isValidPassword = bcryptjs.compareSync( password, usuario.password);

        if(!isValidPassword){
            return res.status(400).json({
                message: 'La contraseña no es correcta'
            })
        }

        // generar el jwt
        const token = await generarJWT( usuario._id);

        res.json({
            message: 'Login correcto',
            usuario,
            token
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salio mal, hable con el administrador'
        })
    }

}


module.exports = {
    login
}
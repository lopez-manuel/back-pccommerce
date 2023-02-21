
const mongoose = require('mongoose');


const conexionDB = async() => {

    try {

        await mongoose.connect( process.env.MONGODB_CONECTION )

        console.log('Base de datos online');


    } catch (error) {
        throw new Error(' Error en la base de datos. ')
    }




}


module.exports = conexionDB;
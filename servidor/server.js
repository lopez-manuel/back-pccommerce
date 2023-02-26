const { Router } = require('express');
const express = require('express');
const conexionDB = require('../mongoDB/config');
const productos = require('../routes/productos/productos');
const usuarios = require('../routes/usuarios/usuarios');
const auth = require('../routes/auth/auth.route.js');
const categorias = require('../routes/categorias/categorias.routes');
const archivos = require('../routes/archivos/archivos.routes');
const fileUpload = require('express-fileupload');


const cors = require('cors');
require('dotenv').config();


class Server {

    port = process.env.PORT;
    app = express();

    constructor(){

        this.listen();
        this.middlewares();
        this.routes();
        this.conectarDB();

    }

    routes(){

        this.app.use( '/productos', productos );
        this.app.use('/usuarios', usuarios );
        this.app.use('/auth', auth )
        this.app.use('/categorias', categorias )
        this.app.use('/archivos', archivos)

    }

    middlewares(){


        //renderizado de pagina
        this.app.use( express.static('public') );

        //parseo de parametros
        this.app.use( express.json() );

        this.app.use( cors() );

        this.app.use( fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            createParentPath: true
        }))

    }


    listen(){
        this.app.listen( this.port, () =>{
            console.log( 'Escuchando en el puerto ',this.port );
        } ) 
    }

    async conectarDB(){
        await conexionDB();
    }


}

module.exports = Server;
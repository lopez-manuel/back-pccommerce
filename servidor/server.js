const { Router } = require('express');
const express = require('express');
const conexionDB = require('../mongoDB/config');
const productos = require('../routes/productos/productos');
const usuarios = require('../routes/usuarios/usuarios');
const auth = require('../routes/auth/auth.route.js');

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

    }

    middlewares(){


        //renderizado de pagina
        this.app.use( express.static('public') );

        //parseo de parametros
        this.app.use( express.json() );

        this.app.use( cors() );

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
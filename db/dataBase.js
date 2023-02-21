const fs = require('fs');


class BaseDeDatos {


    constructor( nombre ){

        this.nombre = nombre;

    }


    leerDB(){

        try {

            const datos = JSON.parse( fs.readFileSync(`./db/${this.nombre}.json`) ); 

            console.log( datos );

            return datos;

        } catch (error) {

            console.log('No se pudo leer base de datos');

        }

    }

    escribirDB( data ){



        try {

            let db = [JSON.parse( fs.readFileSync(`./db/${this.nombre}.json`) )] || [];

            db = [ ...db, data ];

            fs.writeFileSync(`./db/${this.nombre}.json`, JSON.stringify( db ) );

        } catch (error) {

            console.log('Error al grabar la DB');

        }
        

    }


}

module.exports = BaseDeDatos;
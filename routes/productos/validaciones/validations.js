const { body } = require("express-validator");


const imagenes = body('imagenes','Tu producto debe contener almenos 1 imagen').isLength( { min: 1 });

const titulo = body('titulo','El titulo debe tener almenos 5 caracteres ').isLength( { min: 5 });

const descripcion = body('descripcion','La descripcion debe contener al menor 20 caracteres').isLength( { min: 20 });

const precio = body('precio').custom( value => {
    console.log(value);
    if(!value){
        throw new Error(' El precio es obligatorio');
    }

    if( isNaN( value )){
        throw new Error(' El precio tiene que ser un numero');
    }

    return true;
})

const categorias = body('categorias','El producto debe tener almenos 1 categoria').isLength( { min: 1 });

module.exports = {
    imagenes,
    titulo,
    descripcion,
    precio,
    categorias
}
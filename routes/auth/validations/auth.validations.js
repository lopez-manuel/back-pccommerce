const { request, response } = require("express");
const { body } = require("express-validator");

const email = body('email').isEmail();

const password = body('password', 'La contraseña es erronea').not().isEmpty();




module.exports = {
    email,
    password,
}
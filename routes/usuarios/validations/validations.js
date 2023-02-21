const { response, request } = require('express');
const { check, body } = require('express-validator');
const user = require('../../../models/user.model');

const userName = body(
	'userName',
	'El nombre de usuario debe tener minimo 6 caracteres'
)
	.isLength(6)
	.custom(async (value) => {
		const userName = await user.findOne({ userName: value });
		if (userName) {
			throw new Error('El usuario ya existe');
		}

		return true;
	});
const email = body('email', 'Ingrese un email valido').isEmail();
const password = body(
	'password',
	'La contraseña debe tener almenos 6 caracteres'
).isLength(6);

const emailDB = body('email').custom(async (value) => {
	const email = await user.findOne({ email: value });

	if (email) {
		throw new Error('El email ya existe');
	}

	return true;
});

module.exports = {
	userName,
	emailDB,
	email,
	password,
};

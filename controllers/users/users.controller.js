const { response, request } = require('express');
const express = require('express');
const Usuario = require('../../models/user.model');
const bcryptjs = require('bcryptjs');

const getUsers = async (req = request, res = response) => {

	const [usuarios, total] = await Promise.all([
		await Usuario.find(),
		await Usuario.countDocuments(),
	]);

	res.json({
		total: total,
		status: 200,
		message: 'Peticion realizada con exito',
		usuarios,
	});
};

const postNewUser = async (req = request, res = response) => {
	const { userName, email, password } = req.body;

	const usuario = new Usuario({
		userName,
		email,
		password,
	});

	const salt = bcryptjs.genSaltSync(10);

	usuario.password = bcryptjs.hashSync(password, salt);

	await usuario.save();

	res.json({
		status: 201,
		message: 'Usuario creado con exito',
		usuario,
	});
};


const deleteUser = (req = request, res = response ) => {

	const uid = req.uid;


	res.json({
		message: 'DELETE OK',
		uid
	})


}

module.exports = {
	postNewUser,
	getUsers,
	deleteUser
};

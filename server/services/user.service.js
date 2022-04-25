const User = require('../models/user.model');
const bcrypt = require('bcrypt');


function signin(payload) {
    return new Promise(async (resolve, reject) => {
        try {
            const user = new User({
                name: payload.name,
                lastname: payload.lastname,
                username: payload.username,
                email: payload.email,
                phone: payload.phone,
                picture: payload.picture,
                role: payload.role
            });
            bcrypt.hash(myPlaintextPassword, 10, function (err, hash) {

                if (err) {
                    throw err;
                }

                user.password = hash;
                await user.save();
                user.password = 'hidden';

                resolve({
                    code: 200,
                    message: 'Usuario creado correctamente',
                    user
                });
            });
        } catch (err) {
            reject({
                code: 500,
                message: 'Se produjo un error al crear el usuario',
                err
            });
        }
    });
}

function login(payload) {
    return new Promise((resolve, reject) => {
        User.findOne({ email: payload.email }, (err, user) => {
            if (err) {
                reject(err);
            } else {
                if (user) {
                    bcrypt.compare(payload.password, hash, function (err, result) {
                        if (err) {
                            reject({
                                code: 401,
                                message: 'Password incorrecto'
                            });

                        } else {
                            if (result) {
                                resolve({
                                    code: 200,
                                    message: 'Login correcto',
                                    user
                                });
                            }
                        }
                    });

                } else {
                    reject(
                        {
                            code: 401,
                            message: 'Usuario no encontrado'
                        }
                    );
                }
            }
        });
    });
}

module.exports = { signin, login };
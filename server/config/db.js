var mongoose = require('mongoose');
var dotenv = require('dotenv');
dotenv.config();

function connect() {
    mongoose.connect('', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('Conexión a la base de datos establecida');
        })
        .catch(err => {
            console.log('Error al conectar a la base de datos', err);
        });
}

module.exports = { connect };
const { parallel } = require('gulp');
const nodemon = require('nodemon');
const run = require('gulp-run');
const dotenv = require('dotenv');
dotenv.config();

function server() {
    nodemon({
        script: 'server/index.js',
        watch: ["server/**",],
        ext: 'js'
    }).on('restart', () => {
        console.log('Server reiniciado!');
    });
}

function client() {
    console.log('Iniciando el servidor de desarrollo front React');
    return run(`PORT=${process.env['FE_PORT']} react-scripts start`).exec();
}

exports.default = parallel(server, client);
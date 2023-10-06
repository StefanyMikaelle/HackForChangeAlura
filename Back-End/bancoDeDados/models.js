const { Sequelize } = require('sequelize');
const {sequelize} = require('./conexao.bancodedados')


const Usuarios = sequelize.define('Usuarios', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },

});


async function gerarModelUsuarios() {
    await Usuarios.sync();
}

sequelize.sync()

gerarModelUsuarios();

module.exports = {Usuarios};

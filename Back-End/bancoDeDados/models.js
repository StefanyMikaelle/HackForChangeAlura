const { Sequelize } = require('sequelize');
const {sequelize} = require('./conexao.bancodedados')


const Jogos = sequelize.define('Jogos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    desenvolvedora: {
        type: Sequelize.STRING
    },
    nota: {
        type: Sequelize.FLOAT
    },
    plataforma_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Plataformas',
            key: 'id'
        }
    }
});

const Plataformas = sequelize.define('Plataformas', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

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
    }
});


async function gerarModelUsuarios() {
    await Usuarios.sync();
}

async function gerarModelJogos() {
    await Jogos.sync();
}
 
async function gerarModelPlataformas() {
    await Plataformas.sync();
}

sequelize.sync()
 
gerarModelUsuarios();
gerarModelPlataformas();
gerarModelJogos();

Plataformas.hasMany(Jogos, { foreignKey: 'plataforma_id' });
Jogos.belongsTo(Plataformas, { foreignKey: 'plataforma_id' });

module.exports = {Plataformas, Jogos, Usuarios};
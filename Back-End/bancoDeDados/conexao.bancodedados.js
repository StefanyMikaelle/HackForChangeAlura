const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    {
        dialect: 'sqlite',
        storage: 'banco.sqlite'
    }
);

module.exports = {sequelize};
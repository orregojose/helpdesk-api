const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    'helpdesk',
    'administrador',
    'Admin50p0r73',
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: true, // Activar logs SQL en consola para debug
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

module.exports = sequelize; 
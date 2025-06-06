const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Ticket = sequelize.define('Ticket', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    estado: {
        type: DataTypes.ENUM('Abierto', 'En Proceso', 'Cerrado'),
        defaultValue: 'Abierto'
    },
    prioridad: {
        type: DataTypes.ENUM('Baja', 'Media', 'Alta'),
        defaultValue: 'Media'
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    solicitante_nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    solicitante_email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    solicitante_departamento: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: 'fechaCreacion',
    updatedAt: 'fechaActualizacion'
});

module.exports = Ticket; 
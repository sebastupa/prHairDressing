const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Asigură-te că calea este corectă

const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'users', // Numele tabelului din baza de date
    timestamps: false, // Dacă nu ai coloane `createdAt` și `updatedAt`
});

module.exports = User;

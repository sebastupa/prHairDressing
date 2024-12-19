// db.js
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

pool.connect()
    .then(() => console.log('Conexiune reușită la baza de date!'))
    .catch((err) => console.error('Eroare la conectare:', err.stack));

module.exports = pool;

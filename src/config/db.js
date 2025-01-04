require('dorenv').config();
const mysql = require('mysql2');

//conexão com o bd
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
});

module.exports = pool.promise();
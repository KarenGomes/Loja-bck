require('dotenv').config();
console.log('DB_USER:', process.env.DB_USER); // Adicione esta linha para ver o valor de DB_USER
console.log('DB_PASS:', process.env.DB_PASSWORD); // Adicione esta linha para ver o valor de DB_PASS
const mysql = require('mysql2');

//conexão com o bd
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

module.exports = pool.promise();
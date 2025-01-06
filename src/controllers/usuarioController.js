const pool = require('../config/db');

async function getUsuario(usuarioId) {
    let connection; 
    try {
        connection = await pool.getConnection();
        const [result] = await connection.query('SELECT * FROM usuario WHERE id = ?', [usuarioId]);
        return result;
    } catch (error) {
        console.error('Erro ao buscar usuario: ', error.message);
        return null;
    } finally {
        if (connection) connection.release();
    }
}

module.exports = {
    getUsuario,
}
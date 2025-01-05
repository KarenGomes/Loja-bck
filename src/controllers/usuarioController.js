const pool = require('../config/db');

async function getUsuario(usuarioId) {
    try {
        const [result] = await pool.query('SELECT * FROM usuario WHERE id = ?', [usuarioId]);
        return result;
    } catch (error) {
        console.error('Erro ao buscar usuario: ', error.message);
        return null;
    }
}

module.exports = {
    getUsuario,
}
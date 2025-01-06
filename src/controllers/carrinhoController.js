const pool = require('../config/db');

async function getCarrinho(usuarioId) {
    let connection; 
    try { 
        connection = await pool.getConnection(); 
        const [result] = await connection.query('SELECT * FROM carrinho WHERE usuarioId= ?', [usuarioId]); 
        return result; 
    } catch (error) { 
        console.error('Erro ao buscar carrinho: ', error.message); 
        return null; 
    } finally { 
        if (connection) connection.release();
    }
}

module.exports = {
    getCarrinho,
}
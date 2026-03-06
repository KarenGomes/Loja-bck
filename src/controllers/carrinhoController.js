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

async function adicionarCarrinho(usuarioId, roupaId, quantidade) {
    const query = `
        INSERT INTO carrinho (usuarioId, roupaId, quantidade)
        VALUES (?, ?, ?)
    `;

    const [result] = await db.execute(query, [usuarioId, roupaId, quantidade]);

    return {
        id: result.insertId,
        usuarioId,
        roupaId,
        quantidade
    };
}

module.exports = {
    getCarrinho,
    adicionarCarrinho
}
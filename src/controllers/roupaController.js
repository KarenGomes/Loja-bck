const pool = require('../config/db');

const getRoupas = async (req, res) => {
    let connection;
    try {
        connection = await pool.getConnection();
        const [result] = await connection.query('SELECT * FROM roupa');
        res.status(200).json(result);
    } catch (error) {
        console.error('Erro ao buscar roupas: ', error.message);
        res.status(500).send('Erro ao buscar roupas');
    } finally {
        if (connection) connection.release();
    }

}

module.exports = {
    getRoupas,
};

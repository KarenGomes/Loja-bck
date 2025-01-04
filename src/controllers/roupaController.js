const pool = require('../config/db');

const getRoupas = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM roupa');
        res.status(200).json(result);
    } catch (error) {
        console.error('Erro ao buscar roupas: ', error.message);
        res.status(500).send('Erro ao buscar roupas');
    }

}

module.exports = {
    getRoupas,
};

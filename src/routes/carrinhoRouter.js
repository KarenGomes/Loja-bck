const express = require('express');
const {getCarrinho} = require('../controllers/carrinhoController');
const router = express.Router();

//Rota para buscar o carrinho de um usuário especifico
router.get('/:usuarioId', async (req, res) => {
    const usuarioId = req.params.usuarioId;
    const carrinho = await getCarrinho(usuarioId);
    if (carrinho) {
        res.status(200).json(carrinho);
    } else {
        res.status(404).send('Carrinho não encontrado');
    }
});

module.exports = router;
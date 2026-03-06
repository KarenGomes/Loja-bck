const express = require('express');
const {getCarrinho} = require('../controllers/carrinhoController');
const {adicionarCarrinho} = require('../controllers/carrinhoController');
const authenticateToken = require('../middlewares/auth');
const router = express.Router();

//Rota para buscar o carrinho de um usuário especifico
router.get('/:usuarioId', authenticateToken, async (req, res) => {
    const usuarioId = req.params.usuarioId;
    const carrinho = await getCarrinho(usuarioId);
    if (carrinho) {
        res.status(200).json(carrinho);
    } else {
        res.status(404).send('Carrinho não encontrado');
    }
});

//Adicionar item ao carrinho
router.post('/', authenticateToken, async (req, res) => {
    const { usuarioId, roupaId, quantidade } = req.body;
    try {
        if(!usuarioId || !roupaId || !quantidade) {
            return res.status(400).send('Usuário, roupa e quantidade são obrigatórios');
        }
        const carrinho = await adicionarCarrinho(usuarioId, roupaId, quantidade);
        res.status(201).json(carrinho);
    } catch (error) {
        res.status(500).send('Erro ao adicionar item ao carrinho');
    }
});

module.exports = router;
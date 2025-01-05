const express = require('express');
const {getUsuario} = require('../controllers/usuarioController');
const router = express.Router();

//rota para buscar um usuario
router.get('/:usuarioId', async (req, res) => {
    const usuarioId = req.params.usuarioId;
    const usuario = await getUsuario(usuarioId);
    if (usuario) {
        res.status(200).json(usuario);
    } else {
        res.status(404).send('Usuario não encontrado');
    }
});


module.exports = router;
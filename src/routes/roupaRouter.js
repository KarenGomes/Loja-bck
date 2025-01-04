const express = require('express');
const {getRoupas} = require('../controllers/roupaController');
const router = express.Router();

//rota para buscar todas as roupas
router.get('/', getRoupas);


module.exports = router;
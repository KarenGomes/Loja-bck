const express = require('express');
const bcrypt = require('bcryptjs');
const pool = require('../config/db');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();

//registro de usuário
router.post('/registro', async (req, res) => {
    const {email, senha, nome} = req.body;

    if(!email || !senha || !nome) {
        return res.status(400).send('E-mail, nome e senha são obrigatórios');
    }

    try {
        const hashedPassword = await bcrypt.hash(senha, 10);
        await pool.query('INSERT INTO usuario (email, senha, nome) VALUES (?, ?, ?)', [email, hashedPassword, nome]);
        res.status(201).send('Usuário cadastrado com sucesso');
    } catch (error) {
        console.error('Erro ao cadastrar usuário: ', error.message);
        res.status(500).send('Erro ao cadastrar usuário');
    }
});

//login 

router.post('/login', async (req, res) => {
    const {email, senha} = req.body;

    if(!email || !senha) {
        return res.status(400).send('E-mail e senha são obrigatórios');
    }

    try {
        const [result] = await pool.query('SELECT * FROM usuario WHERE email = ?', [email]);
        const user = result[0];

        if (!user || !(await bcrypt.compare(senha, user.senha))) {
            return res.status(404).send('Senha ou e-mail inválido');
        }

        const token = jwt.sign({id: result.id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRATION});
        console.log(`jwt secret: ${process.env.JWT_SECRET}`);
        res.status(200).json({token});
    } catch (error) {
        console.error('Erro ao fazer login: ', error.message);
        res.status(500).send('Erro ao fazer login');
    }
})

module.exports = router;

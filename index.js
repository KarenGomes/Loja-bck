const express = require('express');
const authenticateToken = require('./src/middlewares/auth');
const roupaRouter = require('./src/routes/roupaRouter');
const usuarioRouter = require('./src/routes/usuarioRouter');
const carrinhoRouter = require('./src/routes/carrinhoRouter');
const loginRouter = require('./src/routes/authRouter');
const app = express();
const cors = require('cors');

app.use(cors({ 
    origin: 'http://localhost:4200',
    credentials: true // Permitir envio de cookies ou cabeçalhos de autenticação
}));

try {
    // Middleware para JSON
    app.use(express.json());
    
    //rotas 
    app.get('/', (req, res) => {
        res.send('Servidor funcionando!');
    });

    //roupas 
    app.use('/roupas', authenticateToken, roupaRouter);

    //usuarios
    app.use('/usuarios', authenticateToken, usuarioRouter);

    //carrinho
    app.use('/carrinho', authenticateToken, carrinhoRouter);

    //login
    app.use('/auth', loginRouter);
    
    // porta
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
} catch (error) {
    console.error('Erro ao iniciar o servidor: ', error);   
}
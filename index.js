const express = require('express');
const authenticateToken = require('./src/middlewares/auth');
const roupaRouter = require('./src/routes/roupaRouter');
const usuarioRouter = require('./src/routes/usuarioRouter');
const carrinhoRouter = require('./src/routes/carrinhoRouter');
const loginRouter = require('./src/routes/authRouter');
const app = express();
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger-config'); 

app.use(cors({ 
    origin: 'http://localhost:4200',
    credentials: true // Permitir envio de cookies ou cabeçalhos de autenticação
}));

try {
    // Middleware para JSON
    app.use(express.json());

    // Integração do Swagger
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
    
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
        console.log(`Documentação disponível em http://localhost:${PORT}/api-docs`);
    });
} catch (error) {
    console.error('Erro ao iniciar o servidor: ', error);   
}
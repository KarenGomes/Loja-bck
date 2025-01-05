const express = require('express');
const roupaRouter = require('./src/routes/roupaRouter');
const usuarioRouter = require('./src/routes/usuarioRouter');
const app = express();

try {
    // Middleware para JSON
    app.use(express.json());
    
    //rotas 
    app.get('/', (req, res) => {
        res.send('Servidor funcionando!');
    });

    //roupas 
    app.use('/roupas', roupaRouter);

    //usuarios
    app.use('/usuarios', usuarioRouter);
    
    // porta
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
} catch (error) {
    console.error('Erro ao iniciar o servidor: ', error);   
}
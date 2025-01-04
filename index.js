const express = require('express');
const app = express();

try {
    // Middleware para JSON
    app.use(express.json());
    
    //rotas 
    app.get('/', (req, res) => {
        res.send('Servidor funcionando!');
    });
    
    // porta
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
} catch (error) {
    console.error('Erro ao iniciar o servidor: ', error);   
}
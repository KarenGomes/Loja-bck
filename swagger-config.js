const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0', // Especificação do OpenAPI
    info: {
      title: 'Minha API',
      version: '1.0.0',
      description: 'Documentação da API usando Swagger',
      contact: {
        name: 'Seu Nome',
        email: 'seu-email@example.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000', // URL base da API
        description: 'Servidor de Desenvolvimento',
      },
    ],
  },
  apis: ['./src/docs/swagger-docs.js'], // Caminho para os arquivos onde estão as definições de rotas e descrições
};

module.exports = swaggerJSDoc(swaggerOptions);

# Projeto Loja Greenmin - Backend

Este projeto é o backend da aplicação de uma loja, desenvolvido com Node.js, que possui funcionalidades de autenticação, manipulação de dados (carrinho, roupas, usuários), e configuração de banco de dados.

## 🚀 Acesso à Documentação Swagger
A documentação da API está disponível no Swagger. Acesse através do seguinte link:

[Swagger API Documentation](https://karengomes.github.io/Loja-bck#/)

## 📦 Bibliotecas Instaladas

- **Nodemon**: Utilizado para reiniciar automaticamente o servidor durante o desenvolvimento.
- **JWT**: Biblioteca para autenticação baseada em JSON Web Tokens.
- **CORS**: Middleware que permite controlar as permissões de requisição entre diferentes origens.

### Créditos
A configuração do **Nodemon** foi inspirada no repositório do [Swagger GitHub Pages](https://github.com/peter-evans/swagger-github-pages?tab=readme-ov-file).

## 🔐 Criptografia

O sistema utiliza criptografia para proteger as senhas dos usuários. As senhas são armazenadas de forma segura utilizando o algoritmo de hash bcrypt.

## ⚙️ Configuração de Ambiente

## ⚙️ Configuração de Ambiente

O projeto utiliza um arquivo `.env` para armazenar variáveis de ambiente, que está incluído no `.gitignore` para proteger informações sensíveis. Este arquivo contém os seguintes parâmetros:

- **DB_HOST**: Endereço do host do banco de dados.
- **DB_USER**: Nome de usuário para a conexão com o banco de dados.
- **DB_PASSWORD**: Senha para a conexão com o banco de dados.
- **DB_NAME**: Nome do banco de dados.
- **DB_PORT**: Porta de conexão com o banco de dados.
- **JWT_EXPIRATION**: Tempo de expiração do token JWT.
- **JWT_SECRET**: Chave secreta utilizada para a assinatura dos tokens JWT.

Certifique-se de configurar o arquivo `.env` corretamente antes de rodar o projeto.

## 🔧 Instruções de Execução

Para rodar o projeto localmente, siga os seguintes passos:

1. Clone o repositório.
2. Instale as dependências com o comando:
   ```bash
   npm install
3. Rode com `npm run dev` para utilizar o nodemon.

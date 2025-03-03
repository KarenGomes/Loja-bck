/**
 * @swagger
 * /registro:
 *   post:
 *     tags: [Cadastro]
 *     summary: Registra um novo usuário
 *     description: Cria um novo usuário com e-mail, senha e nome
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - senha
 *               - nome
 *             properties:
 *               email:
 *                 type: string
 *                 example: "usuario@example.com"
 *               senha:
 *                 type: string
 *                 example: "senha123"
 *               nome:
 *                 type: string
 *                 example: "João Silva"
 *     responses:
 *       201:
 *         description: Usuário cadastrado com sucesso
 *       400:
 *         description: E-mail, nome e senha são obrigatórios
 *       500:
 *         description: Erro ao cadastrar usuário
 */

/**
 * @swagger
 * /login:
 *   post:
 *     tags: [Login]
 *     summary: Realiza o login de um usuário
 *     description: Verifica o e-mail e senha e retorna um token JWT se a autenticação for bem-sucedida
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - senha
 *             properties:
 *               email:
 *                 type: string
 *                 example: "usuario@example.com"
 *               senha:
 *                 type: string
 *                 example: "senha123"
 *     responses:
 *       200:
 *         description: Login bem-sucedido, retorna o token JWT
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "seu-token-jwt-aqui"
 *       400:
 *         description: E-mail e senha são obrigatórios
 *       404:
 *         description: E-mail ou senha inválidos
 *       500:
 *         description: Erro ao fazer login
 */


/**
 * @swagger
 * /carrinho/{usuarioId}:
 *   get:
 *     tags: [Carrinho]
 *     summary: Busca o carrinho de um usuário específico
 *     description: Retorna o carrinho de compras de um usuário identificado pelo `usuarioId`
 *     parameters:
 *       - name: usuarioId
 *         in: path
 *         description: ID do usuário para buscar o carrinho
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Retorna o carrinho do usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 usuarioId:
 *                   type: integer
 *                   example: 1
 *                 produtos:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       nome:
 *                         type: string
 *                         example: "Camiseta"
 *                       quantidade:
 *                         type: integer
 *                         example: 2
 *                       preco:
 *                         type: number
 *                         format: float
 *                         example: 29.99
 *       404:
 *         description: Carrinho não encontrado para o usuário
 *       500:
 *         description: Erro ao tentar buscar o carrinho
 */


/**
 * @swagger
 * /roupas:
 *   get:
 *     tags: [Roupas]
 *     summary: Retorna todas as roupas disponíveis
 *     description: Retorna uma lista de todas as roupas cadastradas no sistema
 *     responses:
 *       200:
 *         description: Lista de roupas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   nome:
 *                     type: string
 *                     example: "Camiseta"
 *                   descricao:
 *                     type: string
 *                     example: "Camiseta de algodão confortável"
 *                   preco:
 *                     type: number
 *                     format: float
 *                     example: 49.99
 *                   tamanho:
 *                     type: string
 *                     example: "M"
 *       500:
 *         description: Erro ao tentar buscar as roupas
 */


/**
 * @swagger
 * /usuarios/{usuarioId}:
 *   get:
 *     tags: [Usuários]
 *     summary: Busca um usuário específico pelo ID
 *     description: Retorna os dados de um usuário identificado pelo `usuarioId`
 *     parameters:
 *       - name: usuarioId
 *         in: path
 *         description: ID do usuário para buscar os detalhes
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Retorna os dados do usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 nome:
 *                   type: string
 *                   example: "João Silva"
 *                 email:
 *                   type: string
 *                   example: "joao.silva@email.com"
 *                 dataCadastro:
 *                   type: string
 *                   format: date
 *                   example: "2024-01-01"
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro ao tentar buscar o usuário
 */
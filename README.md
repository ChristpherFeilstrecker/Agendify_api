🚀 Agendify_api/

API para gerenciar empresas: criação, atualização, listagem e exclusão.
Feita com Node.js, Express e MySQL, seguindo boas práticas de segurança, validação e tratamento de erros.

🛠️ Setup e execução
1. Clonar o repositório
git clone <URL_DO_REPO>
cd <PASTA_DO_PROJETO>

2. Instalar dependências
npm install

3. Rodar o servidor
# Ambiente de desenvolvimento (com hot reload)
npm run dev

# Produção
npm start

4. Criar arquivo .env com as variáveis
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=senha
DB_DATABASE=nome_do_banco


O servidor estará disponível em: http://localhost:3000

📌 Endpoints

Base URL: http://localhost:3000/empresa

Método	Rota	Descrição
GET	/	Lista todas as empresas
GET	/:id	Busca empresa pelo ID
POST	/	Cria nova empresa
PUT	/:id	Atualiza empresa
DELETE	/:id	Deleta empresa
✨ Exemplos de requisição
POST /empresa
{
  "nome": "Minha Empresa",
  "cnpj": "00.000.000/0001-00",
  "telefone": "123456789",
  "endereco": "Rua Exemplo, 123"
}

GET /empresa/:id
{
  "id": 1,
  "nome": "Minha Empresa",
  "cnpj": "00.000.000/0001-00",
  "telefone": "123456789",
  "endereco": "Rua Exemplo, 123"
}

PUT /empresa/:id
{
  "nome": "Empresa Atualizada",
  "telefone": "987654321"
}

DELETE /empresa/:id
{
  "mensagem": "Empresa deletada com sucesso"
}

⚠️ Tratamento de erros

Todos os erros são capturados pelo middleware global errorHandler.

Exemplo de retorno de erro:

{
  "mensagem": "Empresa não encontrada",
  "status": 404
}

🗂️ Estrutura do projeto
## 🗂️ Estrutura do projeto

```text
src/
├─ config/             # Configurações (database.ts, env.ts)
├─ controllers/        # Controladores (empresaController.ts)
├─ middleware/         # Middlewares (errorHandler.ts, logger.ts, validationMiddleware.ts)
├─ routes/             # Rotas (empresaRouter.ts)
├─ services/           # Serviços (empresaService.ts)
├─ validations/        # Validações (empresaValidation.ts)
└─ index.ts            # Arquivo principal
```


📦 Scripts úteis
Comando	Descrição
npm run dev	Inicia servidor em desenvolvimento (nodemon)
npm start	Inicia servidor em produção
npm run build	Transpila TypeScript (se aplicável)
📬 Contato

Desenvolvedor: Christopher Feilstrecker
GitHub: Seu GitHub


Email: seuemail@exemplo.com

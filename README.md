# Life Fit

README simples com comandos básicos para clonar, instalar dependências, criar branch, subir alterações e rodar o projeto.

---

## 1. Clonar o projeto

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

---

## 2. Baixar dependências do projeto

Se o projeto tiver backend com `package.json` dentro da pasta `backend`, rode:

cd backend
npm install

Esse comando baixa todas as dependências atuais do backend, como:

```txt
express
cors
dotenv
```

Depois volte para a raiz, se precisar:

cd ..

---

## 3. Configurar variáveis de ambiente

Entre na pasta do backend:

```bash
cd backend
```

Copie o arquivo de exemplo:

```bash
cp .env.example .env
```

Depois edite o `.env` e coloque suas chaves reais:

// não precisa rodar esse comando. Pode criar uma arquivo como o env.Exemple

```env
IA_API_KEY=sua_chave_aqui
IA_API_URL=https://api.exemplo.com/v1/chat/completions
IA_MODEL=nome-do-modelo
PORT=3000
```

Importante: o arquivo `.env` não deve subir para o Git.

---

## 4. Rodar o backend

Dentro da pasta `backend`, rode:

```bash
npm run dev
```

Ou, se não existir script `dev`, rode:

```bash
npm start
```

Se ainda não existir nenhum script configurado, rode diretamente:

```bash
node server.js
```

O backend deve iniciar em:

```txt
http://localhost:3000
```

---

## 5. Rodar o frontend

Abra o arquivo:

```txt
frontend/index.html
```

Recomendado usar a extensão **Live Server** no VS Code:

1. Abra o projeto no VS Code;
2. Vá até `frontend/index.html`;
3. Clique com o botão direito;
4. Escolha `Open with Live Server`.

---

## 6. Verificar status do Git

```bash
git status
```

Mostra arquivos modificados, novos ou removidos.

---

## 7. Criar uma nova branch

```bash
git checkout -b nome-da-branch
```

Exemplo:

```bash
git checkout -b feature/chat-ia
```

---

## 8. Trocar de branch

```bash
git checkout nome-da-branch
```

Exemplo:

```bash
git checkout main
```

---

## 9. Atualizar sua branch com o remoto

```bash
git pull origin main
```

Se estiver em outra branch:

```bash
git pull origin nome-da-branch
```

---

## 10. Adicionar arquivos modificados

Adicionar tudo:

```bash
git add .
```

Adicionar um arquivo específico:

```bash
git add caminho/do/arquivo
```

Exemplo:

```bash
git add frontend/src/js/app.js
```

---

## 11. Criar commit

```bash
git commit -m "mensagem do commit"
```

Exemplo:

```bash
git commit -m "feat: adiciona integração inicial com coach IA"
```

---

## 12. Enviar branch para o GitHub

Se a branch já existe no remoto:

```bash
git push
```

Se for a primeira vez enviando essa branch:

```bash
git push -u origin nome-da-branch
```

Exemplo:

```bash
git push -u origin feature/chat-ia
```

---

## 13. Baixar atualizações do GitHub

```bash
git pull
```

Ou especificando branch:

```bash
git pull origin main
```

---

## 14. Fluxo recomendado de trabalho

```bash
git pull origin main
git checkout -b feature/nome-da-feature
```

Faça suas alterações.

Depois:

```bash
git status
git add .
git commit -m "feat: descreva sua alteração"
git push -u origin feature/nome-da-feature
```

Depois abra um Pull Request no GitHub.

---

## 15. Comandos rápidos para rodar o projeto depois de clonar

```bash
git clone URL_DO_REPOSITORIO
cd life-fit
cd backend
npm install
cp .env.example .env
npm run dev
```

Depois abra o frontend:

```txt
frontend/index.html
```

Com Live Server no VS Code.

---

## 16. Observações importantes

Não suba estes arquivos/pastas para o Git:

```txt
.env
node_modules/
backend/node_modules/
```

O `.gitignore` deve conter:

```gitignore
.env
backend/.env
node_modules/
backend/node_modules/
```

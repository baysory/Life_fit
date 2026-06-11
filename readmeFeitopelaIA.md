# Life Fit

Protótipo web do Life Fit com frontend em HTML/CSS/JavaScript e backend opcional em Node.js para conversar com uma API de IA sem expor a chave no navegador.

---

## 1. O que este projeto faz

O Life Fit possui:

- Navbar superior;
- Navbar inferior;
- Aba Início;
- Notícias/artigos;
- Modal de notícia;
- Aba Coach;
- Formulário de perfil;
- Cálculo de IMC;
- Chat com Coach IA;
- Respostas simuladas localmente;
- Estrutura preparada para usar backend com API real.

---

## 2. Dois modos de funcionamento

### Modo demo sem API real

Neste modo o chat usa uma função local:

```js
gerarRespostaSimulada(texto)
```

Fluxo:

```txt
Usuário digita
→ app.js
→ gerarRespostaSimulada()
→ resposta aparece no chat
```

Este modo não precisa de backend, npm nem chave de API.

---

### Modo com API real

Neste modo o frontend chama seu backend, e o backend chama a API da IA.

Fluxo:

```txt
Frontend
→ frontend/src/js/api.js
→ backend/server.js
→ backend/ia.service.js
→ API da IA
→ resposta volta para o chat
```

A chave da IA fica no arquivo:

```txt
backend/.env
```

Esse arquivo não deve subir para o GitHub.

---

## 3. Estrutura recomendada

```txt
life-fit/
├── frontend/
│   ├── index.html
│   └── src/
│       ├── css/
│       │   └── style.css
│       └── js/
│           ├── app.js
│           ├── api.js
│           └── noticias.js
│
├── backend/
│   ├── server.js
│   ├── ia.service.js
│   ├── prompt.service.js
│   ├── package.json
│   ├── .env
│   └── .env.example
│
├── .gitignore
└── README.md
```

---

## 4. O que cada arquivo faz

### `frontend/index.html`

Estrutura visual do site:

- Navbar;
- Abas;
- Cards;
- Modal;
- Formulário;
- Chat.

No final do HTML, carregue o JS assim:

```html
<script type="module" src="./src/js/app.js"></script>
```

Use `type="module"` se você estiver usando `import` e `export`.

---

### `frontend/src/css/style.css`

CSS customizado do projeto.

Exemplo:

```css
.conteudo-artigo p {
  margin-bottom: 1rem;
}
```

---

### `frontend/src/js/noticias.js`

Guarda os dados das notícias.

Exemplo:

```js
export const noticias = [
  {
    title: '5 hábitos simples para melhorar sua saúde',
    description: 'Pequenas mudanças diárias podem gerar resultados.',
    image: 'https://...',
    fullText: `
      <p>Texto completo do artigo...</p>
    `
  }
];
```

---

### `frontend/src/js/api.js`

Arquivo que conversa com o backend.

```js
export async function enviarMensagemParaCoach({ mensagem, perfil, historico }) {
  const resposta = await fetch('http://localhost:3000/api/coach', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      mensagem,
      perfil,
      historico
    })
  });

  if (!resposta.ok) {
    throw new Error('Erro ao conversar com o Coach.');
  }

  const dados = await resposta.json();

  return dados.resposta;
}
```

---

### `frontend/src/js/app.js`

Arquivo principal do frontend.

Controla:

- troca de abas;
- modal de notícia;
- formulário do Coach;
- localStorage;
- chat;
- envio de mensagens;
- chamada para API ou simulação local.

---

### `backend/server.js`

Sobe o servidor Express e cria a rota:

```txt
POST /api/coach
```

---

### `backend/ia.service.js`

Conversa com a API da IA.

---

### `backend/prompt.service.js`

Monta o prompt do Coach.

---

### `backend/.env`

Guarda os segredos.

Exemplo:

```env
IA_API_KEY=sua_chave_aqui
IA_API_URL=https://api.exemplo.com/v1/chat/completions
IA_MODEL=nome-do-modelo
PORT=3000
```

Não suba esse arquivo para o Git.

---

### `backend/.env.example`

Modelo público do `.env`.

```env
IA_API_KEY=coloque_sua_chave_aqui
IA_API_URL=https://api.exemplo.com/v1/chat/completions
IA_MODEL=nome-do-modelo
PORT=3000
```

---

## 5. Preciso apagar a função antiga que simula mensagens?

Não no começo.

O melhor é manter a função antiga como fallback.

Você mantém:

```js
function gerarRespostaSimulada(texto) {
  // resposta fake por palavra-chave
}
```

E cria uma função intermediária:

```js
const USAR_API_REAL = false;

async function obterRespostaCoach(texto) {
  if (USAR_API_REAL) {
    return await enviarMensagemParaCoach({
      mensagem: texto,
      perfil: userProfile,
      historico: conversationMemory
    });
  }

  return gerarRespostaSimulada(texto);
}
```

Assim:

```txt
USAR_API_REAL = false → usa IA fake
USAR_API_REAL = true  → usa backend/API real
```

Depois que a API real estiver funcionando, você pode apagar a função `gerarRespostaSimulada()` se quiser.

---

## 6. Como alterar a função do chat

Antes, a função do chat era mais ou menos assim:

```js
function enviarMensagemSimulada() {
  const input = document.getElementById('campoMensagem');
  const text = input.value.trim();

  if (!text || !userProfile) return;

  conversationMemory.push({
    type: 'user',
    content: escapeHTML(text),
    time: new Date().toISOString()
  });

  saveConversation();
  renderConversation();

  input.value = '';
  showTypingIndicator();

  setTimeout(() => {
    removeTypingIndicator();

    const response = gerarRespostaSimulada(text);

    conversationMemory.push({
      type: 'bot',
      content: response,
      time: new Date().toISOString()
    });

    saveConversation();
    renderConversation();
  }, 900);
}
```

Para usar API real, transforme ela em `async`:

```js
async function enviarMensagemSimulada() {
  const input = document.getElementById('campoMensagem');
  const text = input.value.trim();

  if (!text || !userProfile) return;

  conversationMemory.push({
    type: 'user',
    content: escapeHTML(text),
    time: new Date().toISOString()
  });

  saveConversation();
  renderConversation();

  input.value = '';
  showTypingIndicator();

  try {
    const response = await obterRespostaCoach(text);

    removeTypingIndicator();

    conversationMemory.push({
      type: 'bot',
      content: response,
      time: new Date().toISOString()
    });

    saveConversation();
    renderConversation();

  } catch (error) {
    removeTypingIndicator();

    conversationMemory.push({
      type: 'bot',
      content: 'Não consegui conectar com o Coach agora. Tente novamente em instantes.',
      time: new Date().toISOString()
    });

    saveConversation();
    renderConversation();

    console.error(error);
  }
}
```

A principal troca é esta:

```js
const response = gerarRespostaSimulada(text);
```

Virando:

```js
const response = await obterRespostaCoach(text);
```

---

## 7. Cuidado com `type="module"` e `onclick`

Se o HTML usa:

```html
<button onclick="enviarMensagemSimulada()">
```

e o JS está carregado assim:

```html
<script type="module" src="./src/js/app.js"></script>
```

então as funções não ficam globais automaticamente.

No final do `app.js`, coloque:

```js
window.irParaAba = irParaAba;
window.abrirModalNoticia = abrirModalNoticia;
window.fecharModalNoticia = fecharModalNoticia;
window.alternarMenuAvatar = alternarMenuAvatar;
window.sairDaConta = sairDaConta;
window.enviarMensagemSimulada = enviarMensagemSimulada;
window.perguntarSugestao = perguntarSugestao;
window.rolarParaNoticias = rolarParaNoticias;
window.reiniciarPerfilCoach = reiniciarPerfilCoach;
window.mostrarAvisoConta = mostrarAvisoConta;
```

Isso faz os botões do HTML conseguirem chamar as funções.

---

## 8. Backend com Node.js

Entre na pasta do backend:

```bash
cd backend
```

Crie o `package.json`, se ainda não existir:

```bash
npm init -y
```

Instale as dependências:

```bash
npm install express cors dotenv
```

---

## 9. `backend/package.json`

Use esta configuração:

```json
{
  "name": "life-fit-backend",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "node server.js",
    "start": "node server.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.18.3"
  }
}
```

---

## 10. `backend/server.js`

```js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { gerarRespostaCoach } from './ia.service.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    status: 'online',
    projeto: 'Life Fit'
  });
});

app.post('/api/coach', async (req, res) => {
  try {
    const { mensagem, perfil, historico } = req.body;

    if (!mensagem || !perfil) {
      return res.status(400).json({
        erro: 'Mensagem e perfil são obrigatórios.'
      });
    }

    const resposta = await gerarRespostaCoach({
      mensagem,
      perfil,
      historico
    });

    return res.json({
      resposta
    });

  } catch (erro) {
    console.error('Erro na rota /api/coach:', erro);

    return res.status(500).json({
      erro: 'Erro ao gerar resposta do Coach.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor Life Fit rodando em http://localhost:${PORT}`);
});
```

---

## 11. `backend/prompt.service.js`

```js
export function montarPromptCoach({ perfil }) {
  const imcAtual = perfil.weight / (perfil.height * perfil.height);
  const imcMeta = perfil.goal / (perfil.height * perfil.height);

  return `
Você é o Coach IA do Life Fit.

Seu papel:
- Ajudar o usuário com hábitos saudáveis.
- Dar orientações gerais sobre treino, alimentação, sono e rotina.
- Ser claro, direto, amigável e motivador.
- Não dar diagnóstico médico.
- Não prometer resultados garantidos.
- Alertar quando uma meta parecer perigosa.

Dados do usuário:
Nome: ${perfil.name}
Email: ${perfil.email}
Peso atual: ${perfil.weight} kg
Altura: ${perfil.height} m
Meta de peso: ${perfil.goal} kg
IMC atual aproximado: ${imcAtual.toFixed(1)}
IMC na meta aproximado: ${imcMeta.toFixed(1)}

Regra importante:
Se a meta gerar IMC abaixo de 18.5, avise que pode ser perigoso e recomende acompanhamento profissional.

Responda em português do Brasil.
Use uma linguagem simples, como um coach conversando no chat.
`;
}
```

---

## 12. `backend/ia.service.js`

Este exemplo usa um formato comum de APIs de chat.

```js
import { montarPromptCoach } from './prompt.service.js';

export async function gerarRespostaCoach({ mensagem, perfil, historico = [] }) {
  const promptSistema = montarPromptCoach({ perfil });

  const mensagensFormatadas = [
    {
      role: 'system',
      content: promptSistema
    },
    ...historico.slice(-10).map((item) => ({
      role: item.type === 'user' ? 'user' : 'assistant',
      content: limparHTML(item.content)
    })),
    {
      role: 'user',
      content: mensagem
    }
  ];

  const resposta = await fetch(process.env.IA_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.IA_API_KEY}`
    },
    body: JSON.stringify({
      model: process.env.IA_MODEL,
      messages: mensagensFormatadas
    })
  });

  if (!resposta.ok) {
    const erroTexto = await resposta.text();
    throw new Error(`Erro na API de IA: ${erroTexto}`);
  }

  const dados = await resposta.json();

  return dados.choices?.[0]?.message?.content || 'Não consegui gerar uma resposta agora.';
}

function limparHTML(texto) {
  if (!texto) return '';

  return texto.replace(/<[^>]*>/g, '');
}
```

---

## 13. `.gitignore`

Na raiz do projeto:

```gitignore
.env
backend/.env
node_modules/
backend/node_modules/
```

---

## 14. Como rodar depois de clonar

Clone o projeto:

```bash
git clone URL_DO_REPOSITORIO
cd life-fit
```

Entre no backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Crie o `.env`:

```bash
cp .env.example .env
```

Edite o `.env`:

```env
IA_API_KEY=sua_chave_aqui
IA_API_URL=https://api.exemplo.com/v1/chat/completions
IA_MODEL=nome-do-modelo
PORT=3000
```

Rode o backend:

```bash
npm run dev
```

Se estiver funcionando, aparecerá:

```txt
Servidor Life Fit rodando em http://localhost:3000
```

Abra no navegador:

```txt
http://localhost:3000
```

Ou abra o frontend com Live Server:

```txt
frontend/index.html
```

---

## 15. Testar backend com curl

Com o backend rodando:

```bash
curl -X POST http://localhost:3000/api/coach   -H "Content-Type: application/json"   -d '{
    "mensagem": "Minha meta está segura?",
    "perfil": {
      "name": "Eduardo",
      "email": "eduardo@email.com",
      "weight": 118,
      "height": 1.87,
      "goal": 90.5
    },
    "historico": []
  }'
```

Resposta esperada:

```json
{
  "resposta": "..."
}
```

---

## 16. Erros comuns

### `Cannot use import statement outside a module`

Você esqueceu o `type="module"`.

Use:

```html
<script type="module" src="./src/js/app.js"></script>
```

---

### Botões não funcionam

Provavelmente você está usando `type="module"` e `onclick`.

Exponha as funções no `window`.

---

### `Failed to fetch`

Possíveis causas:

- backend desligado;
- porta errada;
- URL errada no `api.js`;
- CORS não configurado;
- rota `/api/coach` com erro.

---

### API não responde

Verifique:

- `.env` existe;
- `IA_API_KEY` está correta;
- `IA_API_URL` está correta;
- `IA_MODEL` está correto;
- o formato da API é compatível com `ia.service.js`.

---

## 17. Resumo final

Não apague a IA fake no começo.

Use esta estratégia:

```txt
frontend
→ obterRespostaCoach()
→ se USAR_API_REAL = true, chama backend
→ se USAR_API_REAL = false, usa gerarRespostaSimulada()
```

A chave fica somente no backend:

```txt
backend/.env
```

O frontend nunca deve conter a chave da API.

O fluxo certo é:

```txt
Frontend → Backend → API da IA
```

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { gerarRespostaCoach } from './back-end/ia_service.js';

// Carrega variáveis de ambiente do arquivo .env na pasta back-end
dotenv.config({ path: './back-end/.env' });

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Permite receber JSON do frontend.
app.use(express.json({ limit: '100kb' }));

// Localmente, permite que o front converse com o backend.
// Na Vercel, se front e backend estiverem no mesmo domínio,
// isso deixa de ser essencial, mas não atrapalha.
app.use(cors());

// Serve seu frontend localmente.
// Seu index.html e os arquivos CSS/JS devem ficar dentro de /public.
app.use(express.static(path.join(__dirname, 'public')));

// Expõe /src como rota estática para que módulos JS sejam encontrados.
app.use('/src', express.static(path.join(__dirname, 'src')));

// Teste simples para saber se o backend está online.
app.get('/api/health', (req, res) => {
  return res.status(200).json({
    status: 'online',
    projeto: 'Life Fit'
  });
});

// Rota do Coach.
app.post('/api/coach', async (req, res) => {
  try {
    const { mensagem, perfil, historico } = req.body ?? {};

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

    return res.status(200).json({
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
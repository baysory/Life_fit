import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import { gerarRespostaCoach } from './ia_service.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

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

    return res.json({ resposta });

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
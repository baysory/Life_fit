import dotenv from 'dotenv';
import { gerarRespostaCoach } from '../back-end/ia_service.js';

// Localmente, carrega o arquivo .env. Em produção na Vercel, as variáveis
// de ambiente já vêm da configuração do projeto e não dependem desse arquivo.
dotenv.config({ path: './back-end/.env' });

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ erro: 'Método não permitido. Use POST.' });
  }

  const { mensagem, perfil, historico } = req.body ?? {};

  if (!mensagem || !perfil) {
    return res.status(400).json({
      erro: 'Mensagem e perfil são obrigatórios.'
    });
  }

  try {
    const resposta = await gerarRespostaCoach({ mensagem, perfil, historico });
    return res.status(200).json({ resposta });
  } catch (erro) {
    console.error('Erro em /api/coach:', erro);
    return res.status(500).json({ erro: 'Erro ao gerar resposta do Coach.' });
  }
}

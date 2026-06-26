    import { gerarRespostaCoach } from '../back-end/ia_service.js';

    export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
        erro: 'Método não permitido. Use POST.'
        });
    }

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
        console.error('Erro na Function /api/coach:', erro);

        return res.status(500).json({
        erro: erro.message || 'Erro ao gerar resposta do Coach.'
        });
    }
    }
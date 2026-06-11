// Importa a biblioteca 'express', que serve para criar o servidor web e lidar com rotas.
import express from 'express';

// Importa a biblioteca 'cors', que permite que seu site (frontend) converse com este servidor (backend) mesmo estando em endereços diferentes.
import cors from 'cors';

// Importa a biblioteca 'dotenv', que lê variáveis secretas (como senhas e chaves de API) de um arquivo de configuração.
import dotenv from 'dotenv';  

// Ativa o 'dotenv' para que o servidor consiga ler as variáveis de ambiente (ex: chaves secretas).
dotenv.config();

// Importa a função 'gerarRespostaCoach' que você criou no arquivo 'ia.service.js'.
// É ela que vai falar com a Inteligência Artificial.
import { gerarRespostaCoach } from './ia_service.js';


// Cria a aplicação do servidor usando o Express.
const app = express();

// Define a porta que o servidor vai usar.
// Usa a variável PORT do sistema (se existir) ou, por padrão, usa 3000.
const PORT = process.env.PORT || 3000;

// --- CONFIGURAÇÕES DO SERVIDOR ---

// Ativa o CORS. Isso é essencial para evitar bloqueios de segurança quando o navegador tenta acessar este servidor.
app.use(cors());

// Configura o servidor para entender dados enviados em formato JSON (o padrão da internet hoje).
// Sem isso, o servidor não conseguiria ler o corpo das requisições.
app.use(express.json());

// --- ROTAS (ENDPOINTS) ---

app.post('/api/coach', (req, res) => {
  const { mensagem, perfil, historico } = req.body;

  if (!mensagem) {
    return res.status(400).json({
      erro: 'A mensagem é obrigatória.'
    });
  }

  if (!perfil) {
    return res.status(400).json({
      erro: 'O perfil do usuário é obrigatório.'
    });
  }

  console.log('Mensagem recebida:', mensagem);
  console.log('Perfil recebido:', perfil);
  console.log('Histórico recebido:', historico);

  return res.json({
    resposta: `Recebi sua mensagem: "${mensagem}". Em breve essa resposta virá da IA real.`
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor Life Fit rodando em http://localhost:${PORT}`);
});










// // Cria uma rota do tipo POST que responde quando alguém acessa '/api/coach'.
// // 'req' são os dados que o cliente envia (pedido).
// // 'res' é a resposta que o servidor vai devolver.
// app.post('/api/coach', async (req, res) => {
//   try {
//     // Extrai 'mensagem', 'perfil' e 'historico' dos dados enviados pelo usuário.
//     const { mensagem, perfil, historico } = req.body;

//     // Validação: Verifica se 'mensagem' e 'perfil' foram enviados.
//     // Se não tiver um deles, interrompe e avisa o erro.
//     if (!mensagem || !perfil) {
//       return res.status(400).json({
//         erro: 'Mensagem e perfil são obrigatórios.'
//       });
//     }

//     // Chama a função de IA (que você separou em outro arquivo) e espera a resposta.
//     // 'await' faz o código esperar a IA terminar de pensar antes de continuar.
//     const resposta = await gerarRespostaCoach({
//       mensagem,
//       perfil,
//       historico
//     });

//     // Se der tudo certo, envia a resposta da IA de volta para o usuário em formato JSON.
//     return res.json({
//       resposta
//     });

//   } catch (erro) {
//     // Se acontecer algum erro inesperado dentro do bloco 'try' (ex: IA fora do ar), cai aqui.
    
//     // Imprime o erro no terminal do servidor para o desenvolvedor ver.
//     console.error('Erro na rota /api/coach:', erro);

//     // Envia uma mensagem de erro genérica e segura para o usuário não ver detalhes técnicos.
//     return res.status(500).json({
//       erro: 'Erro ao gerar resposta do Coach.'
//     });
//   }
// });

// // --- INICIALIZAÇÃO ---

// // Liga o servidor na porta definida e mostra uma mensagem de sucesso no terminal.
// // Essa função só roda uma vez, quando o servidor inicia.
// app.listen(PORT, () => {
//   console.log(`Servidor Life Fit rodando em http://localhost:${PORT}`);
// });

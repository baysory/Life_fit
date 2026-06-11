// Importa a função 'montarPromptCoach' do arquivo de prompts.
// Ela cria as instruções iniciais que definem a personalidade do Coach baseada no perfil do usuário.
import { montarPromptCoach } from './prompt.service.js';

// Define a função principal que será exportada para ser usada em outros arquivos.
// Ela é 'async' porque precisa esperar a resposta da IA (uma operação demorada).
// Recebe: a mensagem do usuário, o perfil dele e o histórico da conversa (padrão: lista vazia).
export async function gerarRespostaCoach({ mensagem, perfil, historico = [] }) {
  
  // 1. Criação do Contexto (System Prompt)
  // Gera as instruções secretas do sistema (ex: "Você é um coach fitness...") baseadas no perfil.
  const promptSistema = montarPromptCoach({ perfil });

  // 2. Formatação do Histórico
  // Prepara a lista de mensagens no formato que a IA entende.
  const mensagensFormatadas = [
    // A primeira mensagem é sempre as instruções do sistema (papel do coach).
    {
      role: 'system',
      content: promptSistema
    },
    // Adiciona as últimas 10 mensagens do histórico (.slice(-10)) para a IA ter contexto.
    // Mapeia 'user' (usuário) e 'assistant' (coach) e limpa tags HTML do conteúdo.
    ...historico.slice(-10).map((item) => ({
      role: item.type === 'user' ? 'user' : 'assistant',
      content: limparHTML(item.content)
    })),
    // Adiciona a mensagem atual do usuário como o último item da lista.
    {
      role: 'user',
      content: mensagem
    }
  ];

  // 3. Chamada à API de Inteligência Artificial
  // Envia os dados para o servidor de IA usando o comando 'fetch' (nativo do JS).
  const resposta = await fetch(process.env.IA_API_URL, {
    method: 'POST', // Método de envio de dados.
    headers: {
      'Content-Type': 'application/json', // Avisa que estamos enviando JSON.
      // Envia a chave de API secreta para autenticação (lida das variáveis de ambiente).
      'Authorization': `Bearer ${process.env.IA_API_KEY}`
    },
    body: JSON.stringify({
      // Define qual modelo de IA usar (ex: gpt-4, gpt-3.5).
      model: process.env.IA_MODEL,
      // Envia toda a lista de mensagens formatada acima.
      messages: mensagensFormatadas
    })
  });

  // 4. Tratamento de Erros da API
  // Verifica se a resposta da IA foi bem-sucedida (códigos 200-299).
  if (!resposta.ok) {
    // Se falhou, lê o texto do erro para saber o motivo.
    const erroTexto = await resposta.text();
    // Lança um erro no seu servidor com a mensagem detalhada.
    throw new Error(`Erro na API de IA: ${erroTexto}`);
  }

  // 5. Processamento da Resposta
  // Converte a resposta recebida de JSON para um objeto JavaScript.
  const dados = await resposta.json();

  // Extrai o texto gerado pela IA.
  // Usa '?.[0]?.message?.content' para evitar erros se a estrutura vier vazia.
  // Se não houver texto, retorna uma mensagem padrão de fallback.
  return dados.choices?.[0]?.message?.content || 'Não consegui gerar uma resposta agora.';
}

// Função auxiliar para segurança e limpeza.
// Remove tags HTML (como <b>, <div>, <p>) do texto para evitar que o usuário injete código malicioso ou quebre a formatação.
function limparHTML(texto) {
  // Se o texto for vazio, retorna string vazia.
  if (!texto) return '';

  // Usa uma Expressão Regular (/ <[^>]*> /g) para encontrar e remover tudo que estiver entre < e >.
  return texto.replace(/<[^>]*>/g, '');
}   
// Define a função assíncrona que gerencia o envio de uma mensagem no chat.
async function enviarMensagemSimulada() {
  
  // 1. Captura e Validação
  // Seleciona o campo de texto do HTML e pega o valor digitado.
  const input = document.getElementById('campoMensagem');
  const texto = input.value.trim(); // Remove espaços em branco do início e fim.

  // Se não houver texto ou o usuário não estiver logado (sem perfil), para a função.
  if (!texto || !userProfile) return;

  // 2. Adiciona a Mensagem do Usuário na Memória
  // Cria um objeto com o tipo 'user', o conteúdo (escapado para segurança) e a hora atual.
  conversationMemory.push({
    type: 'user',
    content: escapeHTML(texto), // Protege contra injeção de código HTML malicioso.
    time: new Date().toISOString()
  });

  // Salva o histórico atualizado no localStorage e redesenha a tela do chat.
  saveConversation();
  renderConversation();

  // Limpa o campo de texto para o usuário digitar a próxima mensagem.
  input.value = '';
  
  // Mostra o indicador visual de "Digitando..." enquanto espera a IA.
  showTypingIndicator();

  // 3. Envio para o Servidor (Try/Catch)
  try {
    // Chama a função que fala com o backend e espera a resposta da IA.
    const resposta = await enviarMensagemParaCoach({
      mensagem: texto,
      perfil: userProfile,
      historico: conversationMemory
    });

    // Remove o indicador de "Digitando..." assim que a resposta chega.
    removeTypingIndicator();

    // 4. Adiciona a Resposta do Bot na Memória
    conversationMemory.push({
      type: 'bot',
      content: resposta, // A resposta pura vinda da IA.
      time: new Date().toISOString()
    });

    // Salva e atualiza a tela novamente com a nova mensagem do bot.
    saveConversation();
    renderConversation();

  } catch (erro) {
    // 5. Tratamento de Erro
    // Se falhar (ex: sem internet, servidor fora), remove o indicador de digitação.
    removeTypingIndicator();

    // Adiciona uma mensagem de erro amigável no chat como se fosse o bot.
    conversationMemory.push({
      type: 'bot',
      content: 'Não consegui conectar com o Coach agora. Tente novamente em instantes.',
      time: new Date().toISOString()
    });

    // Salva e atualiza a tela com a mensagem de erro.
    saveConversation();
    renderConversation();

    // Imprime o erro técnico no console do navegador para o desenvolvedor debugar.
    console.error(erro);
  }
}   
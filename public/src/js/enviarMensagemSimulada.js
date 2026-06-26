import { enviarMensagemParaCoach } from './api.js';

function escaparHTML(texto) {
  const div = document.createElement('div');
  div.textContent = texto;
  return div.innerHTML;
}

function salvarConversa(memoria) {
  localStorage.setItem('lifeFitConversation', JSON.stringify(memoria));
}

function formatarResposta(texto) {
  return texto
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n/g, '<br>');
}

function renderizarConversa() {
  const mensagensChat = document.getElementById('mensagensChat');
  const memoria = JSON.parse(localStorage.getItem('lifeFitConversation')) || [];
  
  mensagensChat.innerHTML = memoria.map(msg => {
    const isBot = msg.type === 'bot';
    return `
      <div class="flex ${isBot ? 'justify-start' : 'justify-end'}">
        <div class="max-w-[88%] rounded-3xl px-5 py-4 shadow-sm leading-relaxed
          ${isBot ? 'bg-white text-gray-700 rounded-bl-md border border-gray-100' : 'bg-vida-verde text-white rounded-br-md'}">
          ${msg.content}
        </div>
      </div>
    `;
  }).join('');

  setTimeout(() => {
    mensagensChat.scrollTop = mensagensChat.scrollHeight;
  }, 50);
}

function mostrarDigitando() {
  const mensagensChat = document.getElementById('mensagensChat');
  mensagensChat.innerHTML += `
    <div id="indicadorDigitando" class="flex justify-start">
      <div class="bg-white text-gray-500 rounded-3xl rounded-bl-md px-5 py-4 shadow-sm flex items-center gap-2 border border-gray-100">
        <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
        <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.15s]"></span>
        <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.3s]"></span>
        <span class="ml-2 text-sm">Coach está pensando...</span>
      </div>
    </div>
  `;
  mensagensChat.scrollTop = mensagensChat.scrollHeight;
}

function removerDigitando() {
  const typing = document.getElementById('indicadorDigitando');
  if (typing) typing.remove();
}

export async function enviarMensagemSimulada() {
  const input = document.getElementById('campoMensagem');
  const texto = input.value.trim();

  const userProfile = JSON.parse(localStorage.getItem('lifeFitUserProfile'));
  const conversationMemory = JSON.parse(localStorage.getItem('lifeFitConversation')) || [];

  if (!texto || !userProfile) return;

  conversationMemory.push({
    type: 'user',
    content: escaparHTML(texto),
    time: new Date().toISOString()
  });

  salvarConversa(conversationMemory);
  renderizarConversa();

  input.value = '';
  mostrarDigitando();

  try {
    const resposta = await enviarMensagemParaCoach({
      mensagem: texto,
      perfil: userProfile,
      historico: conversationMemory
    });

    removerDigitando();

    conversationMemory.push({
      type: 'bot',
      content: formatarResposta(resposta),
      time: new Date().toISOString()
    });

    salvarConversa(conversationMemory);
    renderizarConversa();

  } catch (erro) {
    removerDigitando();

    conversationMemory.push({
      type: 'bot',
      content: 'Não consegui conectar com o Coach agora. Tente novamente em instantes.',
      time: new Date().toISOString()
    });

    salvarConversa(conversationMemory);
    renderizarConversa();

    console.error(erro);
  }
}
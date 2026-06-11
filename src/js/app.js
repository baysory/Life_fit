import { news } from './noticias.js'

//importes do coach.js
import { calcularIMC } from './coah.js';
import { obterClassificacaoIMC } from './coah.js';
import { obterFaixaPesoSegura } from './coah.js';
import { enviarMensagemSimulada } from './coah.js'; 
import { gerarRespostaSimulada } from './coah.js';

//import do api.js
import { enviarMensagemParaCoach } from './api.js';

const style = document.createElement('style');
style.textContent = `
      .atalho-rapido {
        padding: .45rem .75rem;
        border-radius: 999px;
        background: #dcfce7;
        color: #14532d;
        font-size: .85rem;
        font-weight: 800;
        transition: .2s;
      }

      .atalho-rapido:hover {
        background: #bbf7d0;
        transform: translateY(-1px);
        }
    `;
    document.head.appendChild(style);
    
    
    let activeTab = 'home';
    let isLogged = localStorage.getItem('lifeFitLogged') === 'true';
    let userProfile = JSON.parse(localStorage.getItem('lifeFitUserProfile')) || null;
    let conversationMemory = JSON.parse(localStorage.getItem('lifeFitConversation')) || [];
    
    const abaInicio = document.getElementById('abaInicio');
    const abaCoach = document.getElementById('abaCoach');
    const botaoNavInicio = document.getElementById('botaoNavInicio');
    const botaoNavCoach = document.getElementById('botaoNavCoach');
    const acoesVisitante = document.getElementById('acoesVisitante');
    const acoesUsuario = document.getElementById('acoesUsuario');
    const menuAvatar = document.getElementById('menuAvatar');
    const areaFormularioCoach = document.getElementById('areaFormularioCoach');
    const areaChat = document.getElementById('areaChat');
    const mensagensChat = document.getElementById('mensagensChat');
    const resumoPerfil = document.getElementById('resumoPerfil');
    const avisoFormulario = document.getElementById('avisoFormulario');

    function rolarParaNoticias() {
      document.getElementById('secaoNoticias').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Monta os cards de notícias a partir do array news.
    function renderizarNoticias() {
      const grid = document.getElementById('gradeNoticias');

      grid.innerHTML = news.map((item, index) => `
        <article
          onclick="abrirModalNoticia(${index})"
          class="bg-white rounded-3xl shadow-soft overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-xl transition border border-gray-100 group"
        >
          <div class="relative overflow-hidden">
            <img src="${item.image}" alt="${item.title}" class="w-full h-48 object-cover group-hover:scale-105 transition duration-500">
            <div class="absolute top-3 left-3 bg-white/90 backdrop-blur text-vida-escuro px-3 py-1 rounded-full text-xs font-black">
              Saúde
            </div>
          </div>

          <div class="p-5">
            <h3 class="text-xl font-black text-vida-escuro mb-2">${item.title}</h3>
            <p class="text-gray-600">${item.description}</p>

            <button class="mt-4 text-vida-verde font-black">
              Ler artigo completo
              <i class="fa-solid fa-arrow-right ml-1"></i>
            </button>
          </div>
        </article>
      `).join('');
    }

    function abrirModalNoticia(index) {
      const item = news[index];

      document.getElementById('imagemModal').src = item.image;
      document.getElementById('tituloModal').textContent = item.title;
      document.getElementById('textoModal').innerHTML = item.fullText;
      document.getElementById('modalNoticia').classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }

    function fecharModalNoticia() {
      document.getElementById('modalNoticia').classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }

    // Alterna entre as abas Início e Coach sem recarregar a página.
    function irParaAba(tab) {
      activeTab = tab;

      if (tab === 'home') {
        abaInicio.classList.remove('hidden');
        abaCoach.classList.add('hidden');

        botaoNavInicio.classList.add('text-vida-verde');
        botaoNavInicio.classList.remove('text-gray-500');

        botaoNavCoach.classList.add('text-gray-500');
        botaoNavCoach.classList.remove('text-vida-verde');
      }

      if (tab === 'coach') {
        abaCoach.classList.remove('hidden');
        abaInicio.classList.add('hidden');

        botaoNavCoach.classList.add('text-vida-verde');
        botaoNavCoach.classList.remove('text-gray-500');

        botaoNavInicio.classList.add('text-gray-500');
        botaoNavInicio.classList.remove('text-vida-verde');
      }

      menuAvatar.classList.add('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function atualizarBarraSuperior() {
      if (isLogged) {
        acoesVisitante.classList.add('hidden');
        acoesUsuario.classList.remove('hidden');
        document.getElementById('nomeUsuarioMenu').textContent = userProfile?.name || 'Usuário Life Fit';
      } else {
        acoesVisitante.classList.remove('hidden');
        acoesUsuario.classList.add('hidden');
      }
    }

    function atualizarTelaCoach() {
      if (isLogged && userProfile) {
        areaFormularioCoach.classList.add('hidden');
        areaChat.classList.remove('hidden');
        renderizarResumoPerfil();

        if (!conversationMemory.length) {
          iniciarConversaCoach();
        } else {
          renderizarConversa();
        }
      } else {
        areaFormularioCoach.classList.remove('hidden');
        areaChat.classList.add('hidden');
      }
    }

    function alternarMenuAvatar(event) {
      event.stopPropagation();
      menuAvatar.classList.toggle('hidden');
    }

    function mostrarNotificacao(message) {
      const notificacao = document.getElementById('notificacao');
      notificacao.textContent = message;
      notificacao.classList.remove('hidden');

      setTimeout(() => {
        notificacao.classList.add('hidden');
      }, 2200);
    }

    function mostrarAvisoConta(area) {
      menuAvatar.classList.add('hidden');
      mostrarNotificacao(`${area}: tela simulada neste protótipo.`);
    }

    function sairDaConta() {
      isLogged = false;
      userProfile = null;
      conversationMemory = [];

      localStorage.removeItem('lifeFitLogged');
      localStorage.removeItem('lifeFitUserProfile');
      localStorage.removeItem('lifeFitConversation');

      menuAvatar.classList.add('hidden');
      mensagensChat.innerHTML = '';

      atualizarBarraSuperior();
      atualizarTelaCoach();
      irParaAba('home');
      mostrarNotificacao('Você saiu da conta.');
    }

    function reiniciarPerfilCoach() {
      userProfile = null;
      isLogged = false;
      conversationMemory = [];

      localStorage.removeItem('lifeFitLogged');
      localStorage.removeItem('lifeFitUserProfile');
      localStorage.removeItem('lifeFitConversation');

      atualizarBarraSuperior();
      atualizarTelaCoach();
      mostrarNotificacao('Perfil reiniciado.');
    }

    function criarMensagemChat(type, content) {
      const isBot = type === 'bot';

      return `
        <div class="flex ${isBot ? 'justify-start' : 'justify-end'}">
          <div class="
            max-w-[88%] rounded-3xl px-5 py-4 shadow-sm leading-relaxed
            ${isBot ? 'bg-white text-gray-700 rounded-bl-md border border-gray-100' : 'bg-vida-verde text-white rounded-br-md'}
          ">
            ${content}
          </div>
        </div>
      `;
    }

    function adicionarMensagem(type, content) {
      conversationMemory.push({ type, content, time: new Date().toISOString() });
      salvarConversa();
      renderizarConversa();
    }

    function renderizarConversa() {
      mensagensChat.innerHTML = conversationMemory
        .map(message => criarMensagemChat(message.type, message.content))
        .join('');

      setTimeout(() => {
        mensagensChat.scrollTop = mensagensChat.scrollHeight;
      }, 50);
    }

    function renderizarResumoPerfil() {
      if (!userProfile) return;

      const currentBMI = calcularIMC(userProfile.weight, userProfile.height);
      const goalBMI = calcularIMC(userProfile.goal, userProfile.height);
      const safeRange = obterFaixaPesoSegura(userProfile.height);

      resumoPerfil.innerHTML = `
        <div class="grid sm:grid-cols-4 gap-3 text-sm">
          <div class="bg-white rounded-2xl p-3 border border-green-100">
            <p class="text-gray-500 font-bold">Nome</p>
            <p class="font-black text-vida-escuro truncate">${userProfile.name}</p>
          </div>

          <div class="bg-white rounded-2xl p-3 border border-green-100">
            <p class="text-gray-500 font-bold">IMC atual</p>
            <p class="font-black text-vida-escuro">${currentBMI.toFixed(1)} • ${obterClassificacaoIMC(currentBMI)}</p>
          </div>

          <div class="bg-white rounded-2xl p-3 border border-green-100">
            <p class="text-gray-500 font-bold">IMC na meta</p>
            <p class="font-black ${goalBMI < 18.5 ? 'text-red-600' : 'text-vida-escuro'}">${goalBMI.toFixed(1)} • ${obterClassificacaoIMC(goalBMI)}</p>
          </div>

          <div class="bg-white rounded-2xl p-3 border border-green-100">
            <p class="text-gray-500 font-bold">Faixa segura estimada</p>
            <p class="font-black text-vida-escuro">${safeRange.min.toFixed(1)} kg a ${safeRange.max.toFixed(1)} kg</p>
          </div>
        </div>
      `;
    }

    // Cria a primeira conversa automática após o cadastro.
    function iniciarConversaCoach() {
      if (!userProfile) return;

      const currentBMI = calcularIMC(userProfile.weight, userProfile.height);
      const goalBMI = calcularIMC(userProfile.goal, userProfile.height);
      const currentStatus = obterClassificacaoIMC(currentBMI);
      const goalStatus = obterClassificacaoIMC(goalBMI);
      const safeRange = obterFaixaPesoSegura(userProfile.height);

      const intro = `
        Olá, <strong>${userProfile.name}</strong>! Eu sou o Coach IA do Life Fit.
        <br><br>
        Vou fazer uma análise inicial com base nos dados que você informou:
        <br><br>
        <strong>Peso atual:</strong> ${userProfile.weight} kg<br>
        <strong>Altura:</strong> ${userProfile.height} m<br>
        <strong>Meta:</strong> ${userProfile.goal} kg
      `;

      const analysis = `
        Fiz o cálculo inicial:
        <br><br>
        <strong>Seu IMC atual:</strong> ${currentBMI.toFixed(1)} — ${currentStatus}<br>
        <strong>Seu IMC estimado na meta:</strong> ${goalBMI.toFixed(1)} — ${goalStatus}
        <br><br>
        Para sua altura, uma faixa de peso estimada dentro de IMC considerado adequado seria aproximadamente entre
        <strong>${safeRange.min.toFixed(1)} kg</strong> e <strong>${safeRange.max.toFixed(1)} kg</strong>.
      `;

      let safety;

      if (goalBMI < 18.5) {
        safety = `
          <div class="bg-red-100 border border-red-300 text-red-700 rounded-2xl p-4">
            <strong>Alerta vermelho:</strong>
            sua meta pode ser perigosa, porque o IMC estimado ficaria abaixo de 18.5.
            <br><br>
            Para este protótipo, eu não bloquearia o chat, mas recomendaria revisar a meta antes de seguir qualquer plano.
            O mais seguro seria buscar orientação profissional.
          </div>
        `;
      } else {
        safety = `
          <div class="bg-green-100 border border-green-300 text-green-800 rounded-2xl p-4">
            <strong>Meta aparentemente segura.</strong>
            Pelo IMC estimado, sua meta não fica abaixo de 18.5.
            <br><br>
            Agora o foco deve ser consistência: treino, alimentação, sono e uma rotina que você consiga manter.
          </div>
        `;
      }

      const prompt = `
        Você pode conversar comigo como se fosse uma IA real.
        <br><br>
        Pergunte, por exemplo:
        <br>
        <span class="font-black text-vida-verde">
          “Minha meta está segura?”, “Como emagrecer?”, “Quero ganhar massa”, “Monte um treino”, “O que comer?”
        </span>
      `;

      conversationMemory = [
        { type: 'bot', content: intro, time: new Date().toISOString() },
        { type: 'bot', content: analysis, time: new Date().toISOString() },
        { type: 'bot', content: safety, time: new Date().toISOString() },
        { type: 'bot', content: prompt, time: new Date().toISOString() }
      ];

      salvarConversa();
      renderizarConversa();
    }

    function perguntarSugestao(text) {
      document.getElementById('campoMensagem').value = text;
      enviarMensagemSimulada();
    }

    function mostrarDigitando() {
      const typingHTML = `
        <div id="indicadorDigitando" class="flex justify-start">
          <div class="bg-white text-gray-500 rounded-3xl rounded-bl-md px-5 py-4 shadow-sm flex items-center gap-2 border border-gray-100">
            <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
            <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.15s]"></span>
            <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.3s]"></span>
            <span class="ml-2 text-sm">Coach está pensando...</span>
          </div>
        </div>
      `;

      mensagensChat.innerHTML += typingHTML;
      mensagensChat.scrollTop = mensagensChat.scrollHeight;
    }

    function removerDigitando() {
      const typing = document.getElementById('indicadorDigitando');

      if (typing) {
        typing.remove();
      }
    }    

    function normalizarTexto(text) {
      return text
        .toLowerCase()
        .normalizarTexto('NFD')
        .replace(/[\u0300-\u036f]/g, '');
    }

    function temAlgumTermo(text, terms) {
      return terms.some(term => text.includes(normalizarTexto(term)));
    }

    function escaparHTML(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }

    function converterNumeroBrasileiro(value) {
      if (typeof value !== 'string') return NaN;

      const normalized = value
        .trim()
        .replace(',', '.')
        .replace(/[^0-9.]/g, '');

      return parseFloat(normalized);
    }

    // Captura o formulário, valida os dados e salva o perfil no localStorage.
    document.getElementById('formularioCoach').addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('campoNome').value.trim();
      const email = document.getElementById('campoEmail').value.trim();
      const weight = converterNumeroBrasileiro(document.getElementById('campoPeso').value);
      const height = converterNumeroBrasileiro(document.getElementById('campoAltura').value);
      const goal = converterNumeroBrasileiro(document.getElementById('campoMeta').value);

      avisoFormulario.classList.add('hidden');
      avisoFormulario.textContent = '';

      if (!name || !email || !weight || !height || !goal) {
        avisoFormulario.textContent = 'Preencha todos os campos corretamente.';
        avisoFormulario.classList.remove('hidden');
        return;
      }

      const currentBMI = calcularIMC(weight, height);
      const goalBMI = calcularIMC(goal, height);

      if (height < 1 || height > 2.5 || currentBMI < 10 || currentBMI > 80 || goalBMI < 10 || goalBMI > 80) {
        avisoFormulario.textContent = 'Verifique os dados informados. Peso ou altura parecem inválidos.';
        avisoFormulario.classList.remove('hidden');
        return;
      }

      userProfile = {
        name,
        email,
        weight,
        height,
        goal
      };

      isLogged = true;
      conversationMemory = [];

      localStorage.setItem('lifeFitLogged', 'true');
      localStorage.setItem('lifeFitUserProfile', JSON.stringify(userProfile));
      localStorage.removeItem('lifeFitConversation');

      atualizarBarraSuperior();
      atualizarTelaCoach();
      mostrarNotificacao('Perfil criado com sucesso.');
    });

    document.addEventListener('click', function(event) {
      const userActionsBox = document.getElementById('acoesUsuario');

      if (userActionsBox && !userActionsBox.contains(event.target)) {
        menuAvatar.classList.add('hidden');
      }
    });

    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        fecharModalNoticia();
        menuAvatar.classList.add('hidden');
      }

      if (event.key === 'Enter' && document.activeElement.id === 'campoMensagem') {
        enviarMensagemSimulada();
      }
    });

    document.getElementById('modalNoticia').addEventListener('click', function(event) {
      if (event.target.id === 'modalNoticia') {
        fecharModalNoticia();
      }
    });

    //// TESTE AQUI
    //// ESTA FUNÇÃO VAI SIMULAR O ENVIO DE MENSAGENS PARA O COACH, CHAMANDO A FUNÇÃO DO API.JS
    /// EU NÃO FAÇO IDEIA DE COMO VOCÊ VAI IMPLEMENTAR A IA, VOU APRENDER JUNTO CONTIGO MAN !!!, ENTT TEMOS PROBLEMAAS
    /// NÃO VAMOS ESQUECER DE EXCLUIR A FUNÇÃO ANTIGA QUANDO FOR TESTAR ESSA AQUI, SE NÃO VAI DAR RUIM

  async function enviarMensagemSimulada() {
  const input = document.getElementById('campoMensagem');
  const texto = input.value.trim();

  if (!texto || !userProfile) return;

  conversationMemory.push({
    type: 'user',
    content: escapeHTML(texto),
    time: new Date().toISOString()
  });

  saveConversation();
  renderConversation();

  input.value = '';
  showTypingIndicator();

  try {
    const resposta = await enviarMensagemParaCoach({
      mensagem: texto,
      perfil: userProfile,
      historico: conversationMemory
    });

    removeTypingIndicator();

    conversationMemory.push({
      type: 'bot',
      content: resposta,
      time: new Date().toISOString()
    });

    saveConversation();
    renderConversation();

  } catch (erro) {
    removeTypingIndicator();

    conversationMemory.push({
      type: 'bot',
      content: 'Não consegui conectar com o Coach agora. Tente novamente em instantes.',
      time: new Date().toISOString()
    });

    saveConversation();
    renderConversation();

    console.error(erro);
  }
}

/// FIM DO TESTE AKAKAK 
    renderizarNoticias();
    atualizarBarraSuperior();
    atualizarTelaCoach();
    irParaAba('home');

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
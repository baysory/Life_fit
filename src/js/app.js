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

    // Lista de artigos exibidos na aba Início.
    const news = [
      {
        title: '5 hábitos simples para melhorar sua saúde',
        description: 'Pequenas mudanças diárias podem gerar grandes resultados no seu corpo e mente.',
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80',
        fullText: `
          <p>Melhorar a saúde não precisa começar com mudanças radicais. Na maioria das vezes, os resultados mais sustentáveis surgem de pequenas escolhas repetidas todos os dias. Beber mais água, dormir melhor, movimentar o corpo e melhorar a qualidade da alimentação são atitudes simples, mas capazes de transformar completamente a rotina.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non justo ac neque facilisis faucibus. Suspendisse potenti. Donec luctus, arcu sed interdum malesuada, mi risus gravida sem, vitae faucibus neque purus sit amet justo. Sed vel eros vel lectus vulputate volutpat. Proin vitae sapien a elit faucibus vulputate et at lorem.</p>

          <h3>O poder do básico bem feito</h3>

          <p>Um dos maiores erros de quem tenta mudar de vida é querer transformar tudo de uma vez. A pessoa começa uma dieta extremamente restritiva, treina todos os dias, corta tudo que gosta e tenta manter uma rotina impossível. O problema é que esse tipo de estratégia costuma durar pouco.</p>

          <p>A melhor abordagem é construir uma base. Comece com uma caminhada leve, uma refeição mais equilibrada, uma noite de sono melhor e uma meta realista. Com o tempo, essas pequenas ações criam identidade, disciplina e consistência.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat, mi a commodo tincidunt, urna massa egestas magna, sed tincidunt purus ipsum non neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Integer posuere justo ac purus lacinia, vitae vestibulum magna varius.</p>

          <h3>Como colocar em prática</h3>

          <p>Escolha um hábito por semana. Na primeira semana, foque em beber mais água. Na segunda, inclua uma caminhada curta. Na terceira, organize melhor o café da manhã. O progresso parece pequeno no início, mas se torna poderoso quando acumulado.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at lorem nec lacus cursus tristique. Fusce semper ipsum in justo imperdiet, sed tempor massa interdum. Donec fermentum euismod mi, a gravida mauris imperdiet ac.</p>
        `
      },
      {
        title: 'Treino funcional: por que começar?',
        description: 'O treino funcional melhora força, mobilidade, equilíbrio e condicionamento.',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
        fullText: `
          <p>O treino funcional é uma modalidade que trabalha movimentos naturais do corpo, como agachar, empurrar, puxar, correr, saltar e girar. Diferente de treinos muito isolados, ele busca melhorar a forma como o corpo se comporta em situações reais do dia a dia.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum, erat a aliquam dignissim, massa ipsum tristique nisi, sed volutpat urna lectus non orci. Duis sit amet turpis vel lorem posuere convallis. Curabitur euismod justo ut sem porta, et viverra justo tempor.</p>

          <h3>Benefícios para iniciantes</h3>

          <p>Para iniciantes, o treino funcional pode ser uma excelente porta de entrada, pois permite adaptação gradual. É possível trabalhar força, equilíbrio, resistência e mobilidade sem depender necessariamente de muitos equipamentos.</p>

          <p>Outro benefício importante é a prevenção de lesões. Ao fortalecer o corpo de maneira integrada, o praticante tende a melhorar postura, coordenação motora e estabilidade articular. Isso impacta diretamente tarefas comuns, como subir escadas, carregar compras e manter disposição durante o dia.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper leo vitae risus luctus, eget gravida massa porttitor. Sed vitae arcu non massa pretium viverra. Aliquam ac imperdiet tellus, vel cursus velit.</p>

          <h3>Como começar</h3>

          <p>O ideal é começar com movimentos simples, como agachamento, prancha, remada elástica, avanço e caminhada. A progressão deve acontecer aos poucos, respeitando condicionamento, dores, limitações e rotina.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mattis augue. Aliquam blandit consectetur tortor, in pretium ligula. Sed ultricies, nisl sed vulputate sagittis, lorem mi pretium erat, in hendrerit risus justo non lectus.</p>
        `
      },
      {
        title: 'Alimentação equilibrada sem sofrimento',
        description: 'Comer bem não significa cortar tudo que você gosta.',
        image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80',
        fullText: `
          <p>Alimentação equilibrada não precisa ser sinônimo de sofrimento. Muitas pessoas acreditam que comer bem significa cortar pão, arroz, doces, massas e tudo aquilo que gostam. Na prática, esse pensamento costuma gerar frustração e abandono.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lacus in ipsum facilisis fermentum. Aenean vehicula enim in arcu aliquet, sed hendrerit turpis finibus. Nunc consequat dolor vitae facilisis viverra.</p>

          <h3>Comida de verdade e flexibilidade</h3>

          <p>Uma boa alimentação deve ser sustentável. Isso significa que ela precisa fazer sentido dentro da rotina, da cultura alimentar e das preferências da pessoa. O objetivo não é buscar perfeição, mas sim melhorar a qualidade geral das escolhas.</p>

          <p>Priorizar comida de verdade, incluir proteínas, fibras, frutas, verduras e boas fontes de carboidrato já é um ótimo começo. Também é importante entender que nenhum alimento isolado destrói uma dieta. O que realmente importa é o padrão alimentar ao longo do tempo.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta, lectus id tristique porta, nibh turpis finibus ipsum, sit amet consequat libero neque sit amet lacus. Integer at ex et neque lacinia ullamcorper.</p>

          <h3>Organização ajuda mais que motivação</h3>

          <p>Ter opções simples em casa facilita decisões melhores. Arroz, feijão, ovos, frango, frutas, iogurte, legumes e alimentos básicos ajudam a montar refeições rápidas sem depender tanto de improviso.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum lectus justo, vitae interdum mi rutrum non. Integer commodo magna nec justo elementum, vitae aliquam neque iaculis.</p>
        `
      },
      {
        title: 'Sono e emagrecimento: qual a relação?',
        description: 'Dormir mal pode atrapalhar seus resultados físicos.',
        image: 'https://images.unsplash.com/photo-1511295742362-92c96b1cf484?auto=format&fit=crop&w=900&q=80',
        fullText: `
          <p>O sono é um dos pilares mais ignorados quando o assunto é saúde, emagrecimento e ganho de massa muscular. Muitas pessoas focam apenas em treino e dieta, mas esquecem que o corpo precisa se recuperar para evoluir.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim eros at sem malesuada, sed venenatis arcu dictum. Nulla facilisi. Sed non ex sed erat lacinia bibendum. Donec ut pretium risus.</p>

          <h3>Hormônios, fome e recuperação</h3>

          <p>Quando dormimos mal, nosso corpo tende a sofrer alterações hormonais que aumentam a fome, reduzem a saciedade e prejudicam a recuperação muscular. Além disso, a falta de sono diminui a disposição para treinar e aumenta a vontade por alimentos mais calóricos.</p>

          <p>Criar uma rotina de sono é uma estratégia simples e poderosa. Dormir e acordar em horários parecidos, reduzir telas antes de dormir e evitar cafeína muito tarde podem ajudar bastante.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a enim vitae justo venenatis bibendum. Etiam tempor ipsum eget arcu fermentum, ac placerat sapien laoreet. Pellentesque ultricies elit ac orci dapibus, vitae facilisis libero gravida.</p>

          <h3>Pequenos ajustes noturnos</h3>

          <p>Um quarto escuro, temperatura confortável e uma rotina mais calma antes de dormir ajudam o corpo a entender que é hora de desacelerar. Mesmo pequenas melhorias podem gerar impacto na disposição do dia seguinte.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id gravida lorem. Curabitur sagittis felis a massa gravida, ac ultricies nulla consectetur.</p>
        `
      },
      {
        title: 'Como definir uma meta segura',
        description: 'Nem toda meta de peso é saudável. O equilíbrio é essencial.',
        image: 'https://images.unsplash.com/photo-1571019613914-85f342c6a11e?auto=format&fit=crop&w=900&q=80',
        fullText: `
          <p>Definir uma meta de peso exige cuidado. Nem sempre pesar menos significa estar mais saudável. Uma meta segura deve considerar altura, peso atual, composição corporal, rotina, histórico de saúde e prazo.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus lectus nec nulla molestie, et viverra velit luctus. Aliquam erat volutpat. Etiam tincidunt dolor vitae sem varius, sed bibendum magna bibendum.</p>

          <h3>A balança não conta tudo</h3>

          <p>Um erro comum é buscar um número na balança sem entender o impacto disso no corpo. Quando uma meta leva o IMC para uma faixa muito baixa, especialmente abaixo de 18.5, pode haver risco de baixo peso e perda excessiva de massa magra.</p>

          <p>O ideal é estabelecer uma meta progressiva, realista e acompanhada de bons hábitos. A balança é apenas uma ferramenta. Medidas corporais, energia, disposição, força e qualidade de vida também devem ser considerados.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor lectus eget odio tristique, nec elementum ex interdum. Morbi sit amet magna ut nisl eleifend posuere. Nullam ac elit posuere, porta justo id, lacinia eros.</p>

          <h3>Meta boa é meta sustentável</h3>

          <p>Uma meta saudável não é apenas aquela que você consegue atingir, mas aquela que você consegue manter. Por isso, o Life Fit prioriza segurança, consistência e mudança de rotina.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet nulla luctus, mollis erat ut, hendrerit nulla. Vivamus consequat libero quis erat vulputate, sit amet sodales dolor consequat.</p>
        `
      },
      {
        title: 'Cardio ou musculação?',
        description: 'Os dois podem trabalhar juntos para melhorar sua saúde.',
        image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=80',
        fullText: `
          <p>Cardio e musculação não precisam competir entre si. Na verdade, os dois podem trabalhar juntos para melhorar saúde, estética, condicionamento e qualidade de vida.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar, velit eu porta pellentesque, metus ante posuere lectus, non luctus purus urna id sem. Sed eu augue sed massa gravida congue.</p>

          <h3>Funções diferentes, benefícios complementares</h3>

          <p>O cardio melhora a capacidade cardiovascular, ajuda no gasto calórico e contribui para a saúde do coração. Já a musculação fortalece os músculos, protege articulações, melhora postura e ajuda na composição corporal.</p>

          <p>Para a maioria das pessoas, a melhor estratégia é combinar os dois. Não é necessário exagerar. Uma rotina simples, com treinos de força algumas vezes na semana e sessões moderadas de cardio, já pode trazer ótimos resultados.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean posuere diam in enim scelerisque, a suscipit lacus fermentum. Cras consequat orci ut purus rhoncus, nec malesuada nisi rhoncus.</p>

          <h3>Como dividir na semana</h3>

          <p>Uma pessoa iniciante pode fazer musculação três vezes por semana e cardio leve duas vezes por semana. O volume deve ser ajustado conforme energia, tempo disponível e objetivo principal.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere dolor nec erat semper, eget porta sapien vehicula. Nam feugiat tortor et nibh pulvinar, non vehicula tortor luctus.</p>
        `
      }
    ];

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

    // Calcula o IMC usando peso e altura.
    function calcularIMC(weight, height) {
      return weight / (height * height);
    }

    function obterClassificacaoIMC(bmi) {
      if (bmi < 18.5) return 'Abaixo do peso';
      if (bmi < 25) return 'Peso adequado';
      if (bmi < 30) return 'Sobrepeso';
      if (bmi < 35) return 'Obesidade grau I';
      if (bmi < 40) return 'Obesidade grau II';
      return 'Obesidade grau III';
    }

    function obterFaixaPesoSegura(height) {
      return {
        min: 18.5 * height * height,
        max: 24.9 * height * height
      };
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

    function salvarConversa() {
      localStorage.setItem('lifeFitConversation', JSON.stringify(conversationMemory));
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

    // Envia uma mensagem no chat. Este é o melhor ponto para plugar uma API real depois.
    function enviarMensagemSimulada() {
      const input = document.getElementById('campoMensagem');
      const text = input.value.trim();

      if (!text || !userProfile) return;

      conversationMemory.push({ type: 'user', content: escaparHTML(text), time: new Date().toISOString() });
      salvarConversa();
      renderizarConversa();

      input.value = '';
      mostrarDigitando();

      const delay = Math.min(1700, Math.max(800, text.length * 25));

      setTimeout(() => {
        removerDigitando();

        const response = gerarRespostaSimulada(text);
        conversationMemory.push({ type: 'bot', content: response, time: new Date().toISOString() });
        salvarConversa();
        renderizarConversa();
      }, delay);
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

    // Simulação local de IA baseada em palavras-chave.
    function gerarRespostaSimulada(userText) {
      const message = normalizarTexto(userText);

      const currentBMI = calcularIMC(userProfile.weight, userProfile.height);
      const goalBMI = calcularIMC(userProfile.goal, userProfile.height);
      const safeRange = obterFaixaPesoSegura(userProfile.height);
      const wantsDangerousGoal = goalBMI < 18.5;

      if (temAlgumTermo(message, ['imc', 'peso', 'meta', 'segura', 'seguro', 'perigosa', 'perigoso'])) {
        return `
          Vamos olhar sua meta com calma.
          <br><br>
          <strong>IMC atual:</strong> ${currentBMI.toFixed(1)} — ${obterClassificacaoIMC(currentBMI)}<br>
          <strong>IMC na meta:</strong> ${goalBMI.toFixed(1)} — ${obterClassificacaoIMC(goalBMI)}
          <br><br>
          Para sua altura, uma faixa estimada dentro do IMC adequado seria entre
          <strong>${safeRange.min.toFixed(1)} kg</strong> e <strong>${safeRange.max.toFixed(1)} kg</strong>.
          <br><br>
          ${
            wantsDangerousGoal
              ? `<div class="bg-red-100 border border-red-300 text-red-700 rounded-2xl p-4">
                  <strong>Minha leitura:</strong> essa meta parece arriscada porque ficaria abaixo de IMC 18.5.
                  Eu sugeriria ajustar o objetivo para pelo menos ${safeRange.min.toFixed(1)} kg e tratar qualquer meta abaixo disso com acompanhamento profissional.
                </div>`
              : `<div class="bg-green-100 border border-green-300 text-green-800 rounded-2xl p-4">
                  <strong>Minha leitura:</strong> sua meta parece mais segura pelo critério de IMC.
                  Agora o ponto mais importante é definir um ritmo realista e manter massa muscular durante o processo.
                </div>`
          }
        `;
      }

      if (temAlgumTermo(message, ['emagrecer', 'perder gordura', 'secar', 'definir', 'definicao', 'déficit', 'deficit'])) {
        return `
          Para emagrecer com saúde, eu seguiria uma estratégia simples e sustentável:
          <br><br>
          <strong>1. Déficit calórico moderado</strong><br>
          Nada de passar fome. A ideia é comer um pouco menos do que gasta, mas ainda ter energia para treinar e viver bem.
          <br><br>
          <strong>2. Proteína em todas as refeições</strong><br>
          Ajuda na saciedade e preserva massa muscular.
          <br><br>
          <strong>3. Treino de força</strong><br>
          Musculação ou funcional são muito importantes para o corpo não perder músculo junto com gordura.
          <br><br>
          <strong>4. Cardio como ferramenta, não castigo</strong><br>
          Caminhada, bike ou corrida leve podem entrar de 2 a 4 vezes na semana.
          <br><br>
          <strong>Resumo prático:</strong> coma melhor, treine força, caminhe mais e evite metas extremas.
        `;
      }

      if (temAlgumTermo(message, ['ganhar massa', 'hipertrofia', 'musculo', 'músculo', 'massa muscular', 'crescer'])) {
        return `
          Para ganhar massa muscular, o foco principal é progressão.
          <br><br>
          <strong>Treino:</strong> faça exercícios básicos e tente evoluir carga, repetições ou controle do movimento aos poucos.
          <br><br>
          <strong>Alimentação:</strong> você precisa de proteína suficiente e calorias adequadas. Para muita gente, comer pouco é o maior erro na hipertrofia.
          <br><br>
          <strong>Descanso:</strong> músculo não cresce só durante o treino. Ele cresce principalmente na recuperação.
          <br><br>
          Um ponto importante: se sua meta for ganhar massa, a balança pode subir e isso não é necessariamente ruim.
        `;
      }

      if (temAlgumTermo(message, ['dieta', 'comer', 'alimentacao', 'alimentação', 'cardapio', 'cardápio', 'refeicao', 'refeição'])) {
        return `
          Uma alimentação boa não precisa ser perfeita. Ela precisa ser possível.
          <br><br>
          Uma estrutura simples:
          <ul class="list-disc ml-5 mt-2 space-y-1">
            <li><strong>Proteína:</strong> ovos, frango, carne, peixe, iogurte, leite, tofu ou leguminosas.</li>
            <li><strong>Carboidrato:</strong> arroz, batata, aveia, frutas, mandioca ou macarrão.</li>
            <li><strong>Gorduras boas:</strong> azeite, castanhas, abacate ou gema de ovo.</li>
            <li><strong>Fibras:</strong> verduras, legumes e frutas.</li>
          </ul>
          <br>
          Se o objetivo for emagrecer, ajuste quantidades. Se for ganhar massa, talvez precise aumentar porções.
          O segredo não é cortar tudo; é organizar melhor.
        `;
      }

      if (temAlgumTermo(message, ['treino', 'exercicio', 'exercício', 'academia', 'musculacao', 'musculação', 'funcional'])) {
        return `
          Um treino inicial simples poderia ser assim:
          <br><br>
          <strong>Segunda — Corpo inteiro</strong><br>
          Agachamento, supino ou flexão, remada, desenvolvimento, abdominal.
          <br><br>
          <strong>Quarta — Corpo inteiro + cardio leve</strong><br>
          Variações dos mesmos padrões: empurrar, puxar, agachar e estabilizar.
          <br><br>
          <strong>Sexta — Corpo inteiro</strong><br>
          Repete a base tentando melhorar técnica ou carga.
          <br><br>
          <strong>Sábado ou domingo</strong><br>
          Caminhada, bike, mobilidade ou esporte leve.
          <br><br>
          O melhor treino no começo não é o mais perfeito; é aquele que você consegue repetir.
        `;
      }

      if (temAlgumTermo(message, ['agua', 'água', 'hidratar', 'hidratacao', 'hidratação', 'beber'])) {
        return `
          Hidratação é simples, mas faz muita diferença.
          <br><br>
          Uma boa prática é beber água ao longo do dia, não só quando a sede aparece forte.
          Observe também cor da urina, calor, suor e nível de atividade física.
          <br><br>
          Para criar hábito, deixe uma garrafa visível e divida pequenas metas:
          manhã, tarde e noite.
        `;
      }

      if (temAlgumTermo(message, ['sono', 'dormir', 'descanso', 'cansaco', 'cansaço', 'recuperacao', 'recuperação'])) {
        return `
          Sono influencia fome, saciedade, recuperação muscular, humor e energia para treinar.
          <br><br>
          Para melhorar:
          <ul class="list-disc ml-5 mt-2 space-y-1">
            <li>Tente dormir e acordar em horários parecidos.</li>
            <li>Evite tela forte antes de deitar.</li>
            <li>Não exagere na cafeína no fim do dia.</li>
            <li>Deixe o quarto mais escuro, silencioso e confortável.</li>
          </ul>
          <br>
          Às vezes, melhorar o sono acelera mais o resultado do que trocar de treino.
        `;
      }

      if (temAlgumTermo(message, ['ansiedade', 'compulsao', 'compulsão', 'fome emocional', 'descontrole'])) {
        return `
          Quando o problema envolve ansiedade, compulsão ou fome emocional, o caminho precisa ser mais cuidadoso.
          <br><br>
          Algumas estratégias úteis:
          <ul class="list-disc ml-5 mt-2 space-y-1">
            <li>Evitar dietas muito restritivas.</li>
            <li>Manter refeições mais completas ao longo do dia.</li>
            <li>Identificar gatilhos: estresse, sono ruim, tédio ou cobrança excessiva.</li>
            <li>Buscar apoio profissional se isso estiver frequente.</li>
          </ul>
          <br>
          O objetivo não é “ter força de vontade infinita”, é montar um ambiente e uma rotina que ajudem você.
        `;
      }

      if (temAlgumTermo(message, ['obrigado', 'obrigada', 'valeu', 'show', 'boa', 'perfeito'])) {
        return `
          Tamo junto! 
          <br><br>
          Continue com metas realistas e consistência. O Life Fit está aqui para te ajudar nessa evolução.
          Quando quiser, posso simular um plano de treino, rotina alimentar ou análise da sua meta.
        `;
      }

      return `
        Entendi. Vou responder como seu coach inicial.
        <br><br>
        Pelo seu perfil, eu começaria pelo básico bem feito:
        <br><br>
        <strong>1. Meta segura</strong><br>
        Evite mudanças extremas de peso em pouco tempo.
        <br><br>
        <strong>2. Treino consistente</strong><br>
        Comece com 3 treinos por semana e aumente conforme sua rotina permitir.
        <br><br>
        <strong>3. Alimentação equilibrada</strong><br>
        Priorize comida de verdade, proteína, fibras e hidratação.
        <br><br>
        <strong>4. Sono e recuperação</strong><br>
        Resultado físico não vem só do esforço; vem também da recuperação.
        <br><br>
        Você pode me perguntar coisas como:
        <br>
        <span class="text-vida-verde font-black">
          “Como emagrecer?”, “Como ganhar massa?”, “Monte um treino” ou “Minha meta está segura?”
        </span>
      `;
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

    renderizarNoticias();
    atualizarBarraSuperior();
    atualizarTelaCoach();
    irParaAba('home');
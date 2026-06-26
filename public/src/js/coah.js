
// Calcula o IMC usando peso e altura.
export function calcularIMC(weight, height) {
  return weight / (height * height);
}

export function obterClassificacaoIMC(bmi) {
  if (bmi < 18.5) return 'Abaixo do peso';
  if (bmi < 25) return 'Peso adequado';
  if (bmi < 30) return 'Sobrepeso';
  if (bmi < 35) return 'Obesidade grau I';
  if (bmi < 40) return 'Obesidade grau II';
  return 'Obesidade grau III';
}

export function obterFaixaPesoSegura(height) {
  return {
    min: 18.5 * height * height,
    max: 24.9 * height * height
  };
}

// Envia uma mensagem no chat. Ponto para plugar uma IA depois.
// Envia uma mensagem no chat. Ponto para plugar uma IA depois.
export function enviarMensagemSimulada() {
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
  
}    // Simulação local de IA baseada em palavras-chave. Depois, é só trocar pela IA.
export function gerarRespostaSimulada(userText) {
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
          ${wantsDangerousGoal
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
export function salvarConversa() {
      localStorage.setItem('lifeFitConversation', JSON.stringify(conversationMemory));
    }



// vai ser um saco refatorar isso. Vou fazer quando tiver mais tempo.
// Por hora, so conecte ao código antigo do app.js. Linha 400 - 446

//****
    // // Captura o formulário, valida os dados e salva o perfil no localStorage.
    //     document.getElementById('formularioCoach').addEventListener('submit', function(event) {
    //       event.preventDefault();
    
    //       const name = document.getElementById('campoNome').value.trim();
    //       const email = document.getElementById('campoEmail').value.trim();
    //       const weight = converterNumeroBrasileiro(document.getElementById('campoPeso').value);
    //       const height = converterNumeroBrasileiro(document.getElementById('campoAltura').value);
    //       const goal = converterNumeroBrasileiro(document.getElementById('campoMeta').value);
    
    //       avisoFormulario.classList.add('hidden');
    //       avisoFormulario.textContent = '';
    
    //       if (!name || !email || !weight || !height || !goal) {
    //         avisoFormulario.textContent = 'Preencha todos os campos corretamente.';
    //         avisoFormulario.classList.remove('hidden');
    //         return;
    //       }
    
    //       const currentBMI = calcularIMC(weight, height);
    //       const goalBMI = calcularIMC(goal, height);
    
    //       if (height < 1 || height > 2.5 || currentBMI < 10 || currentBMI > 80 || goalBMI < 10 || goalBMI > 80) {
    //         avisoFormulario.textContent = 'Verifique os dados informados. Peso ou altura parecem inválidos.';
    //         avisoFormulario.classList.remove('hidden');
    //         return;
    //       }
    
    //       userProfile = {
    //         name,
    //         email,
    //         weight,
    //         height,
    //         goal
    //       };
    
    //       isLogged = true;
    //       conversationMemory = [];
    
    //       localStorage.setItem('lifeFitLogged', 'true');
    //       localStorage.setItem('lifeFitUserProfile', JSON.stringify(userProfile));
    //       localStorage.removeItem('lifeFitConversation');
    
    //       atualizarBarraSuperior();
    //       atualizarTelaCoach();
    //       mostrarNotificacao('Perfil criado com sucesso.');
    //     });
//******
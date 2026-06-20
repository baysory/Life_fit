// Define a função assíncrona que envia os dados para o seu backend.
// Ela recebe a mensagem do usuário, o perfil dele e o histórico da conversa.
export async function enviarMensagemParaCoach({ mensagem, perfil, historico }) {
  
  // 1. Envio da Requisição (Fetch)
  // Usa o 'fetch' para chamar o seu servidor local na rota '/api/coach'.
  const resposta = await fetch('http://localhost:3000/api/coach', {
    method: 'POST', // Define que estamos enviando dados (criando uma nova interação).
    headers: {
      // Informa ao servidor que o corpo da requisição está em formato JSON.
      'Content-Type': 'application/json'
    },
    // Converte o objeto JavaScript (mensagem, perfil, historico) em uma string JSON
    // para poder trafegar pela internet até o servidor.
    body: JSON.stringify({
      mensagem,
      perfil,
      historico
    })
  });

  // 2. Verificação de Erros
  // Verifica se o servidor respondeu com sucesso (códigos 200-299).
  // Se o servidor retornar erro (ex: 400, 500), 'resposta.ok' será falso.
  if (!resposta.ok) {
    // Lança um erro que pode ser capturado pelo frontend para avisar o usuário.
    throw new Error('Erro ao conversar com o Coach.');
  }

  // 3. Leitura da Resposta
  // Converte a resposta do servidor (que vem como texto/JSON bruto) de volta para um objeto JavaScript.
  const dados = await resposta.json();

  // 4. Retorno do Resultado
  // Extrai apenas o texto da resposta da IA (que está dentro de 'dados.resposta')
  // e devolve para quem chamou a função (geralmente o código que atualiza o chat na tela).
  return dados.resposta;
}   
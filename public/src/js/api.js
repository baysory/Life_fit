// api.js
// Este arquivo é a ponte entre o frontend e o backend.
// Ele NÃO fala direto com a API de IA.
// Ele fala apenas com a rota do seu servidor: /api/coach.

export async function enviarMensagemParaCoach({
  mensagem,
  perfil,
  historico
}) {
  // Envia a mensagem para o backend.
  // A URL relativa funciona localmente e também na Vercel.
  const respostaHttp = await fetch('/api/coach', {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      mensagem,
      perfil,
      historico
    })
  });

  // Tenta transformar a resposta do backend em JSON.
  // Mesmo se der erro, tentamos ler para pegar a mensagem enviada pelo servidor.
  const dados = await respostaHttp.json().catch(() => ({}));

  // Se o backend respondeu com erro, joga esse erro para o app.js.
  if (!respostaHttp.ok) {
    throw new Error(
      dados.erro ||
      `Erro ao conversar com o Coach. Código: ${respostaHttp.status}`
    );
  }

  // Garante que o backend realmente devolveu uma resposta válida.
  if (!dados.resposta || typeof dados.resposta !== 'string') {
    throw new Error('O Coach não retornou uma resposta válida.');
  }

  // Retorna somente o texto limpo para o app.js colocar no chat.
  return dados.resposta.trim();
}
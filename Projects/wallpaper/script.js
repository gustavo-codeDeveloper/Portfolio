const canvas = document.getElementById("bg")

const ctx = canvas.getContext("2d");
/*
 Obtém o contexto de desenho 2D do canvas. Esse ctx tem métodos como fillRect, arc, fillText, stroke, createLinearGradient etc. Pense como o "pincel/mesa" que desenha.*/

// função para ajustar o tamanho do canvas à janela
function resize() {
    canvas.width = window.innerWidth; // largura do canvas = largura da janela
    canvas.height = window.innerHeight; // altura do canvas = altura da janela
}
/*
Define uma função que ajusta a largura/altura do canvas para as dimensões atuais da janela. É importante porque o canvas tem resolução explícita via canvas.width/canvas.height (diferente do CSS).*/
resize();
window.addEventListener("resize", resize);
/*
reaplicar quando a janela redimensionar, 'Escuta' eventos de redimensionamento da janela e reaplica resize quando ocorrer — assim a animação sempre preenche a janela corretamente.*/

//Loop de animação

function loop() {
    // desenhar um fundo escuro
    ctx.fillStyle = "rgba(10, 10, 10, 0.2)"
    /*
    desenha um retângulo de fundo (aqui redundante com a body mas útil se você quiser desenhar camadas).*/
    //limpa o canvas.
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //Desenha partículas simples
    ctx.fillStyle = "#00ff9c";// cor verde neon
    ctx.beginPath();
    ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 2, 0, Math.PI * 2);
    ctx.fill();
    /* Como funciona
    ctx.beginPath(); inicia um novo caminho de desenho.
    ctx.arc(...) desenha um círculo:
    Math.random() * canvas.width escolhe uma posição X aleatória dentro da largura do canvas.
    Math.random() * canvas.height escolhe uma posição Y aleatória dentro da altura do canvas.
    2 é o raio do círculo (bem pequeno).
    0 e Math.PI * 2 definem o início e fim do arco (círculo completo).
    ctx.fill(); preenche o círculo com a cor definida em ctx.fillStyle.
    Ou seja, a cada frame, um novo ponto verde neon aparece em uma posição aleatória, criando um efeito de partículas piscando.*/
    
    /*Você pode reutilizar esse trecho para criar efeitos de partículas,
     estrelas, chuva, neve ou qualquer visual dinâmico em fundo de sites, jogos ou aplicações interativas. Basta adaptar:
     Troque a cor (ctx.fillStyle) para o efeito desejado.
    Altere o raio do círculo para partículas maiores ou menores.
    Mude a posição para animar ou distribuir as partículas de outra forma (por exemplo, usar arrays para guardar posições e animar cada uma).
    Adapte o loop para desenhar múltiplas partículas por frame, criando efeitos mais densos.
    Exemplo de uso em outro projeto (fundo animado de estrelas):
    
    // ...existing code...
        ctx.fillStyle = "white";
        for (let i = 0; i < 100; i++) {
            ctx.beginPath();
            ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 1, 0, Math.PI * 2);
            ctx.fill();
        }
    // ...existing code...
 
    */
    requestAnimationFrame(loop);
    /*
    pede ao navegador para chamar loop de novo no próximo frame — é o jeito eficiente para animação.*/
}
loop();
/*
let x = 0; // posição horizontal de exemplo (vamos animar um círculo)

function loop() {
  // limpar tudo do frame anterior (evita 'rastros')
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // desenhar um fundo escuro (opcional, só pra ver)
  ctx.fillStyle = '#0a0a0a';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // desenhar um círculo que se move da esquerda para a direita
  ctx.beginPath();
  ctx.arc(x, canvas.height / 2, 30, 0, Math.PI * 2); // (x, y, raio, startAng, endAng)
  ctx.fillStyle = '#00ff9c'; // cor verde neon
  ctx.fill();
  ctx.closePath();

  // atualizar posição para o próximo frame
  x += 2; // velocidade (pixels por frame)
  if (x - 30 > canvas.width) x = -30; // volta para a esquerda quando sair da tela

  // pedir ao navegador para executar 'loop' no próximo repaint (frame)
  requestAnimationFrame(loop);
}

// 8) iniciar a animação
loop();
*/

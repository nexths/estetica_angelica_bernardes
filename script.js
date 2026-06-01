/**
 * ==========================================================================
 * MOTOR LOGICO DO MODAL (ESTILO ABRE JANELA PC)
 * ==========================================================================
 */

// Função executada quando o usuário clica no card do procedimento
function abrirVideo(idVideo) {
    const modal = document.getElementById('videoModal');
    const player = document.getElementById('videoPlayer');
    
    // Injeta a URL correta de transmissão do YouTube com autoplay ligado
   player.src = `https://www.youtube.com/embed/${idVideo}?autoplay=1&rel=0&controls=1`;
    
    // Insere a classe ativo que dispara a animação de zoom sutil e amanhecer do CSS
    modal.classList.add('ativo');
}

// Função executada ao clicar no (X) ou fora da caixa do vídeo
function fecharVideo() {
    const modal = document.getElementById('videoModal');
    const player = document.getElementById('videoPlayer');
    
    
    // Remove o estado ativo do CSS escondendo a interface
    modal.classList.remove('ativo');
    
    // Limpa a URL do player imediatamente para cortar o som do vídeo em execução
    player.src = '';
}
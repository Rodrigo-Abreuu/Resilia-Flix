var scrollAtual = 0;
function scrollDireita() {
    scrollAtual += 400;
    scrollAtual = scrollAtual > 2000 ? 2000 : scrollAtual;
    $('#fotos').animate({
        scrollLeft: scrollAtual
    }, 1000);
}

function scrollEsquerda() {
    scrollAtual -= 400;
    scrollAtual = scrollAtual < 0 ? 0 : scrollAtual;
    $('#fotos').animate({
        scrollLeft: scrollAtual
    }, 1000);
}
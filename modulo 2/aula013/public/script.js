// A função só vai poder ser incrementada com aquile type que foi passado nos parâmetros
function mostrarTexto(texto, alinhamento) {
    return "<div style=\"text-align: ".concat(alinhamento, "\">").concat(texto, "</div>");
}
mostrarTexto('ola', 'right');
mostrarTexto('ola', 'left');
function configurar(props) {
}
configurar({ width: 200, height: 200 });
configurar('auto');

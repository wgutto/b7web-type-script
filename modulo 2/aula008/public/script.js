// Em um objeto vc tem que definir o tipo de cada elemento presente nele
function resumo(usuario) {
    return "Ol\u00E1 ".concat(usuario.nome, ", vc tem ").concat(usuario.idade, " anos");
}
var usuario = {
    nome: 'Augusto',
    idade: 22
};
resumo(usuario);

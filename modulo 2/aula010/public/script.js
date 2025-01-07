// O simbolo de ? significa que aquele parâmetro é opcionaç
function resumo(usuario) {
    if (usuario.idade !== undefined) {
        return "Ol\u00E1 ".concat(usuario.nome, ", vc tem ").concat(usuario.idade, " anos");
    }
    else {
        return "Ol\u00E1 ".concat(usuario.nome, ".");
    }
}
var usuario = {
    nome: 'Augusto',
    idade: 20
};
console.log(resumo(usuario));

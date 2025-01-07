function resumo(usario) {
    return "Ol\u00E1 ".concat(usario.nome, ", vc tem ").concat(usario.idade, " anos.");
}
resumo({
    nome: 'Augusto',
    idade: 20
});

// Função com parâmetro e retorno tipado/seguro
function firstLetterUpperCase(name) {
    var firstLetter = name[0];
    return "".concat(firstLetter).concat(name.substring(1));
}
console.log(firstLetterUpperCase('Augusto'));
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(3, 6));

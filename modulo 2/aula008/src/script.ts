// Em um objeto vc tem que definir o tipo de cada elemento presente nele
function resumo(usuario: {nome: string, idade: number}) {
    return `Olá ${usuario.nome}, vc tem ${usuario.idade} anos`
}

let usuario = {
    nome: 'Augusto',
    idade: 22
}

resumo(usuario)
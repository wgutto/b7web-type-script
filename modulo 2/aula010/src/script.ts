// O simbolo de ? significa que aquele parâmetro é opcionaç
function resumo(usuario: {nome: string, idade?: number}) {
    if(usuario.idade !== undefined) {
        return `Olá ${usuario.nome}, vc tem ${usuario.idade} anos`
    } else {
        return `Olá ${usuario.nome}.`
    }
}

let usuario = {
    nome: 'Augusto',
    idade: 20
}

console.log(resumo(usuario))
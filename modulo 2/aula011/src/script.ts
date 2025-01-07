// Cria varios tipos de types para ser usado depois, ambos, a diferença é que com o type, vc não consegue alterar depois o tipo do type, ou adicionar
type Default = {
    nome: string,
    idade: number
}

interface User {
    nome: string,
    idade: number
}

function resumo(usario: Default) {
    return `Olá ${usario.nome}, vc tem ${usario.idade} anos.`
}

resumo({
    nome: 'Augusto',
    idade: 20
})

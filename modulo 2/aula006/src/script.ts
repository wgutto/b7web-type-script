// Função com parâmetro e retorno tipado/seguro
function firstLetterUpperCase(name: string): string {
    let firstLetter = name[0]

    return `${firstLetter}${name.substring(1)}`
}

console.log(firstLetterUpperCase('Augusto'))

function somar(n1: number, n2: number): number {
    return n1 + n2
}

console.log(somar(3, 6))
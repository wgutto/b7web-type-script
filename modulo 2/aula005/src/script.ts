// Função com parâmetro tipado/seguro
function firstLetterUpperCase(name: string) {
    let firstLetter = name[0]

    return `${firstLetter}${name.substring(1)}`
}

console.log(firstLetterUpperCase('Augusto'))
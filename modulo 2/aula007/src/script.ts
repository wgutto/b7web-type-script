let names = ['pao', 'ovo', 'cafe', 90]

names.forEach( (nome) => {
    if(typeof nome === 'string') {
        console.log(nome.toUpperCase())
    } else {
        console.log(nome)
    }
})
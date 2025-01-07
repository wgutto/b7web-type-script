function mostrarIdade(idade: string | number) {
    if(typeof idade === 'string') {
        console.log(idade.toUpperCase())
    } else {
    console.log('A idade é ' + idade)
    }
}

mostrarIdade('augusto')
// A função só vai poder ser incrementada com aquile type que foi passado nos parâmetros
function mostrarTexto(texto: string, alinhamento: 'left' | 'right' | 'center') {
    return `<div style="text-align: ${alinhamento}">${texto}</div>`
}

mostrarTexto('ola', 'right')
mostrarTexto('ola', 'left')




type Opcoes = {
    width: number,
    height: number
}

function configurar(props: Opcoes | 'auto') {

}

configurar({width: 200, height: 200})
configurar('auto')
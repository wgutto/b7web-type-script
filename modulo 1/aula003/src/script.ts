let n1 = document.getElementById('n1') as HTMLInputElement
let n2 = document.getElementById('n2') as HTMLInputElement
let button = document.getElementById('button') as HTMLInputElement
let res = document.getElementById('res') as HTMLInputElement

function somar(n1: number, n2: number) {
    return n1 + n2
}

button.addEventListener('click', () => {
    res.innerHTML = somar(Number(n1.value), Number(n2.value)).toString()
})
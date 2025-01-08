function fazerRequisicao(url: string, method: 'GET' | 'POST') {

}

// Resolvendo a inferência literal em variaveis(method), também poderia criar um type ao invés de colocar a variavel como constante
var url = 'https://google.com.br'
const method = 'GET'

fazerRequisicao(url, method)



// Resolvendo a inferência literal em um objeto(method), melhor metodo de resolver
type RequestDetails = {
    url: string,
    method: 'GET' | 'POST'
}

let req: RequestDetails = {
    url: 'https://google.com.br',
    method: 'POST'
}

fazerRequisicao(req.url, req.method)
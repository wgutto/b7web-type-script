function fazerRequisicao(url, method) {
}
// Resolvendo a inferência literal em variaveis(method), também poderia criar um type ao invés de colocar a variavel como constante
var url = 'https://google.com.br';
var method = 'GET';
fazerRequisicao(url, method);
var req = {
    url: 'https://google.com.br',
    method: 'POST'
};
fazerRequisicao(req.url, req.method);

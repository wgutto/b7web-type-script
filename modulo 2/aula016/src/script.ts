// type void quando criado em um Type, ele não vai esperar nenhum retorno, mas se tiver algum retorno não tem problema
type QualquerFuncao = () => void

const algo: QualquerFuncao = () => {
    return 12
}

// Neste caso de void na função, não pode haver retorno, pois ira dar erro
const algo2 = (): void => {

}
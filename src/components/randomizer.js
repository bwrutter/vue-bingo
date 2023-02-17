export function sortearPosicao(lista = []) {
    const posicao = Math.floor(Math.random() * lista.length)
    return posicao
}

export function sortearXPosicoes(lista = [], posicoes = 1) {
    const listaCopia = [...lista]
    const sorteados = []
    for (let posicao = 0; posicao < posicoes; posicao++) {
        const posicaoSorteada = sortearPosicao(listaCopia)
        const [numero] = listaCopia.splice(posicaoSorteada, 1);
        sorteados.push(numero)
    }
    return sorteados
}
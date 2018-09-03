function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Boné', 1000))
console.log(criarProduto('iPad', 1000))
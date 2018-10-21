function getPreco(imposto = 0, moeda = 'R$' ) {
    return `${moeda} ${this.preco * (1 - this.desc)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4567,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())

const carro = { preco: 100, desc: 0.1}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.20, 'RR$'))
console.log(getPreco.apply(carro, [0.20,'RRR$'])
)

const produtos = [{
        nome: 'notebook',
        preco: 100,
        fragil: true
    },
    {
        nome: 'ipad',
        preco: 200,
        fragil: true
    },
    {
        nome: 'copo',
        preco: 300,
        fragil: true
    },
    {
        nome: 'metal',
        preco: 400,
        fragil: false
    },
]

console.log(produtos.filter(function (p) {
    return false
}))

const caro = produto => produto.preco <= 200
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))
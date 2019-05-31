Array.prototype.filter2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

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


const caro = produto => produto.preco <= 200
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))
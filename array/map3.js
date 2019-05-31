Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "batata", "preco": 3.45}',
    '{ "nome": "batata", "preco": 3.45}',
    '{ "nome": "batata", "preco": 3.45}',
    '{ "nome": "batata", "preco": 3.45}'
]

//retornar um array apenas com os preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)


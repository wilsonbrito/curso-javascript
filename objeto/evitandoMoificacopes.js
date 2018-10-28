// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 2, tag: 'Promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
delete produto.tag
console.log(produto)
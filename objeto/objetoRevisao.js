// Objeto é uma coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 900,
    proprietario: {
        nome: 'Wilson',
        idade: '25',
        endereco:{
            logradouro: 'Rua 1',
            numero: '601'
        }
    },
    condutores: {
        nome: 'junior'
    },
    calcularValorSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000

console.log(carro)

// Usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções costrutoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 8 , 9)
const p2 = new Produto('Notebook', 8 , 9)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory
function criarFucionario(nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return (salario / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFucionario('João', 4000, 20)
const f2 = criarFucionario('Maria', 4000, 0)
console.log(f1.getSalario(), f2.getSalario())

//Object.Create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna objeto
const fromJSON = JSON.parse ('{"info": "Sou um JSON"}')
console.log(fromJSON.info)

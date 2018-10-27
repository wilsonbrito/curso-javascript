// Pessoa -> 123 -> {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa = { nome: 'Ana' } //Não deve rodar porque é umas const
Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)

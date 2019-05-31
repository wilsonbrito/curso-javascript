const alunos = [{
    nome: 'Batata',
    nota: 3,
    bolsista: false
},
{
    nome: 'Batata',
    nota: 4,
    bolsista: true
},
{
    nome: 'Batata',
    nota: 5,
    bolsista: false
},
{
    nome: 'Batata',
    nota: 6,
    bolsista: true
},
]
//Desafio 1 Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista

console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Desafio 2 Alguns alunos são bolsista?
const algunsBolsista = (resultado, bolsista) => resultado || bolsista

console.log(alunos.map(a => a.bolsista).reduce(algunsBolsista))
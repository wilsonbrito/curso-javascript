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

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)

console.log(resultado)
const notas = [9, 8, 7, 6, 5, 4, 3, 2, 1]

//Sem callback
let notasBaixas = []
for (let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)


//Com Callback
notasBaixas = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas)
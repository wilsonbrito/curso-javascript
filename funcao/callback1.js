const frabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

frabricantes.forEach(imprimir)
frabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})
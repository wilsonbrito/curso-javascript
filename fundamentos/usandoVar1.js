//o bloco não faz diferença (escopo global)
{
    {
        {
            var sera = 'Será?'
            console.log(sera)
        }
    }
}
console.log(sera)

//escopo function
function teste() {
    var local = 123
    console.log(local)
}

teste()
//console.log(local) //a variável funciona somente dentro do escopo da função

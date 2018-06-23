//par nome/valor
const saudacao = 'Opa' //Contexto léxico 1 
// É o contexto, local no qual sua variével foi definida no local físico do seu código.

function exec() { 
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao
}

//Objetos são grupos alinhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

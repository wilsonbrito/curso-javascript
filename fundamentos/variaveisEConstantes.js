var numeros = 3 //atribuição do valor 3 ao identificador chamado "numeros"
let numeross = 4 //atribuição do valor 4 ao identificador chamado "numeross"
const numerosss = 5 //atribuição do valor 5 ao identificador chamado "numerosss" e não posso fazer uma atribuição depois, por ela ser constante.

/*
* Se eu declarar no let novamente com o mesmo identificador outro valor, irá reportar no output que estou tentando declarar novamente o valor.
* já com o var, nada acontece.
*/


var numeros = 6
numeross = 7

console.log(numeros,numeross, numerosss)

numeros = 300
numeross = 400

console.log(numeros,numeross, numerosss)
const escola = "Wilson"

console.log(escola.charAt(4))
console.log(escola.charAt(10)) //JS não irá reportar erro.
console.log(escola.charCodeAt(3)) //para saber o valor html unicode da posicao produrada
console.log(escola.indexOf('l')) //para saber a posição da letra

console.log(escola.substring(1))//retira a string que está na posição reportada
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!")) //concatenar o valor junto com o objeto, no cado está adicionando o valor literal junto ao objeto escola.
console.log('Escola ' + escola + "!")

console.log(escola.replace(/\i/, 't')) //altera a letra que foi inserida na regex, porém pode inserir a string que deseja como no exemplo abaixo que coloquei
console.log(escola.replace(/\w/g, 't')) //altera tudo pela letra
console.log(escola.replace('i', 't'))

console.log('Ana, Maria,Pedro'.split(','))
   
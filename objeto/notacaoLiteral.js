const a = 1
const b = 2
const c = 3

const obj1 = {a:a, b:b, c:c}
//Hoje já pode fazer assim
const obj2 = {a, b, c}
console.log(obj1, obj2)

const nomeAttr = 'Nota'
const valorAttr = 9

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

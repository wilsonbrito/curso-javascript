//Cadeia de protótipos (prototype chain)
const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B'}
const filho = { __proto__: pai, attr3: 'C'}
console.log(filho.attr1)

//Se caso tenha o mesmo atributo no filho e no pai e você pede para imprimir pelo filho, vai imprimir o valor do filhos,
// pois está realizando o sombreamento

const carro = {
    velAtual: 0,
    valMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo : 'F40',
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())
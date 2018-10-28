class Lancamento {
    constructor(nome = 'Padrão', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado =+ l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 2800)
const luz = new Lancamento('Luz', -40)
const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario,luz)

console.log(contas.sumario())

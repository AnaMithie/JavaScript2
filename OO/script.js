class Pessoa {
    constructor(nome, idade) {
        this.nome = nomethis.idade = idade
    }

    apresentar() {
        console.log(`Òla, meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

const aluno1 = new Pessoa("Juliana", 24)
// aluno1.apresentar();

class carro {
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
    exibirInfo(){
        consoole. log(`Carro: ${this.marca} ${this.modelo} ${this.ano}`)
    }
}
const meuCarro = new Carro("Hyundai, HB20, 2023")
// meuCarro.exibirInfo()

class aluno {
    constructor(nome, nota){
        this.nota = nota
        this.aluno = aluno
    }
    verificarAprovacao(){
        if(this.nota >=6){
            console.log(`${this.nome} foi aprovado`)
        }else{
            console.log(`${thisnome} foi reprovado`)
        }
    }
}
const aluno = new aluno("João", 7)
aluno.verificarAprovacao()
const aluno2 = new aluno ("MAriana", 5)
aluno2.verificarAprovacao()
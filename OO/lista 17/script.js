// 1
class livro{
    constructor(titulo, autor, paginas){
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }
    mostrarDetalhes(){
        console.log (`livro: ${this.titulo} do autor ${this.autor} tem ${this.paginas} Paginas`)
    }
}
const meuLivro = new livro("O príncipe corvo", "Elizabeth Hoyt", 328)
meuLivro.mostrarDetalhes()

// 2

class contaBancaria{
    constructor(titular, saldo){
    this.titular = titular;
    this.saldo =  saldo;
    }
depositar(valor){
    this.saldo += valor 
}
sacar(valor){
    this.saldo -= valor
}
verSaldo(){
    console.log(`${this.titular} tem ${this.saldo}`)
}
}
 const depositar = new contaBancaria("matheus", 100)
 depositar.depositar(150)
 depositar.sacar(50)
 depositar.verSaldo()

// 3

class pet{
    constructor(nome, especie, idade){
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
    }
    falar(){
        if (this.especie == "cachorro"){
            console.log ("Au au!")
        }else{ 
            (this.especie == "gato")
            console.log ("Miau!")
        }
        }
    }
       const meuPet = new pet("Snoop", "gato", 5)
    meuPet.falar()

    // 4
class filme{
    constructor(titulo, genero, duracao){
        this.titulo = titulo;
        this.genero = genero;
        this.duracao = duracao
        }
        assistir(){
            console.log(`Você esta assistindo ${this.titulo}, que dura ${this.duracao} minutos.`)
        }
}
const meuFilme = new filme("Moana", "Aventura", 100)
meuFilme.assistir()

// 5
class musica{
    constructor (titulo, artista, tempo){
        this.titulo = titulo;
        this.artista = artista;
        this.tempo = tempo;
    }
    tocar(){
        console.log(`Tocando ${this.titulo} do artista ${this.artista} que dura ${this.tempo} minutos.`)
    }
}
const ouvindo = new musica("Clair de Lune", "Claude Debussy", 5)
ouvindo.tocar()

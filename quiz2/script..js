const perguntas = [
    {
        pergunta: "Qual é o maior órgão do corpo humano?",
        opcoes: ["Pele", "Fígado", "Estômago", "Pulmão"],
        correta: 0
    },
    {
        pergunta: "Onde ocorre a maior parte da digestão dos alimentos?",
        opcoes: ["Intestino delgado", "Esôfago", "Boca", "Intestino grosso"],
        correta: 0
    },
    {
        pergunta: "Qual é a função principal dos pulmões?",
        opcoes: ["Filtrar o sangue", "Bombear o sangue", "Produzir hormônios", "Trocar oxigênio e gás carbônico"],
        correta: 3
    },
    {
        pergunta: "Qual é o nome do osso da coxa, o maior do corpo?",
        opcoes: ["Tíbia","Fêmur", "Úmero", "Rádio"],
        correta: 1
    },
    {
        pergunta: "Qual órgão é responsável por bombear o sangue para todo o corpo?",
        opcoes: ["Coração", "Pulmão", "Estômago", "Cérebro"],
        correta: 0
    },
    {
        pergunta: "Qual sistema é responsável pelos movimentos do corpo?",
        opcoes: [ "Sistema digestório", "Sistema circulatório","Sistema muscular", "Sistema respiratório"],
        correta: 2
    },
    {
        pergunta: "Quantos rins uma pessoa saudável normalmente possui?",
        opcoes: ["1","4", "2", "3"],
        correta: 2
    },
    {
        pergunta: "Qual é a principal função do cérebro?",
        opcoes: ["Controlar as funções do corpo", "Fazer a digestão", "Bombear o sangue", "Filtrar impurezas"],
        correta: 0
    },
    {
        pergunta: "Qual parte do corpo é responsável por transportar o oxigênio no sangue?",
        opcoes: [ "Plasma", "Plaquetas", "Hemoglobina", "Linfócitos"],
        correta: 2
    },
    {
        pergunta: "Onde se localiza o estômago?",
        opcoes: ["Abdômen", "Tórax", "Crânio", "Pelve"],
        correta: 0
    }
];


let perguntaAtual = 0
let pontuacao = 0
let erros = 0
let opcaoSelecionada = null

const pergunta = document.getElementById("pergunta")
const opcoes = document.getElementById("opcoes")
const botaoPoxima = document.getElementById ("proxima")
const quiz = document.getElementById("quiz")
const pontuacaoFinal = document.getElementById("pontuacao")
const valorPontuacao = document.getElementById("valor-pontuacao")
const botaoReiniciar = document.getElementById("reiniciar")
const errosContador = document.getElementById("erros")
const acertos = document.getElementById ("acertos")

function atualizarPlacar () {
    acertos.textContent = pontuacao
    errosContador.textContent = erros
}

function mostrarPergunta(){
    const perguntaAtualObj = perguntas[perguntaAtual]
    pergunta.textContent = perguntaAtualObj.pergunta
    opcoes.textContent = ""
    perguntaAtualObj.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement("button")
        botao.textContent = opcao
        botao.classList.add ("opcao")
        botao.addEventListener("click", () => selecionarOpcao(indice))
        opcoes.appendChild(botao)
    })
    opcaoSelecionada = null
    botaoPoxima.disabled = true
}

function selecionarOpcao (indice) {
    opcaoSelecionada = indice
    const opcoes = document.querySelectorAll(".opcao")
    opcoes.forEach((opcao, i) => {
        opcao.classList.toggle("selecionada", i == indice)
    }) 
    botaoPoxima.disabled = false
}
function mostrarpontuacao (){
    quiz.classList.add("esconder")
    pontuacaoFinal.classList.remove("esconder")
    valorPontuacao.textContent = pontuacao
}

    botaoPoxima.addEventListener("click", () => {
    
    if(opcaoSelecionada == perguntas[perguntaAtual].correta) {
    pontuacao++
    } else {
    erros++
    
    }
    atualizarPlacar()
    
    perguntaAtual++
    if(perguntaAtual < perguntas.length) {
    mostrarPergunta()
    } else {
    mostrarpontuacao()
    }
})

    botaoReiniciar.addEventListener("click", () => {
        perguntaAtual = 0
        pontuacao = 0
        erros = 0

        quiz.classList.remove("esconder")
        pontuacaoFinal.classList.add("esconder")

        atualizarPlacar()
        mostrarPlacar()
    })

    mostrarPergunta()
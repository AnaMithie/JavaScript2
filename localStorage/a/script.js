let tarefas = JSON.parse(localStorage.getItem("tarefas"))
const entradaTarefa = document.getElementById
("entradaTarefa")
const botaoTarefa = document.getElementById
("botaoAdicionar")
const listarTarefas = document.getElementById
("lisarTarefa")

function salvarTarefas () {
    localStorage. setItem("tarefas", JSON. stringify(tarefas )) || []
    
    }

function exibirTarefas() {
    listarTarefas. innerText = ""
    tarefas.forEach((tarefa, indice) => {
    const itemLista = document.createElement ("li")
    const caixaMarcacao = document.createElement
    ("input")
    caixaMarcacao.type = "checkbox"
    caixaMarcacao.checked = tarefa.feita
    caixaMarcacao.onchange = () => {
    tarefas[indice].feita = !tarefas[indice].feita
    salvarTarefas()
    exibirTarefas()
    }

    const textoTarefa = document.createElement ("span")
textoTarefa.textContent = tarefa.texto
if(tarefa.feita) {
textoTarefa. classList.add("concluida")
}
const botaoExcuir = document.createElement
("button")
botaoExcluir. textContent = "excluir"
botaoExcluir.onclick = () => {
tarefas.splice(indice, 1)
salvarTarefas()
exibirTarefas()
}
itemLista.appendChild(caixaMarcacao)
itemLista.appendChild(textoTarefa)
itemLista.appendChild(botaoExcluir)
listarTarefas.appendChild(itemLista)
})
}



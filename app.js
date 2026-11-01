const Tarefa = document.querySelector("#form_tarefa") //seleciona o formulario pelo id e guarda ele na variavel
const nova_tarefa = document.querySelector("#nova_tarefa")
const mensagemErro = document.querySelector("#mensagem-erro")    
const listaTarefas = document.querySelector("#lista_tarefas")

Tarefa.addEventListener('submit', function(evento){//add um avento para chamar td o codigo no momento em que o botão é aprtado
    evento.preventDefault()//cancela o compotamento do navegador recarregar a pagina ao enciar o formulario

    const textoTarefa = nova_tarefa.value.trim()
    const tarefa = nova_tarefa.value

    const inputTarefa = document.getElementById("nova_tarefa")

    if (textoTarefa.length < 3){
        mensagemErro.textContent = "Deve ter no minimo 3 caracteres"
        return;//se o texto tiver menos que 3 letras vai ter um aviso de erro
    }
    mensagemErro.textContent = ""//limpa qualquer mensagem de erro antiga que tivesse na tela
    const lista = document.createElement('li')//cria um novo elemento HTML na memoria do JS
    lista.textContent = tarefa//insere o texto digitado pelo usuario no li

    const Concluir = document.createElement("button")//cria um novo element o de botão na memoria
    Concluir.textContent = "Concluir"
    Concluir.addEventListener("click", function() {//add um evento de clique exclusivo para esse botão
    lista.classList.toggle("tarefa-concluida");});
    lista.append(Concluir);

    listaTarefas.append(lista);

    inputTarefa.value = "";//limpa a caixa de texto, para a proxima digitação
  ;
})

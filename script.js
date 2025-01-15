const InputTarefa = document.querySelector("#tarefa")
const BotaoTarefa = document.querySelector("#botao")
const ContainerTarefa = document.querySelector(".tarefas")

BotaoTarefa.addEventListener('click', () => {
    if (!InputTarefa.value){
        InputTarefa.classList.add("error")
        return
    }
    
    let NovaTarefa = document.createElement('div')
    NovaTarefa.classList.add('caixa')
    NovaTarefa.innerHTML = InputTarefa.value

    let DeleteTarefa = document.createElement('button') 
    DeleteTarefa.classList.add('delete')

    let DeleteIcone = document.createElement('i')
    DeleteIcone.classList.add('fa-solid')
    DeleteIcone.classList.add('fa-trash')

    ContainerTarefa.appendChild(NovaTarefa)
    NovaTarefa.appendChild(DeleteTarefa)
    DeleteTarefa.appendChild(DeleteIcone)

    DeleteTarefa.addEventListener('click', () => {
        if (confirm("A tarefa excluída não poderá ser recuperada. Tem certeza disso?")) {
            DeleteTarefa.parentNode.remove(); // Remove o elemento pai de DeleteTarefa
        }
    })
})


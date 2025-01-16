const InputTarefa = document.querySelector("#tarefa")
const BotaoTarefa = document.querySelector("#botao")
const ContainerTarefa = document.querySelector(".cards")
let card = 0

function criarCard(valor, id){

    let NovaTarefa = document.createElement('div')
    NovaTarefa.classList.add('caixa')
    NovaTarefa.innerHTML = valor

    let DeleteTarefa = document.createElement('button') 
    DeleteTarefa.classList.add('delete')

    let DeleteIcone = document.createElement('i')
    DeleteIcone.classList.add('fa-solid', 'fa-trash', 'icolor')

    ContainerTarefa.appendChild(NovaTarefa)
    NovaTarefa.appendChild(DeleteTarefa)
    DeleteTarefa.appendChild(DeleteIcone)

    DeleteTarefa.addEventListener('click', () => {
        if (confirm("A tarefa excluída não poderá ser recuperada. Tem certeza disso?")) {
            const cardId = NovaTarefa.dataset.cardId
            NovaTarefa.remove()
            localStorage.removeItem(cardId)
        }
    })

    NovaTarefa.dataset.cardId = id;
    localStorage.setItem(id, valor);
}

BotaoTarefa.addEventListener('click', () => {
    if (!InputTarefa.value){
        InputTarefa.classList.add("error")
        InputTarefa.placeholder = 'Digite o nome para adicionar.'
        return
    }

    InputTarefa.classList.remove('error')
    
    let cardId = `card${card}`
    criarCard(InputTarefa.value, cardId)

    localStorage.setItem(cardId, InputTarefa.value)
    card++
})

window.addEventListener('load', () => {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        if (key.startsWith('card')) {
            let valor = localStorage.getItem(key)
            criarCard(valor, key)
        }
    }
})
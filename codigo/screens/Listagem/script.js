const filterButton = document.querySelector('.filter-button')
const filterContainer = document.querySelector('.filter-container')
const contatoButton = document.getElementsByClassName('contato-button')

const objectsContainer = document.querySelector('.list-container')

function handleOpenFilterContainer(e) {
    if (
        filterContainer.style.display === 'none' ||
        !filterContainer.style.display
    ) {
        filterContainer.style.display = 'flex'
    } else {
        filterContainer.style.display = 'none'
    }
}

function handleClickContatoButton(id) {
    window.location.href = '../ContatoObjeto/index.html?id=' + id
}

filterButton.addEventListener('click', handleOpenFilterContainer)

function handleListObjetos() {
    const objects = JSON.parse(localStorage.getItem('objeto'))
    objectsContainer.innerHTML = ''

    if (!objects) {
        let emptyListHtml = `<div class="empty-list-container">
                                <i class="fa-solid fa-handshake-slash"></i>
                                <h3>Sem objetos cadastrados!</h3>
                            </div>`

        objectsContainer.innerHTML = emptyListHtml

        return
    }

    let objetosHTML = ''

    objects.forEach((objeto) => {
        let objetoCard = `<div class="object-card">
                        <div class="image-container">
                            <img src=${
                                objeto.imagem ?? '../../imagens/sem-foto.gif'
                            }
                                alt="Imagem do objeto" />
                        </div>
                        <div class="details">
                            <div class="title-container">
                                <h3>${objeto.nome}</h3>
                                <span>Encontrado por Usuario123</span>
                            </div>

                            <div class="info">
                                <div class="row">
                                    <div class="icon-container">
                                        <i class="fa-solid fa-layer-group"></i>
                                    </div>
                                    <span>${objeto.categoria}</span>
                                </div>
                                <div class="row">
                                    <div class="icon-container">
                                        <i class="fa-solid fa-location-dot"></i>
                                    </div>
                                    <span>Bloco ${objeto.bloco} - ${
            objeto.sala
        }</span>
                                </div>
                                <div class="row">
                                    <div class="icon-container">
                                        <i class="fa-solid fa-clock"></i>
                                    </div>
                                    <span>${objeto.data}</span>
                                </div>
                            </div>

                            <button onclick="handleClickContatoButton(${
                                objeto.id
                            })" class="contato-button">
                                Contato <i class="fa-solid fa-phone"></i>
                            </button>
                        </div>
                    </div>`
        objetosHTML += objetoCard
    })

    objectsContainer.innerHTML += objetosHTML
}

function handleUsuarioConnected() {
    const isLogged = JSON.parse(localStorage.getItem('isLogged'))

    if (!isLogged) {
        window.location.href = './screens/Home/index.html'
    }
}

window.onload = () => {
    handleUsuarioConnected()
    handleListObjetos()
}

//BABI

function filtraPorOpcoes(categoriaSelecionada, blocoSelecionado, nomeBusca) {
    const limparButton = document.getElementById('btn-limpar')
    limparButton.disabled = false
    const objetos = JSON.parse(localStorage.getItem('objeto'))

    let arrayFiltrado = objetos

    if (categoriaSelecionada != '') {
        arrayFiltrado = arrayFiltrado.filter(
            (objeto) =>
                objeto.categoria.toLowerCase() ==
                categoriaSelecionada.toLowerCase()
        )
    }

    if (blocoSelecionado != '') {
        arrayFiltrado = arrayFiltrado.filter(
            (objeto) =>
                objeto.bloco.toLowerCase() == blocoSelecionado.toLowerCase()
        )
    }

    if (nomeBusca != '') {
        arrayFiltrado = arrayFiltrado.filter((objeto) =>
            objeto.nome.toLowerCase().includes(nomeBusca.toLowerCase())
        )
    }

    if (arrayFiltrado.length == 0) {
        alert('Nenhum objeto encontrado com essas opções!')
        handleListObjetos()
        return
    } else {
        objetosHTML = ''

        arrayFiltrado.forEach((objeto) => {
            let objetoCard = `<div class="object-card">
                            <div class="image-container">
                                <img src=${
                                    objeto.imagem ??
                                    '../../imagens/sem-foto.gif'
                                }
                                    alt="Imagem do objeto" />
                            </div>
                            <div class="details">
                                <div class="title-container">
                                    <h3>${objeto.nome}</h3>
                                    <span>Encontrado por Usuario123</span>
                                </div>
    
                                <div class="info">
                                    <div class="row">
                                        <div class="icon-container">
                                            <i class="fa-solid fa-layer-group"></i>
                                        </div>
                                        <span>${objeto.categoria}</span>
                                    </div>
                                    <div class="row">
                                        <div class="icon-container">
                                            <i class="fa-solid fa-location-dot"></i>
                                        </div>
                                        <span>Bloco ${objeto.bloco} - ${
                objeto.sala
            }</span>
                                    </div>
                                    <div class="row">
                                        <div class="icon-container">
                                            <i class="fa-solid fa-clock"></i>
                                        </div>
                                        <span>${objeto.data}</span>
                                    </div>
                                </div>
    
                                <button onclick="handleClickContatoButton(${
                                    objeto.id
                                })" class="contato-button">
                                    Contato <i class="fa-solid fa-phone"></i>
                                </button>
                            </div>
                        </div>`
            objetosHTML += objetoCard
        })

        objectsContainer.innerHTML = objetosHTML
    }
}

function filtrar(e) {
    e.preventDefault()

    const categoriaSelecionada = document.getElementById('categoria').value
    const blocoSelecionado = document.getElementById('bloco').value
    const nomeBusca = document.getElementById('minhabusca').value

    if (
        categoriaSelecionada == '' &&
        blocoSelecionado == '' &&
        nomeBusca == ''
    ) {
        alert('Selecione ao menos das opções de filtro')
    } else {
        filtraPorOpcoes(categoriaSelecionada, blocoSelecionado, nomeBusca)
    }
}

//BABI - funcao limpar filtro

function limparFiltro() {
    document.getElementById('btn-limpar').disabled = true

    const categoriaSelecionada = document.getElementById('categoria')
    const blocoSelecionado = document.getElementById('bloco')
    const nomeBusca = document.getElementById('minhabusca')

    categoriaSelecionada.selectedIndex = 0
    blocoSelecionado.selectedIndex = 0
    nomeBusca.value = ''

    handleListObjetos()
}

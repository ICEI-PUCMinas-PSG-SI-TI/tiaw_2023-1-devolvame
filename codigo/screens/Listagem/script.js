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

function handleClickContatoButton() {
    window.location.href = '../ContatoObjeto/index.html'
}

filterButton.addEventListener('click', handleOpenFilterContainer)

async function handleListObjetos() {
    const objects = JSON.parse(localStorage.getItem('objeto'))

    if (!objects) {
        let emptyListHtml = `<div class="empty-list-container">
                                <i class="fa-solid fa-handshake-slash"></i>
                                <h3>Sem objetos cadastrados!</h3>
                            </div>`

        objectsContainer.innerHTML += emptyListHtml

        return
    }

    let objetosHTML = ''

    objects.forEach((objeto) => {
        let objetoCard = `<div class="object-card">
                        <div class="image-container">
                            <img src=${objeto.imagem ?? "../../imagens/sem-foto.gif"}
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
                                    <span>Bloco ${objeto.bloco} - ${objeto.sala}</span>
                                </div>
                                <div class="row">
                                    <div class="icon-container">
                                        <i class="fa-solid fa-clock"></i>
                                    </div>
                                    <span>${objeto.data}</span>
                                </div>
                            </div>

                            <button onclick="handleClickContatoButton()" class="contato-button">
                                Contato <i class="fa-solid fa-phone"></i>
                            </button>
                        </div>
                    </div>`

        objetosHTML += objetoCard
    })

    objectsContainer.innerHTML += objetosHTML
}


window.onload = () => {
    handleListObjetos()
}

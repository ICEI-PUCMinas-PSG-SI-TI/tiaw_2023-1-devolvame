function handleRenderDetails(id) {
    const container = document.querySelector('.container')
    const objetos = JSON.parse(localStorage.getItem('objeto'))

    const objeto_selected = objetos.find((objeto) => objeto.id === Number(id))

    container.innerHTML = ` <div class="object-card">
    <div class="image-container">
        <img src=${objeto_selected.imagem ?? '../../imagens/sem-foto.gif'}
            alt="" />
    </div>
    <div class="details">
        <div class="title-container">
            <h3>${objeto_selected.nome}</h3>
            <span>Encontrado por Usuario123</span>
        </div>

        <div class="info">
            <div class="row">
                <div class="icon-container">
                    <i class="fa-solid fa-layer-group"></i>
                </div>
                <span>${objeto_selected.categoria}</span>
            </div>
            <div class="row">
                <div class="icon-container">
                    <i class="fa-solid fa-location-dot"></i>
                </div>
                <span>Bloco ${objeto_selected.bloco} - ${
        objeto_selected.sala
    }</span>
            </div>
            <div class="row">
                <div class="icon-container">
                    <i class="fa-solid fa-clock"></i>
                </div>
                <span>${objeto_selected.data}</span>
            </div>

        </div>

        <div class="contato-info">
            <i class="fa-solid fa-phone"></i>
            <span>Telefone: (99) 999999-9999</span>

            <i class="fa-solid fa-envelope"></i>
            <span> Email: usuario@gmail.com </span>
        </div>

    </div>
</div>`
}

function handleUsuarioConnected() {
    const header = document.querySelector('header')
    const isLogged = JSON.parse(localStorage.getItem('isLogged'))

    if (!isLogged) {
        window.location.href = '../Home/index.html'
    } else {
        header.innerHTML += `                                    <div>
        <a href="../PerfilUsuario/index.html">
            <button>Perfil</button>
        </a>
        <a onclick="handleSignOut(event)">
            <button>
                <i class="fa-solid fa-right-from-bracket"></i>
            </button>
        </a>
    </div>`
    }
}

function handleSignOut(event) {
    event.preventDefault()

    localStorage.setItem('isLogged', false)
    alert('Deslogado com sucesso!')
    window.location.href = '../Home/index.html'
}

window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const objetoId = urlParams.get('id')

    handleRenderDetails(objetoId)
    handleUsuarioConnected()
}

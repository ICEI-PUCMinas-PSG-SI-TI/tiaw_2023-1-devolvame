function handleUsuarioConnected() {
    const nav = document.querySelector('header nav')
    const header = document.querySelector('header')
    const isLogged = JSON.parse(localStorage.getItem('isLogged'))

    if (!isLogged) {
        nav.innerHTML = `                <a href="../Home/index.html">Home</a><span>|</span>
        <a href="../Contato/index.html">Contato</a><span>|</span>
        <a href="../Sobre/index.html">Sobre</a><span>|</span>
        <a href="../Faq/index.html">Faq</a>`

        header.innerHTML += `            <a href="../Login/index.html">
        <button>Login</button>
    </a>`
    } else {
        nav.innerHTML = `                <a href="../Home/index.html">Home</a><span>|</span>
        <a href="../Listagem/index.html">Listagem</a><span>|</span>
        <a href="../Contato/index.html">Contato</a><span>|</span>
        <a href="../Sobre/index.html">Sobre</a><span>|</span>
        <a href="../Faq/index.html">Faq</a>`

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
    handleUsuarioConnected()
}

function handleUsuarioConnected() {
    const nav = document.querySelector('header nav')
    const header = document.querySelector('header')
    const isLogged = JSON.parse(localStorage.getItem('isLogged'))

    if (!isLogged) {
        nav.innerHTML = `                <a href="../Home/index.html">Home</a><span>|</span>
        <a href="../Contato/index.html">Contato</a><span>|</span>
        <a href="../Sobre/index.html">Sobre</a>`

        header.innerHTML += `            <a href="../Login/index.html">
        <button>Login</button>
    </a>`
    } else {
        nav.innerHTML = `                <a href="../Home/index.html">Home</a><span>|</span>
        <a href="../Listagem/index.html">Listagem</a><span>|</span>
        <a href="../Contato/index.html">Contato</a><span>|</span>
        <a href="../Sobre/index.html">Sobre</a>`

        header.innerHTML += `            <a href="../PerfilUsuario/index.html">
        <button>Perfil</button>
    </a>`
    }
}

window.onload = () => {
    handleUsuarioConnected()
}

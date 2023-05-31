function handleUsuarioConnected() {
    const header = document.querySelector('header')
    const isLogged = JSON.parse(JSON.parse(localStorage.getItem('isLogged')))

    if (!isLogged) {
        header.innerHTML += `            <a href="../Login/index.html">
        <button>Login</button>
    </a>`
    } else {
        header.innerHTML += `            <a href="../PerfilUsuario/index.html">
        <button>Perfil</button>
    </a>`
    }
}

window.onload = () => {
    handleUsuarioConnected()
}

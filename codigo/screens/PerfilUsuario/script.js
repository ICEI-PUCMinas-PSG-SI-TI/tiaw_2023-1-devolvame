function handleSignOut(event) {
    event.preventDefault()

    localStorage.setItem('isLogged', false)
    alert('Deslogado com sucesso!')
    window.location.href = '../Home/index.html'
}

function handleUsuarioConnected() {
    const isLogged = JSON.parse(localStorage.getItem('isLogged'))

    if (!isLogged) {
        window.location.href = '../Home/index.html'
    }
}

window.onload = () => {
    handleUsuarioConnected()
}

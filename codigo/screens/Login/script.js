const form = document.getElementById('formulario')
const userInput = document.getElementById('usernameInput')
const passwordInput = document.getElementById('passwordInput')

function handleLogin(event) {
    event.preventDefault()

    if (!userInput.value || userInput.value == '') {
        alert('Insira o usuário')
        return
    }

    if (!passwordInput.value || passwordInput.value == '') {
        alert('Insira a senha')
        return
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios'))

    if (
        loginUsuario({
            username: userInput.value,
            password: passwordInput.value
        })
    ) {
        alert('Login válido! Entrando!')
        localStorage.setItem('isLogged', true)
        window.location.href = '../listagem/index.html'
    } else {
        alert('Login inválido')
        return
    }
}

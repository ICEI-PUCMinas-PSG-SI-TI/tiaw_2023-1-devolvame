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

    if (
        loginUsuario({
            username: userInput.value,
            password: passwordInput.value,
        })
    ) {

        alert('Login válido! Entrando!')
        localStorage.setItem('isLogged', true)
        localStorage.setItem('userLogged', userInput.value)
        window.location.href = '../listagem/index.html'
    } else {
        alert('Login inválido')
        return
    }
}

function handleSignOut(event) {
    event.preventDefault()

    localStorage.setItem('isLogged', false)
    alert('Deslogado com sucesso!')
    window.location.href = '../Home/index.html'
}

function handleUsuarioConnected() {
    const isLogged = JSON.parse(localStorage.getItem('isLogged'))

    const campoNome = document.getElementById('pesquisa')
    const campoTelefone = document.getElementById('telefone')
    const campoEmail = document.getElementById('email')
    const senhaOld = document.getElementById('senhaold')
    const novaSenha = document.getElementById('senha')

    if (!isLogged) {
        window.location.href = '../Home/index.html'
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios'))
    const userLogged = localStorage.getItem('userLogged')

    let usuarioEncontrado = usuarios.find(
        (usuario) => usuario.usuario == userLogged
    )

    campoNome.value = usuarioEncontrado.usuario
    campoTelefone.value = usuarioEncontrado.celular
    campoEmail.value = usuarioEncontrado.email

    document.getElementById('alterar').addEventListener('click', (event) => {
        event.preventDefault()

        if (usuarioEncontrado.senha !== senhaOld.value) {
            alert(
                'Senha antiga incorreta. Por favor, digite a senha antiga correta.'
            )
            return
        }

        usuarioEncontrado.usuario = campoNome.value
        usuarioEncontrado.celular = campoTelefone.value
        usuarioEncontrado.email = campoEmail.value
        usuarioEncontrado.senha = novaSenha.value

        localStorage.setItem('usuarios', JSON.stringify(usuarios))
        localStorage.setItem(
            'userLogged',
            JSON.stringify(usuarioEncontrado.usuario)
        )

        alert('Dados alterados com sucesso!')
        location.reload()
    })

    document.getElementById('deletar').addEventListener('click', (event) => {
        event.preventDefault()

        let new_usuarios = usuarios.filter(
            (usuario) => usuario.usuario !== usuarioEncontrado.usuario
        )

        localStorage.setItem('usuarios', JSON.stringify(new_usuarios))
        localStorage.setItem('isLogged', null)
        localStorage.setItem('userLogged', null)

        alert('Usuário deletado com sucesso!')
        window.location.href = '../Home/index.html'
    })
}

window.onload = function () {
    handleUsuarioConnected()
}

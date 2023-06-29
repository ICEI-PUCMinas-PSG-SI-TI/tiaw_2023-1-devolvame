function handleSignOut(event) {
    event.preventDefault()

    localStorage.setItem('isLogged', false)
    alert('Deslogado com sucesso!')
    window.location.href = '../Home/index.html'
}

function handleUsuarioConnected() {
    const isLogged = JSON.parse(localStorage.getItem('isLogged'))

    // Obtendo o elemento de input pelo id
    var campoNome = document.getElementById("pesquisa");
    var campotelefone = document.getElementById("telefone");
    var campoemail = document.getElementById("email");
    var senhaold = document.getElementById("senhaold");

    if (!isLogged) {
        window.location.href = '../Home/index.html'
    }

    // Obtendo os usuários armazenados no localStorage
    var usuariosArmazenados = localStorage.getItem("usuarios");
    var userLogged = localStorage.getItem("userLogged");

    // Verificando se há usuários armazenados
    if (usuariosArmazenados) {
        // Fazendo o parsing da string JSON para um objeto
        var usuarios = JSON.parse(usuariosArmazenados);
        
        // Procurando pelo nome de usuário
        var usuarioEncontrado = usuarios.find(function (usuario) {
            return usuario.usuario === userLogged;
        });

        if (usuarioEncontrado) {
            // Preenchendo o campo de nome com o valor do usuário encontrado
            campoNome.value = usuarioEncontrado.usuario;
            campotelefone.value = usuarioEncontrado.celular;
            campoemail.value = usuarioEncontrado.email;
            senhaold.value = usuarioEncontrado.senha;
        } else {
            console.log("Usuário não encontrado.");
        }
    } else {
        console.log("Nenhum usuário encontrado no localStorage.");
    }

}

window.onload = () => {
    handleUsuarioConnected()
}
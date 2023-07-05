function handleSignOut(event) {
    event.preventDefault();

    localStorage.setItem('isLogged', false);
    alert('Deslogado com sucesso!');
    window.location.href = '../Home/index.html';
}

function handleUsuarioConnected() {
    const isLogged = JSON.parse(localStorage.getItem('isLogged'));

    // Obtendo o elemento de input pelo id
    var campoNome = document.getElementById('pesquisa');
    var campoTelefone = document.getElementById('telefone');
    var campoEmail = document.getElementById('email');
    var senhaOld = document.getElementById('senhaold');
    var novaSenha = document.getElementById('senha');

    if (!isLogged) {
        window.location.href = '../Home/index.html';
    }

    // Obtendo os usuários armazenados no localStorage
    var usuariosArmazenados = localStorage.getItem('usuarios');
    var userLogged = localStorage.getItem('userLogged');

    // Verificando se há usuários armazenados
    if (usuariosArmazenados) {
        // Fazendo o parsing da string JSON para um objeto
        var usuarios = JSON.parse(usuariosArmazenados);

        // Procurando pelo nome de usuário
        var usuarioEncontrado = usuarios.find(function (usuario) {
            return usuario.usuario === userLogged;
        });

        if (usuarioEncontrado) {
            // Preenchendo os campos com os valores do usuário encontrado
            campoNome.value = usuarioEncontrado.usuario;
            campoTelefone.value = usuarioEncontrado.celular;
            campoEmail.value = usuarioEncontrado.email;
        } else {
            console.log('Usuário não encontrado.');
        }
    } else {
        console.log('Nenhum usuário encontrado no localStorage.');
    }

    // Evento para alterar os dados
document.getElementById('alterar').addEventListener('click', function (event) {
    event.preventDefault();

    // Verificar se a senha antiga é a mesma cadastrada
    if (usuarioEncontrado.senha !== senhaOld.value) {
        alert('Senha antiga incorreta. Por favor, digite a senha antiga correta.');
        return;
    }

    // Atualizando os dados do usuário
    usuarioEncontrado.usuario = campoNome.value;
    usuarioEncontrado.celular = campoTelefone.value;
    usuarioEncontrado.email = campoEmail.value;
    usuarioEncontrado.senha = novaSenha.value;

    // Salvando os usuários atualizados no localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Dados alterados com sucesso!');
});


    // Evento para deletar o usuário
    document.getElementById('deletar').addEventListener('click', function (event) {
        event.preventDefault();

        // Removendo o usuário do array de usuários
        usuarios = usuarios.filter(function (usuario) {
            return usuario.usuario !== usuarioEncontrado.usuario;
        });

        // Salvando os usuários atualizados no localStorage
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert('Usuário deletado com sucesso!');
        window.location.href = '../Home/index.html';
    });
}

window.onload = function () {
    handleUsuarioConnected();
};
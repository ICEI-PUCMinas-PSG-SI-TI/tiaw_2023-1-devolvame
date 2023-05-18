var objeto = []
var usuarios = []

/* cadastra admins caso localStorage vazio */
usuarios = JSON.parse(localStorage.getItem("usuarios"))
if (!usuarios) {

    let admins = [
        { username: 'daniloloose', password: 'admin' },
        { username: 'barbaragiovana', password: 'admin' },
        { username: 'rodrigorangel', password: 'admin' },
        { username: 'joaovictor', password: 'admin' },
        { username: 'miguelbizzi', password: 'admin' }
    ]

    usuarios = []
    admins.forEach(admin => {
        usuarios.push(admin)
    })

    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}

/* API (CRUD) objetos */
function cadastrarObjeto() { }
function listarObjetos() { }
function listarObjeto() { }
function filtrarObjetos() { }
function atualizarObjeto() { }
function excluirObjeto() { }

/* API (CRUD) usuários */
function cadastrarUsuario(usuario) {

    // ainda não foram feitas validações, criar novo script de validação?
    let usuarioCadastrado = listarUsuario(usuario.username)
    if (usuarioCadastrado) return false

    usuarios.push(usuario)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    return usuario


}
function listarUsuario(username) {
    let usuarioCadastrado = usuarios.find(usuarioCadastrado => {
        if (username === usuarioCadastrado.username) return usuarioCadastrado
    })

    return usuarioCadastrado ? usuarioCadastrado : false

}
function listarUsuarios() { }
function atualizarUsuario(username) { }
function excluirUsuario(username) { }
function loginUsuario(usuario) {

    let usuarioCadastrado = usuarios.find(usuarioCadastrado => {
        if (usuario.username === usuarioCadastrado.username &&
            usuario.password === usuarioCadastrado.password) return usuarioCadastrado
    })

    return usuarioCadastrado ? usuarioCadastrado : false
}
var objeto = []
var usuarios = []

/* cadastra admins caso localStorage vazio */
if (!localStorage.length) {

    let admins = [
        { username: 'daniloloose', password: 'admin' },
        { username: 'barbaragiovana', password: 'admin' },
        { username: 'rodrigorangel', password: 'admin' },
        { username: 'joaovictor', password: 'admin' },
        { username: 'miguelbizzi', password: 'admin' }
    ]

    admins.forEach(admin => {
        usuarios.push(admin)
    })
}

/* API (CRUD) objetos */
function cadastrarObjeto(objeto) { }

function listarObjetos() { }

function listarObjeto(id) { }

function filtrarObjetos(filtro) { }

function atualizarObjeto(id) { }

function excluirObjeto(id) { }

/* API (CRUD) usuários */
function cadastrarUsuario(usuario) { }

function listarUsuario(id) { }

function listarUsuarios() { }

function atualizarUsuario(id) { }

function excluirUsuario(id) { }

function loginUsuario(usuario) { }
var objeto = []
var usuarios = []
var faq = []

/* cadastra admins caso localStorage vazio */
usuarios = JSON.parse(localStorage.getItem('usuarios'))

if (!usuarios) {
    let admins = [
        { usuario: 'daniloloose', senha: 'admin' },
        { usuario: 'barbaragiovana', senha: 'admin' },
        { usuario: 'rodrigorangel', senha: 'admin' },
        { usuario: 'joaovictor', senha: 'admin' },
        { usuario: 'miguelbizzi', senha: 'admin' },
    ]

    usuarios = []

    admins.forEach((admin) => {
        usuarios.push(admin)
    })

    localStorage.setItem('usuarios', JSON.stringify(usuarios))
}

// Cadastro de objetos inicial
const objetos = JSON.parse(localStorage.getItem('objeto'))

if (!objetos) {
    let new_objetos = [
        {
            id: 1,
            bloco: 'J',
            categoria: 'garrafas',
            data: '2023/03/12',
            descricao: 'Encontrei essa garrafa na sala 101 do bloco J',
            nome: "Garrafa d'agua",
            sala: 'Sala 101',
            imagem: 'https://images.tcdn.com.br/img/img_prod/548537/garrafa_termica_flip_straw_stanley_651ml_lagoon_18209_1_defa16f920ee19d390a80cf7ae7d042b_20230301162446.jpg',
        },
        {
            id: 2,
            bloco: 'B',
            categoria: 'vestimentas',
            data: '2023/04/02',
            descricao: 'Encontrei esse bone na sala 201 do bloco H',
            nome: 'Boné da nike',
            sala: 'Sala 201',
            imagem: 'https://static.netshoes.com.br/produtos/bone-nike-sportswear-h86-futura-washed-aba-curva/26/D12-9796-026/D12-9796-026_zoom1.jpg?ts=1630602306',
        },
    ]

    localStorage.setItem('objetoId', 3)
    localStorage.setItem('objeto', JSON.stringify(new_objetos))
}

/* API FAQ */
function cadastrarFaq() { }
function listarFaq() {

    faq = JSON.parse(localStorage.getItem('faq'))

    if (!faq) {
        faq = [{
            pergunta: "Como posso cadastrar meu objeto?",
            resposta: "Bdl aksl skaidha skdjhaksdhaj kdhalisdhadh."
        }, {
            pergunta: "Como contatar o usuário?",
            resposta: "Bdl aksl skaidha skdjhaksdhaj kdhalisdhadh."
        }, {
            pergunta: "Achei meu objeto, e agora?",
            resposta: "Bdl aksl skaidha skdjhaksdhaj kdhalisdhadh."
        }
        ]
    }

    localStorage.setItem('faq', JSON.stringify(faq));

    return faq
}

/* API (CRUD) objetos */
function cadastrarObjeto() { }
function listarObjetos() { }
function listarObjeto(id) { }
function filtrarObjetos(filtro) { }
function atualizarObjeto(id) { }
function excluirObjeto(id) { }

/* API (CRUD) usuários */
function cadastrarUsuario(usuario) {
    // ainda não foram feitas validações, criar novo script de validação?
    let usuarioCadastrado = listarUsuario(usuario.username)
    if (usuarioCadastrado) return false

    usuarios.push(usuario)
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    return usuario
}

function listarUsuario(username) {
    let usuarioCadastrado = usuarios.find((usuarioCadastrado) => {
        if (username === usuarioCadastrado.username) return usuarioCadastrado
    })

    return usuarioCadastrado ? usuarioCadastrado : false
}

function listarUsuarios() { }
function atualizarUsuario(username) { }
function excluirUsuario(username) { }

function loginUsuario(usuario) {
    let usuarioCadastrado = usuarios.find((usuarioCadastrado) => {
        if (
            usuario.username === usuarioCadastrado.username &&
            usuario.password === usuarioCadastrado.password
        )
            return usuarioCadastrado
    })

    return usuarioCadastrado ? usuarioCadastrado : false
}

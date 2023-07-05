var objeto = []
var usuarios = []
var faq = []

/* cadastra admins caso localStorage vazio */
usuarios = JSON.parse(localStorage.getItem('usuarios'))

if (!usuarios) {
    let admins = [
        {
            usuario: 'daniloloose',
            senha: 'admin',
            nome: 'Danilo Loose',
            celular: '31925441325',
            email: 'daniloloose@gmail.com',
            cep: '31630290',
            rua: 'Rua Rodrigo Fernandes Santos',
            bairro: 'Venda Nova',
            numero: 324,
            complemento: null,
        },
        {
            usuario: 'barbaragiovana',
            senha: 'admin',
            nome: 'Barbara Giovana',
            celular: '3199512933',
            email: 'barbaragiovana@gmail.com',
            cep: '30532300',
            rua: 'Rua Maria Magdalena Camargos',
            bairro: 'Jardinópolis',
            numero: 142,
            complemento: null,
        },
        {
            usuario: 'rodrigorangel',
            senha: 'admin',
            nome: 'Rodrigo Rangel',
            email: 'rodrigorangel@gmail.com',
            celular: '31924666374',
            cep: '30190922',
            rua: 'Avenida Augusto de Lima 744',
            bairro: 'Centro',
            numero: 1512,
            complemento: 'apto 402',
        },
        {
            usuario: 'joaovictor',
            senha: 'admin',
            nome: 'Joao Victor',
            email: 'joaovictor@gmail.com',
            celular: '31921474776',
            cep: '31630290',
            rua: 'Rua Piraju',
            bairro: 'Piratininga',
            numero: 41,
            complemento: 'apto 101',
        },
        {
            usuario: 'miguelbizzi',
            senha: 'admin',
            nome: 'Miguel Oliveira Bizzi',
            celular: '31995721022',
            email: 'miguelbizzi@gmail.com',
            cep: '31330250',
            rua: 'Rua Castelo de Guimarães',
            bairro: 'Castelo',
            numero: 307,
            complemento: 'apto 501',
        },
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
            data: '12/03/2023',
            descricao: 'Encontrei essa garrafa na sala 101 do bloco J',
            quemEncontrou: 'miguelbizzi',
            nome: "Garrafa d'agua",
            sala: 'Sala 101',
            imagem: 'https://images.tcdn.com.br/img/img_prod/548537/garrafa_termica_flip_straw_stanley_651ml_lagoon_18209_1_defa16f920ee19d390a80cf7ae7d042b_20230301162446.jpg',
        },
        {
            id: 2,
            bloco: 'B',
            categoria: 'vestimentas',
            data: '02/04/2023',
            descricao: 'Encontrei esse bone na sala 201 do bloco H',
            quemEncontrou: 'daniloloose',
            nome: 'Boné da nike',
            sala: 'Sala 201',
            imagem: 'https://static.netshoes.com.br/produtos/bone-nike-sportswear-h86-futura-washed-aba-curva/26/D12-9796-026/D12-9796-026_zoom1.jpg?ts=1630602306',
        },
        {
            id: 3,
            bloco: 'I',
            categoria: 'livros',
            data: '03/07/2023',
            descricao: 'Encontrei esse livro na sala 314 do bloco I',
            quemEncontrou: 'barbaragiovana',
            nome: 'Livro Pequeno Principe',
            sala: 'Sala 314',
            imagem: 'https://m.media-amazon.com/images/I/81fXBeYYxpL._AC_UF1000,1000_QL80_.jpg',
        },
        {
            id: 4,
            bloco: 'A',
            categoria: 'celulares',
            data: '02/07/2023',
            descricao: 'Encontrei esse celular na sala 102 do bloco A',
            quemEncontrou: 'joaovictor',
            nome: 'iPhone 11',
            sala: 'Sala 102',
            imagem: 'https://images-americanas.b2w.io/produtos/01/00/img/4339562/3/4339562379_1GG.jpg',
        },
    ]

    localStorage.setItem('objetoId', 3)
    localStorage.setItem('objeto', JSON.stringify(new_objetos))
}

/* API FAQ */
function cadastrarFaq(pergunta) {
    faq.push(pergunta)
    localStorage.setItem('faq', JSON.stringify(faq))
}

function listarFaq() {
    faq = JSON.parse(localStorage.getItem('faq'))

    if (!faq) {
        faq = [
            {
                pergunta: 'Como posso cadastrar meu objeto?',
                resposta: 'Bdl aksl skaidha skdjhaksdhaj kdhalisdhadh.',
            },
            {
                pergunta: 'Como contatar o usuário?',
                resposta: 'Bdl aksl skaidha skdjhaksdhaj kdhalisdhadh.',
            },
            {
                pergunta: 'Achei meu objeto, e agora?',
                resposta: 'Bdl aksl skaidha skdjhaksdhaj kdhalisdhadh.',
            },
        ]
    }

    localStorage.setItem('faq', JSON.stringify(faq))

    return faq
}

/* API (CRUD) objetos */
function cadastrarObjeto() {}
function listarObjetos() {}
function listarObjeto(id) {}
function filtrarObjetos(filtro) {}
function atualizarObjeto(id) {}
function excluirObjeto(id) {}

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

function listarUsuarios() {}
function atualizarUsuario(username) {}
function excluirUsuario(username) {}

function loginUsuario(usuario) {
    let usuarioCadastrado = usuarios.find((usuarioCadastrado) => {
        if (
            usuario.username === usuarioCadastrado.usuario &&
            usuario.password === usuarioCadastrado.senha
        )
            return usuarioCadastrado
    })

    return usuarioCadastrado ? usuarioCadastrado : false
}

async function buscarEndereco(cep) {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    return await res.json()
}

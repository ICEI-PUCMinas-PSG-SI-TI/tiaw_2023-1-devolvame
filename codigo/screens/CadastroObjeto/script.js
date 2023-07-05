const inputNomeObjeto = document.getElementById('nomeObjeto')

const selectCategoria = document.getElementById('categoria')

const selectBloco = document.getElementById('bloco')

const inputDescricao = document.getElementById('descricao')

const inputData = document.getElementById('data')

const inputSala = document.getElementById('sala')

var listaObjetos = []

function cadastrar() {
    let old_objects = JSON.parse(localStorage.getItem('objeto'))
    let objetoId = JSON.parse(localStorage.getItem('objetoId'))
    let quemEncontrou = localStorage.getItem('userLogged')

    if (old_objects) {
        old_objects.forEach((object) => {
            listaObjetos.push(object)
        })
    }

    let objeto = {
        id: objetoId,
        nome: inputNomeObjeto.value,
        descricao: inputDescricao.value,
        categoria: selectCategoria.value,
        quemEncontrou,
        bloco: selectBloco.value,
        sala: inputSala.value,
        data: inputData.value,
    }

    listaObjetos.push(objeto)

    localStorage.setItem('objeto', JSON.stringify(listaObjetos))
    localStorage.setItem('objetoId', objetoId + 1)

    window.location.href = '../Listagem/index.html'
}

function handleUsuarioConnected() {
    const header = document.querySelector('header')
    const isLogged = JSON.parse(localStorage.getItem('isLogged'))

    if (!isLogged) {
        window.location.href = '../Home/index.html'
    } else {
        header.innerHTML += `                        <div>
        <a href="../PerfilUsuario/index.html">
            <button>Perfil</button>
        </a>
        <a onclick="handleSignOut(event)">
            <button>
                <i class="fa-solid fa-right-from-bracket"></i>
            </button>
        </a>
    </div>`
    }
}

window.onload = () => {
    handleUsuarioConnected()
}

function handleSignOut(event) {
    event.preventDefault()

    localStorage.setItem('isLogged', false)
    alert('Deslogado com sucesso!')
    window.location.href = '../Home/index.html'
}

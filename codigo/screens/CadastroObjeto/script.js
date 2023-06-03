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
    const isLogged = JSON.parse(localStorage.getItem('isLogged'))

    if (!isLogged) {
        window.location.href = './screens/Home/index.html'
    }
}

window.onload = () => {
    handleUsuarioConnected()
}

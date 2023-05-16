const inputNomeObjeto = document.getElementById("nomeObjeto")

const selectCategoria = document.getElementById("categoria")

const selectBloco = document.getElementById("bloco")

const inputDescricao = document.getElementById("descricao")

const inputData = document.getElementById("data")


var listaObjetos = []

function cadastrar(){

    let objeto = {
        nome:  inputNomeObjeto.value,
        descricao: inputDescricao.value,
        categoria: selectCategoria.value,
        bloco: selectBloco.value,
        data: inputData.value
    }
    listaObjetos.push(objeto)

    localStorage.setItem("objeto", JSON.stringify(listaObjetos))
   
}

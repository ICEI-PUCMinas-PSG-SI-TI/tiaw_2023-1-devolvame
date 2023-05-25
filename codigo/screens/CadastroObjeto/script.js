const inputNomeObjeto = document.getElementById("nomeObjeto")

const selectCategoria = document.getElementById("categoria")

const selectBloco = document.getElementById("bloco")

const inputDescricao = document.getElementById("descricao")

const inputData = document.getElementById("data")


var listaObjetos = []

function cadastrar(){
    let old_objects = JSON.parse(localStorage.getItem("objeto"))

    if(old_objects){
        old_objects.forEach(object => {
            listaObjetos.push(object);
        });
    }

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

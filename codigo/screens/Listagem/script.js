const filterButton = document.querySelector('.filter-button')
const filterContainer = document.querySelector('.filter-container')
const contatoButton = document.getElementsByClassName('contato-button')

const objectsContainer = document.querySelector('.list-container')

function handleOpenFilterContainer(e) {
    if (
        filterContainer.style.display === 'none' ||
        !filterContainer.style.display
    ) {
        filterContainer.style.display = 'flex'
    } else {
        filterContainer.style.display = 'none'
    }
}

function handleClickContatoButton(id) {
    window.location.href = '../ContatoObjeto/index.html?id=' + id
}

filterButton.addEventListener('click', handleOpenFilterContainer)

function handleListObjetos() {
    const objects = JSON.parse(localStorage.getItem('objeto'))

    if (!objects) {
        let emptyListHtml = `<div class="empty-list-container">
                                <i class="fa-solid fa-handshake-slash"></i>
                                <h3>Sem objetos cadastrados!</h3>
                            </div>`

        objectsContainer.innerHTML += emptyListHtml

        return
    }

    let objetosHTML = ''

    objects.forEach((objeto) => {
        let objetoCard = `<div class="object-card">
                        <div class="image-container">
                            <img src=${objeto.imagem ?? '../../imagens/sem-foto.gif'
            }
                                alt="Imagem do objeto" />
                        </div>
                        <div class="details">
                            <div class="title-container">
                                <h3>${objeto.nome}</h3>
                                <span>Encontrado por Usuario123</span>
                            </div>

                            <div class="info">
                                <div class="row">
                                    <div class="icon-container">
                                        <i class="fa-solid fa-layer-group"></i>
                                    </div>
                                    <span>${objeto.categoria}</span>
                                </div>
                                <div class="row">
                                    <div class="icon-container">
                                        <i class="fa-solid fa-location-dot"></i>
                                    </div>
                                    <span>Bloco ${objeto.bloco} - ${objeto.sala
            }</span>
                                </div>
                                <div class="row">
                                    <div class="icon-container">
                                        <i class="fa-solid fa-clock"></i>
                                    </div>
                                    <span>${objeto.data}</span>
                                </div>
                            </div>

                            <button onclick="handleClickContatoButton(${objeto.id
            })" class="contato-button">
                                Contato <i class="fa-solid fa-phone"></i>
                            </button>
                        </div>
                    </div>`
        objetosHTML += objetoCard
    })

    objectsContainer.innerHTML += objetosHTML
}

window.onload = () => {
    handleListObjetos()
}




//BABI

function filtraPorOpcoes(categoriaSelecionada, blocoSelecionado, nomeBusca){

    const objetos = JSON.parse(localStorage.getItem("objeto"));

    arrayFiltrado = objetos.filter(objeto => {

        if(categoriaSelecionada != '' && objeto.categoria != categoriaSelecionada){
            return false;
        }

        if(blocoSelecionado != '' && objeto.bloco.toLowerCase() != blocoSelecionado){
            return false;
        }

        if(nomeBusca.toLowerCase() != '' && !objeto.nome.toLowerCase().includes(nomeBusca)){
            return false;
        }
        return true;
    });

    if(arrayFiltrado.length == 0){
        alert('Nenhum objeto encontrado com essas opções!');
    }else{
        objetosHTML = '';
        arrayFiltrado.forEach((objeto) => {
            let objetoCard = `<div class="object-card">
                            <div class="image-container">
                                <img src=${objeto.imagem ?? '../../imagens/sem-foto.gif'
                }
                                    alt="Imagem do objeto" />
                            </div>
                            <div class="details">
                                <div class="title-container">
                                    <h3>${objeto.nome}</h3>
                                    <span>Encontrado por Usuario123</span>
                                </div>
    
                                <div class="info">
                                    <div class="row">
                                        <div class="icon-container">
                                            <i class="fa-solid fa-layer-group"></i>
                                        </div>
                                        <span>${objeto.categoria}</span>
                                    </div>
                                    <div class="row">
                                        <div class="icon-container">
                                            <i class="fa-solid fa-location-dot"></i>
                                        </div>
                                        <span>Bloco ${objeto.bloco} - ${objeto.sala
                }</span>
                                    </div>
                                    <div class="row">
                                        <div class="icon-container">
                                            <i class="fa-solid fa-clock"></i>
                                        </div>
                                        <span>${objeto.data}</span>
                                    </div>
                                </div>
    
                                <button onclick="handleClickContatoButton(${objeto.id
                })" class="contato-button">
                                    Contato <i class="fa-solid fa-phone"></i>
                                </button>
                            </div>
                        </div>`
            objetosHTML += objetoCard
        })    
        objectsContainer.innerHTML = objetosHTML;
    }
}

function filtrar() {
    document.getElementById("btn-limpar").disabled=false

    const categoriaSelecionada = document.getElementById('categoria').value;
    const blocoSelecionado = document.getElementById('bloco').value;
    const nomeBusca = document.getElementById('minhabusca').value;

    if(categoriaSelecionada == '' && blocoSelecionado == '' && nomeBusca == ''){
        alert("Selecione ao menos das opções de filtro");
    }else{
        filtraPorOpcoes(categoriaSelecionada, blocoSelecionado, nomeBusca);
    }   
}

//BABI - funcao limpar filtro

function limparFiltro() {  
    objectsContainer.innerHTML="";
    document.getElementById("btn-limpar").disabled=true

    handleListObjetos();
    const categoriaSelecionada = document.getElementById('categoria');
    const blocoSelecionado = document.getElementById('bloco');
    const nomeBusca = document.getElementById('minhabusca');
   
    categoriaSelecionada.selectedIndex=0;
    blocoSelecionado.selectedIndex=0;
    nomeBusca.value='';
    
}
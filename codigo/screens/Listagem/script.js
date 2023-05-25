const filterButton = document.querySelector(".filter-button");
const filterContainer = document.querySelector(".filter-container");
const contatoButton = document.getElementsByClassName("contato-button");

const objectsContainer = document.querySelector(".list-container");

function handleOpenFilterContainer(e) {
  if (filterContainer.style.display === "none" || !filterContainer.style.display) {
    filterContainer.style.display = "flex";
  } else {
    filterContainer.style.display = "none";
  }
}

function handleClickContatoButton(e) {
  window.location.href = "../ContatoObjeto/index.html"
}

filterButton.addEventListener("click", handleOpenFilterContainer)

// adiciona o evento e click em todos os botoes
for (let i = 0; i < contatoButton.length; i++) {
  contatoButton[i].addEventListener("click", handleClickContatoButton)
}

async function handleListObjetos(){
  const objects = JSON.parse(localStorage.getItem("objeto"))

  if(!objects){
    // adicionar a tela de lista vazia

    return
  }

  let objetosHTML = "";

  objects.forEach(objeto => {
    let objetoCard = `<div class="object-card">
                        <div class="image-container">
                            <img src="https://images.tcdn.com.br/img/img_prod/548537/garrafa_termica_flip_straw_stanley_651ml_lagoon_18209_1_defa16f920ee19d390a80cf7ae7d042b_20230301162446.jpg"
                                alt="" />
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
                                    <span>Bloco ${objeto.bloco} - Sala 101</span>
                                </div>
                                <div class="row">
                                    <div class="icon-container">
                                        <i class="fa-solid fa-clock"></i>
                                    </div>
                                    <span>${objeto.data}</span>
                                </div>
                            </div>

                            <button class="contato-button">
                                Contato <i class="fa-solid fa-phone"></i>
                            </button>
                        </div>
                    </div>`

          objetosHTML += objetoCard;
  });

  objectsContainer.innerHTML += objetosHTML;

}

window.onload = () => {
  handleListObjetos()
}
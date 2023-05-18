const filterButton = document.querySelector(".filter-button");
const filterContainer = document.querySelector(".filter-container");
const contatoButton = document.getElementsByClassName("contato-button");

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
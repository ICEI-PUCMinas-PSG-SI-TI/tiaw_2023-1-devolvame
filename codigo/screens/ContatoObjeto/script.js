const filterButton = document.querySelector(".filter-button");
const filterContainer = document.querySelector(".filter-container");

function handleOpenFilterContainer(e){
    if(filterContainer.style.display === "none" || !filterContainer.style.display) {
        filterContainer.style.display = "flex";
    } else {
      filterContainer.style.display = "none";
  }
}

filterButton.addEventListener("click", handleOpenFilterContainer)
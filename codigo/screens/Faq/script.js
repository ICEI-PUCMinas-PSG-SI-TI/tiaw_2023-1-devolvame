//VALIDAÇÃO DA BUSCA 

document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    var searchInput = document.getElementById('busca').value.toLowerCase();
    var items = document.querySelectorAll('.item');

    items.forEach(function (item) {
        var title = item.querySelector('.title').textContent.toLowerCase();
        var content = item.querySelector('.content').textContent.toLowerCase();

        if (title.includes(searchInput) || content.includes(searchInput)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
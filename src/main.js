function loadPage(page) {
    let content = document.getElementById('main-content');
    let loader = document.getElementById('loader');

    content.classList.add('loading');
    loader.classList.add('active');

    setTimeout(() => {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
                content.classList.remove('loading');
                loader.classList.remove('active');
            })
            .catch(error => {
                console.error('Error cargando la página:', error);
                content.innerHTML = "<h1>Error al cargar la página</h1>";
                content.classList.remove('loading');
                loader.classList.remove('active');
            });
    }, 500);
}

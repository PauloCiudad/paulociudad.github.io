function loadPage(page) {
    let content = document.getElementById('main-content');
    let loader = document.getElementById('loader');

    // Oculta el contenido y muestra el loader
    content.classList.add('loading');
    loader.classList.add('active');

    setTimeout(() => {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
                content.classList.remove('loading'); // Vuelve a mostrar el contenido
                loader.classList.remove('active'); // Oculta el loader
            })
            .catch(error => {
                console.error('Error cargando la página:', error);
                content.innerHTML = "<h1>Error al cargar la página</h1>";
                content.classList.remove('loading');
                loader.classList.remove('active');
            });
    }, 500); // Simula un pequeño retraso para la animación
}

const carruselItems = document.querySelectorAll('.carrusel-item');
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');
let index = 0;

function mostrarItem(index) {
    carruselItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

btnAnterior.addEventListener('click', () => {
    index = (index - 1 + carruselItems.length) % carruselItems.length;
    mostrarItem(index);
});

btnSiguiente.addEventListener('click', () => {
    index = (index + 1) % carruselItems.length;
    mostrarItem(index);
});

// Mostrar el primer elemento al cargar la página
mostrarItem(index);

document.getElementById("menu-toggle").addEventListener("click", function () {
    var mainNav = document.getElementById("main-nav");
    var overlay = document.getElementById("overlay");
    this.classList.toggle("active");
    if (mainNav.style.display === "block") {
        mainNav.style.display = "none";
        overlay.style.display = "none"; // Oculta la capa semitransparente
    } else {
        mainNav.style.display = "block";
        overlay.style.display = "block"; // Muestra la capa semitransparente
    }
});


const carruselItems = document.querySelectorAll('.carrusel-item');
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');
let index = 0;
let intervalId; // Variable para almacenar el intervalo de cambio automático

function mostrarItem(index) {
    carruselItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function cambiarImagenSiguiente() {
    index = (index + 1) % carruselItems.length;
    mostrarItem(index);
}

function cambiarImagenAnterior() {
    index = (index - 1 + carruselItems.length) % carruselItems.length;
    mostrarItem(index);
}

btnAnterior.addEventListener('click', () => {
    cambiarImagenAnterior();
});

btnSiguiente.addEventListener('click', () => {
    cambiarImagenSiguiente();
});

// Mostrar el primer elemento al cargar la página
mostrarItem(index);

// Agregar eventos de mouse para mostrar/ocultar las flechas al pasar el puntero
const carrusel = document.querySelector('.carrusel');

carrusel.addEventListener('mouseenter', () => {
    btnAnterior.style.display = 'block';
    btnSiguiente.style.display = 'block';
    // Detener el intervalo de cambio automático cuando el puntero está sobre el carrusel
    clearInterval(intervalId);
});

carrusel.addEventListener('mouseleave', () => {
    btnAnterior.style.display = 'none';
    btnSiguiente.style.display = 'none';
    // Reanudar el intervalo de cambio automático cuando el puntero se retira del carrusel
    iniciarIntervalo();
});

// Función para iniciar el intervalo de cambio automático cada 5 segundos
function iniciarIntervalo() {
    intervalId = setInterval(cambiarImagenSiguiente, 5000);
}

// Iniciar el intervalo de cambio automático al cargar la página
iniciarIntervalo();;

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

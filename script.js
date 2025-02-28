// Función para redirigir a la página de aceptación (para el botón Yes)
function nextPage() {
    window.location.href = "yes.html";
}

// Función para mover el botón "No" en PC al pasar el mouse
function moveButton() {
    const noButton = document.getElementById("noButton");
    // Se asegura que el botón tenga posición absoluta para poder moverlo
    noButton.style.position = "absolute";
    noButton.style.top = Math.random() * (window.innerHeight - noButton.offsetHeight) + "px";
    noButton.style.left = Math.random() * (window.innerWidth - noButton.offsetWidth) + "px";

    // Agrega una animación de 'wiggle' (definida en CSS)
    noButton.classList.add("wiggle");
    setTimeout(() => {
        noButton.classList.remove("wiggle");
    }, 500);
}

// Variable para contar cuántas veces se ha presionado el botón "No" en móvil
let noPressCount = 0;

// Función para detectar si estamos en un dispositivo móvil
function isMobile() {
    return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
}

// Función para agrandar el botón "Yes" en móvil al presionar el botón "No"
function increaseYesButton() {
    const yesButton = document.getElementById("yesButton");
    noPressCount++;

    // Obtener el valor actual de escala, si no existe se toma 1
    let currentScale = parseFloat(yesButton.getAttribute("data-scale")) || 1;
    // Incrementar la escala en 0.5 por cada toque
    let newScale = currentScale + 0.5;
    yesButton.style.transform = "scale(" + newScale + ")";
    yesButton.setAttribute("data-scale", newScale);

    // Si se ha presionado 3 veces, cambiar el encabezado y ocultar el botón "No"
    if (noPressCount >= 3) {
        const header = document.querySelector(".header_text");
        header.textContent = "SEGURA?!";
        const noButton = document.getElementById("noButton");
        noButton.style.display = "none";
    }
}

// Al cargarse el DOM, ajustamos el comportamiento según el dispositivo
document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("noButton");
    if (isMobile()) {
        // En dispositivos móviles, eliminamos el comportamiento de "onmouseover"
        noButton.removeAttribute("onmouseover");
        // Y añadimos el evento 'click' para incrementar el botón "Yes"
        noButton.addEventListener("click", increaseYesButton);
    }
});

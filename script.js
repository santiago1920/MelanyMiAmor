// Función para redirigir a la página de aceptación
function nextPage() {
    window.location.href = "yes.html";  // Asegúrate de que el nombre del archivo es correcto
}

// Función para mover el botón "No" a una posición aleatoria
function moveButton() {
    const noButton = document.getElementById("noButton");
    // Aseguramos que el botón tenga posicionamiento absoluto para poder moverlo
    noButton.style.position = "absolute";
    noButton.style.top = Math.random() * (window.innerHeight - noButton.offsetHeight) + "px";
    noButton.style.left = Math.random() * (window.innerWidth - noButton.offsetWidth) + "px";

    // Opcional: Agregar una animación al botón
    noButton.classList.add("wiggle");
    // Remover la clase después de que la animación finalice para permitir futuras animaciones
    setTimeout(() => {
        noButton.classList.remove("wiggle");
    }, 500);
}

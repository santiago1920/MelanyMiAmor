// Funci�n para redirigir a la p�gina de aceptaci�n
function nextPage() {
    window.location.href = "yes.html";  // Aseg�rate de que el nombre del archivo es correcto
}

// Funci�n para mover el bot�n "No" a una posici�n aleatoria
function moveButton() {
    const noButton = document.getElementById("noButton");
    // Aseguramos que el bot�n tenga posicionamiento absoluto para poder moverlo
    noButton.style.position = "absolute";
    noButton.style.top = Math.random() * (window.innerHeight - noButton.offsetHeight) + "px";
    noButton.style.left = Math.random() * (window.innerWidth - noButton.offsetWidth) + "px";

    // Opcional: Agregar una animaci�n al bot�n
    noButton.classList.add("wiggle");
    // Remover la clase despu�s de que la animaci�n finalice para permitir futuras animaciones
    setTimeout(() => {
        noButton.classList.remove("wiggle");
    }, 500);
}

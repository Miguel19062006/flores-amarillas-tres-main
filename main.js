onload = () => {
    document.body.classList.remove("container");
};

// Control para mostrar y ocultar la tarjeta de mensaje con el botón
document.addEventListener("DOMContentLoaded", () => {
    const btnCarta = document.getElementById("btn-mensaje");
    const modal = document.getElementById("mensaje-modal");
    const cerrarModal = document.querySelector(".cerrar-modal");

    if (btnCarta && modal) {
        btnCarta.addEventListener("click", () => {
            modal.style.pointerEvents = "auto";
            modal.style.opacity = "1";
        });

        const closeModalFunc = () => {
            modal.style.opacity = "0";
            modal.style.pointerEvents = "none";
        };

        if (cerrarModal) {
            cerrarModal.addEventListener("click", closeModalFunc);
        }

        // Cierra el modal si hace clic fuera de la caja de contenido
        modal.style.pointerEvents = "none";
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeModalFunc();
            }
        });
    }
});
function initPostulacionesPendientesAdmin() {

    let divPostulacionesPendientes = document.querySelector("#divPostulacionesPendientes");

    let pPostulacionesPendientes = document.querySelector("#pPostulacionesPendientes");

    let btnVolverMenuAdmin3 = document.querySelector("#btnVolverMenuAdmin3");


    mostrarPostulacionesPendientes();

    btnVolverMenuAdmin3.addEventListener("click", volverAdmin);
}

function volverAdmin() {
    irA("view-admin", initAdmin);
}

function mostrarPostulacionesPendientes() {

}
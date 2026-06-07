// misma funcion para iniciar las pantallas que use en el login y registro pero aca , basicamente copiar y pegar 

function initAdmin() {
    let pBienvenidaAdmin = document.querySelector("#pBienvenidaAdmin");
    let btnCrearOferta = document.querySelector("#btnCrearOferta");
    let btnCerrarSesionAdmin = document.querySelector("#btnCerrarSesionAdmin");
    let btnListadoOfertasAdmin = document.querySelector("#btnVerListadoOfertasAdmin");
    let btnPostulacionesPendientesAdmin = document.querySelector("#btnVerPostulacionesPendientes");
    let Estadísticas = document.querySelector("#btnVerEstadisticasAdmin");

    pBienvenidaAdmin.innerHTML = "Bienvenido/a " + sistema.usuarioLogueado.nombre;

    btnListadoOfertasAdmin.addEventListener("click", listadoOfertasAdmin);
    btnPostulacionesPendientesAdmin.addEventListener("click", postulacionesPendientesAdmin);
    Estadísticas.addEventListener("click", estadisticas);

    btnCrearOferta.addEventListener("click", crearOferta);
    btnCerrarSesionAdmin.addEventListener("click", cerrarSesionAdmin);
}

function cerrarSesionAdmin() {
    sistema.cerrarSesion();
    irA("view-login", initLogin);
}

function crearOferta(){
     irA("view-crear-oferta", initCrearOferta);
}

function listadoOfertasAdmin (){
     irA("view-listado-ofertas-admin", initListadoOfertasAdmin);
}

function postulacionesPendientesAdmin (){
     irA("view-postulaciones-pendientes", initPostulacionesPendientesAdmin);

}

function estadisticas (){
     irA("view-estadisticas-admin", initEstadistica);

}

//volver a null en sistema  y luego llamar a la funcion sistema .
//despues llamaria a la funcion cerrar sesion y estamos .
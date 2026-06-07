
function initPostulante(){
    let pBienvenidaPostulante = document.querySelector("#pBienvenidaPostulante");
    let btnVerOfertas = document.querySelector("#btnVerOfertas");
    let btnVerMisPostulaciones = document.querySelector("#btnVerMisPostulaciones");
    let btnVerOfertasDestacadas = document.querySelector("#btnVerOfertasDestacadas");
    let btnCerrarSesionPostulante = document.querySelector("#btnCerrarSesionPostulante"); 

    pBienvenidaAdmin.innerHTML =
    "Bienvenido/a " + sistema.usuarioLogueado.nombre;

    btnCerrarSesionPostulante.addEventListener("click", cerrarSesionPostulante);
    
    
}

function cerrarSesionPostulante() {
    sistema.cerrarSesion();
    irA("view-login", initLogin);
}

function verOfertas() {
    irA("view-ofertas-postulante", initOfertasPostulante);
}

function verMisPostulaciones() {
    irA("view-mis-postulaciones", initMisPostulaciones);
}

function verOfertasDestacadas() {
    irA("view-ofertas-destacadas", initOfertasDestacadas);
}
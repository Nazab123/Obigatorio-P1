// misma funcion para iniciar las pantallas que use en el login y registro pero aca , basicamente copiar y pegar 

function initAdmin() {
    let pBienvenidaAdmin = document.querySelector("#pBienvenidaAdmin");
    let btnCerrarSesionAdmin = document.querySelector("#btnCerrarSesionAdmin");

    pBienvenidaAdmin.innerHTML =
        "Bienvenido/a " + sistema.usuarioLogueado.nombre;

    btnCerrarSesionAdmin.addEventListener("click", cerrarSesionAdmin);
}

function cerrarSesionAdmin() {
    sistema.usuarioLogueado = null;
    irA("view-login", initLogin);
}

//crear una funcion para cerrar sesion .
//volver a null en sistema  y luego llamar a la funcion sistema .
//despues llamaria a la funcion cerrar sesion y estamos .
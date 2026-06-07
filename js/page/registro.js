//aca va la misma funcion que en el login , para la inicialicacion de los botones en el template que llamamos con la funcion isA( conectar eventos )



function initRegistro() {
    let btnRegistrar = document.querySelector("#btnRegistrar");
    let btnVolverLogin = document.querySelector("#btnVolverLogin");

    btnRegistrar.addEventListener("click", registrarPostulante);
    btnVolverLogin.addEventListener("click", irLogin);
}

/* esta funcion va por mientras */
function registrarPostulante() {
    console.log("registrar postulante funcionando");
}

/* vuelve al template de login con los parametros, de la funcion irA */
function irLogin() {
    irA("view-login", initLogin);
}

/*  */
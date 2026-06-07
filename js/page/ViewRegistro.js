//aca va la misma funcion que en el login , para la inicialicacion de los botones en el template que llamamos con la funcion isA( conectar eventos )

function initRegistro() {
    let btnRegistrar = document.querySelector("#btnRegistrar");
    let btnVolverLogin = document.querySelector("#btnVolverLogin");

    btnRegistrar.addEventListener("click", registrarPostulante);
    btnVolverLogin.addEventListener("click", irLogin);
}


// Lee los datos del formulario y se los pasa al Sistema.
// La validación real y el push al array se hacen en sistema.js.
function registrarPostulante() {
    let usuario = document.querySelector("#txtUsuario").value.trim().toLowerCase();
    let password = document.querySelector("#txtPassword").value;
    let nombre = document.querySelector("#txtNombre").value.trim();
    let experiencia = document.querySelector("#slcExperiencia").value;
    let area = document.querySelector("#slcArea").value;
    let pResultado = document.querySelector("#pResultado");

    let respuesta = sistema.registrarPostulante(
        usuario,
        password,
        nombre,
        experiencia,
        area
    );

    pResultado.innerHTML = respuesta;
}

/* vuelve al template de login con los parametros, de la funcion irA */
function irLogin() {
    irA("view-login", initLogin);
}

/* Movi la funcion de registrar postulantes de main para este archivo  */

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
    if (respuesta === "registro procesado") {
        irLogin();
}

}
/* vuelve al template de login con los parametros, de la funcion irA */
function irLogin() {
    irA("view-login", initLogin);
}


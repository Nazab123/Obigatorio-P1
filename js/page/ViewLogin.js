
function initLogin() {
    let btnLogin = document.querySelector("#btnLogin");
    let btnIrRegistro = document.querySelector("#btnIrRegistro");

    btnLogin.addEventListener("click", login);
    btnIrRegistro.addEventListener("click", irRegistro);
}


function login() {

    let usuario = document.querySelector("#txtUsuarioLogin").value.trim().toLowerCase();
    let password = document.querySelector("#txtPasswordLogin").value;
    let pLogin = document.querySelector("#pLogin");

    let respuesta = sistema.login(usuario, password);
    if (respuesta) {
        if (sistema.getTipoUser() === "Admin") {
            irA("view-table-ofertas-admin", initListadoOfertasAdmin);
        } else {
            irA("view-ofertas-postulante", initOfertasPostulante);
        }
    } else {
        pLogin.innerHTML = "Usuario y/o contraseña incorrecta";
    }
   

}

function irRegistro() {
    irA("view-registro", initRegistro);
}


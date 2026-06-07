//aca va la funcion de inicio de login , al conectarla con la funcion irA  recien ahi existen los botones dentro de la pagina , esto es importante naza porque si no generamos esta funcion nos daria null ya que con el template nosotros creamos la pantalla "guardada"



function initLogin() {
    let btnLogin = document.querySelector("#btnLogin");
    let btnIrRegistro = document.querySelector("#btnIrRegistro");

    btnLogin.addEventListener("click", login);
    btnIrRegistro.addEventListener("click", irRegistro);
}

/* LOGIN NASHEE */
/*
Antes esto  estaba en main.
*/
function login() {
    console.log("entre al login");

    let usuario = document.querySelector("#txtUsuarioLogin").value.trim().toLowerCase();
    let password = document.querySelector("#txtPasswordLogin").value;

    let pLogin = document.querySelector("#pLogin");

    let respuesta = sistema.login(usuario, password);
    console.log("respuesta", respuesta);

    pLogin.innerHTML = respuesta;

    //condiciones para navegar a las paginas de admin 
    if (respuesta.tipo === "admin") {
    irA("view-admin", initAdmin);
}

if (respuesta.tipo === "postulante") {
    irA("view-postulante", initPostulante);
}
} 

function irRegistro() {
    irA("view-registro", initRegistro);
}


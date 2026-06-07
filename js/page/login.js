//aca va la funcion de inicio de login , al conectarla con la funcion irA  recien ahi existen los botones dentro de la pagina , esto es importante naza porque si no generamos esta funcion nos daria null ya que con el template nosotros creamos la pantalla "guardada"



function initLogin() {
    let btnLogin = document.querySelector("#btnLogin");
    let btnIrRegistro = document.querySelector("#btnIrRegistro");

    btnLogin.addEventListener("click", login);
    btnIrRegistro.addEventListener("click", irRegistro);
}

/*  */

function irRegistro() {
    irA("view-registro", initRegistro);
}


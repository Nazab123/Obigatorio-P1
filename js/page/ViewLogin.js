//aca va la funcion de inicio de login , al conectarla con la funcion irA  recien ahi existen los botones dentro de la pagina , esto es importante naza porque si no generamos esta funcion nos daria null ya que con el template nosotros creamos la pantalla "guardada"



function initLogin() {
    let btnLogin = document.querySelector("#btnLogin");
    let btnIrRegistro = document.querySelector("#btnIrRegistro");

    btnLogin.addEventListener("click", login);
    btnIrRegistro.addEventListener("click", irRegistro);
}

/*Antes esto  estaba en main.*/
function login() {

    let usuario = document.querySelector("#txtUsuarioLogin").value.trim().toLowerCase();
    let password = document.querySelector("#txtPasswordLogin").value;
    let pLogin = document.querySelector("#pLogin");

    let respuesta = sistema.login(usuario, password);
    if(respuesta ){
        if(sistema.getTipoUser() === "Admin"){
              irA("view-admin", initAdmin);
        }else{
             irA("view-postulante", initPostulante);
        }
    }else{
         pLogin.innerHTML = "Usuario y/o contraseña incorrecta";
    }
    //modifique esto.

} 

function irRegistro() {
    irA("view-registro", initRegistro);
}


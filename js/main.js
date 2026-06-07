
/* Nazita pase todo lo que hace contacto con el html para estar en el main , ya que como vimos la clase anterior el main  */

/* //interfaz de registro elemento del HTML
let volver = document.querySelector("#btnVolverLogin");
let resultadoLog = document.querySelector("#pResultado");
let registrar = document.querySelector("#btnRegistrar");
let btnIniciarSesion = document.querySelector("#btnLogin");


let btnCerrarSesionPostulante = document.querySelector("#btnCerrarSesionPostulante");
let btnCerrarSesionAdmin = document.querySelector("#btnCerrarSesionAdmin");
 */
//LOGIN
/* ---------------------------------------------------------------------- */
function login() {

   /*  let txtUsuarioLogin = document.querySelector("#txtUsuarioLogin").value.toLowerCase().trim();
    let txtPasswordLogin = document.querySelector("#txtPasswordLogin").value;
    let PResultadoLogin = document.querySelector("#pLogin");
    let respuestaLogin = "";



    

/* miS.Login(txtUsuarioLogin, txtPasswordLogin);
esta es la funcion del loguin que le pasas los parametros de usuario y contraseña que el profe me dijo que va en sistemas 
*/
   //validaciones del login van aca , esto es para validar el login y mostrar la pantalla correspondiente a cada usuario
  
  // PResultadoLogin.innerHTML = respuestaLogin;// Esto es para mostrar el resultado  pero esto  va aca . todo de aca para arriba va en el sistemas pero ya lo sabia .
}
//hasta aca eso va en el sistema .
// Todos aca porque son elementos del html o que tocan el html mejor dicho .
/* ---------------------------------------------------------------------- */




//REGISTRO
// el profe dijo que quería que se fueran sumando los errores es decir que si tiene todos los errores que pe aparezcan todos los mensajes de error

/* function registrarPostulante() {

    let respuesta = "";
    // case insensitive
    let usuario = document.querySelector("#txtUsuario").value.trim().toLowerCase();

    // case sensitive
    let password = document.querySelector("#txtPassword").value;

    let nombre = document.querySelector("#txtNombre").value.trim();
    let experiencia = document.querySelector("#slcExperiencia").value;
    let area = document.querySelector("#slcArea").value;
    

    resultadoLog.innerHTML = respuesta;

} */



//PANTALLAS
/* function mostrarPantalla(idPantalla) {
    for (let i = 0; i < pantallas.length; i++) {
        pantallas[i].style.display = "none";
    }

    document.querySelector("#" + idPantalla).style.display = "block";
}
 */

// Nazita
// osea no tiene mucha ciencia pero ta jajaj son funciones para el ir a las "pantallas" pongamosle .
/* function irRegistro() {
    mostrarPantalla("pantallaRegistro");
} */

/* function irLogin() {
    mostrarPantalla("pantallaLogin");
} */

//EVENTOS
/* registrar.addEventListener("click", registrarPostulante);
btnIniciarSesion.addEventListener("click", login);


btnIrRegistro.addEventListener("click", irRegistro);
volver.addEventListener("click", irLogin);

btnCerrarSesionPostulante.addEventListener("click", irLogin);
btnCerrarSesionAdmin.addEventListener("click", irLogin);
 */






//MOSTRAR PANTALLA DE LOGIN INICIAL .
irA("view-login", initLogin);
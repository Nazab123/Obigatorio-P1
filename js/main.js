
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


   /*  let txtUsuarioLogin = document.querySelector("#txtUsuarioLogin").value.toLowerCase().trim();
    let txtPasswordLogin = document.querySelector("#txtPasswordLogin").value;
    let PResultadoLogin = document.querySelector("#pLogin");
    let respuestaLogin = "";



    

/* miS.Login(txtUsuarioLogin, txtPasswordLogin);
esta es la funcion del loguin que le pasas los parametros de usuario y contraseña que el profe me dijo que va en sistemas 
*/
   //validaciones del login van aca , esto es para validar el login y mostrar la pantalla correspondiente a cada usuario
  
  // PResultadoLogin.innerHTML = respuestaLogin;// Esto es para mostrar el resultado  pero esto  va aca . todo de aca para arriba va en el sistemas pero ya lo sabia .

//hasta aca eso va en el sistema .
// Todos aca porque son elementos del html o que tocan el html mejor dicho .
/* ---------------------------------------------------------------------- */

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

let sistema = new Sistema();
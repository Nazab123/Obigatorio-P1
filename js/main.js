
/* Nazita pase todo lo que hace contacto con el html para estar en el main , ya que como vimos la clase anterior el main  */



function login() {

    let txtUsuarioLogin = document.querySelector("#txtUsuarioLogin").value.toLowerCase().trim();
    let txtPasswordLogin = document.querySelector("#txtPasswordLogin").value;
    let PResultadoLogin = document.querySelector("#pLogin");
    let respuestaLogin = "";

    let posicionAdmin = indexOfAdmin(txtUsuarioLogin);
    let posicionPostulante = indexOfPostulante(txtUsuarioLogin);

    // acá valido si es admin o postulante
    if (posicionAdmin !== -1) {

        let adminEncontrado = sistema.admins[posicionAdmin];

        if (adminEncontrado.password === txtPasswordLogin) {
            respuestaLogin = "Login correcto como administrador";
            //aca te voy a agregar para las pantallas 
            mostrarPantalla("pantallaAdmin");
        } else {
            respuestaLogin = "Contraseña incorrecta";
        }
    } else if (posicionAdmin === -1 && posicionPostulante !== -1) {

        let postulanteEncontrado = sistema.postulantes[posicionPostulante];

        if (postulanteEncontrado.password === txtPasswordLogin) {
            respuestaLogin = "Login correcto como postulante";
            //aca igual .
            mostrarPantalla("pantallaPostulante");
        } else {
            respuestaLogin = "Contraseña incorrecta";
        }

    } else {
        respuestaLogin = "nao nao";
    }
    PResultadoLogin.innerHTML = respuestaLogin;
}



// podrían ir dentro de Sistema, pero por ahora las dejo acá para no complicar las clases con los metodos .
// Más adelante estas funciones podrían ir dentro de Sistema ( creo yo , verificar con profe o chati )

function indexOfAdmin(txtUsuarioLogin) {

    for (let i = 0; i < sistema.admins.length; i++) {
        let adminActual = sistema.admins[i];

        if (adminActual.usuario === txtUsuarioLogin) {
            return i;
        }
    }

    return -1;
}

function indexOfPostulante(txtUsuarioLogin) {

    for (let i = 0; i < sistema.postulantes.length; i++) {
        let postulanteActual = sistema.postulantes[i];

        if (postulanteActual.usuario === txtUsuarioLogin) {
            return i;
        }
    }

    return -1;
}



// Todos aca porque son elementos del html o que tocan el html mejor dicho .



//interfaz de registro
let volver = document.querySelector("#btnVolverLogin");
let resultadoLog = document.querySelector("#pResultado");
let registrar = document.querySelector("#btnRegistrar");
let btnIniciarSesion = document.querySelector("#btnLogin");



/* ----------------- PANTALLAS  XD ------------ */
//agregue esto que es para la funcion ahora explico mas abajo en otro comentario
// Esto es para mostrar y ocultar los section , en resumen le paso los id de casa section . recorro con el for y si concide pimba lo mueestra 
let pantallas = document.querySelectorAll("section");
let btnIrRegistro = document.querySelector("#btnIrRegistro");



function mostrarPantalla(idPantalla) {
    for (let i = 0; i < pantallas.length; i++) {
        pantallas[i].style.display = "none";
    }

    document.querySelector("#" + idPantalla).style.display = "block";
}





// use esta para guiarme Nazita , igual te explico todo en clase.
registrar.addEventListener("click", registrarPostulante);
btnIniciarSesion.addEventListener("click", login);


btnIrRegistro.addEventListener("click", irRegistro);
volver.addEventListener("click", irLogin);

let btnCerrarSesionPostulante = document.querySelector("#btnCerrarSesionPostulante");
let btnCerrarSesionAdmin = document.querySelector("#btnCerrarSesionAdmin");

btnCerrarSesionPostulante.addEventListener("click", irLogin);
btnCerrarSesionAdmin.addEventListener("click", irLogin);

mostrarPantalla("pantallaLogin");

// Nazita
// osea no tiene mucha ciencia pero ta jajaj son funciones para el ir a las "pantallas" pongamosle .
function irRegistro() {
    mostrarPantalla("pantallaRegistro");
}

function irLogin() {
    mostrarPantalla("pantallaLogin");
}










//validacionesss
// el profe dijo que quería que se fueran sumando los errores es decir que si tiene todos los errores que pe aparezcan todos los mensajes de error

function registrarPostulante() {

    let respuesta = "";
    // case insensitive
    let usuario = document.querySelector("#txtUsuario").value.trim().toLowerCase();

    // case sensitive
    let password = document.querySelector("#txtPassword").value;

    let nombre = document.querySelector("#txtNombre").value.trim();
    let experiencia = document.querySelector("#slcExperiencia").value;
    let area = document.querySelector("#slcArea").value;
    let resultadoContra = validarContra(password);

    if (usuario === "") {
        respuesta += "el usuario no debe estar vacio<br>";

    } if (usuario.length < 5) {
        respuesta += "el usuario debe tener al menos 5 caracteres<br>";

    } if (password === "") {
        respuesta += "la contraseña no debe estar vacia<br>";

    } if (password.length < 5) {
        respuesta += "la contraseña debe tener al menos 5 caracteres<br>";

    } if (nombre.length < 5) {
        respuesta += "el nombre debe tener al menos 5 caracteres<br>";

    } if (experiencia === "") {
        respuesta += "seleccione una opcion de experiencia<br>";

    } if (area === "") {
        respuesta += "seleccione una opcion de area<br>";

    } if (indexOfAdmin(usuario) !== -1 || indexOfPostulante(usuario) !== -1) {
        respuesta += "el usuario ya existe<br>";

    } if (resultadoContra.contadorNumPas === 0) {
        respuesta += "la contraseña debe tener al menos un numero<br>";

    } if (resultadoContra.tieneMayus === false) {
        respuesta += "la contraseña debe tener al menos una mayuscula<br>";

    } if (resultadoContra.tieneMinus === false) {
        respuesta += "la contraseña debe tener al menos una minuscula<br>";

    }

    if (respuesta === "") {

        let nuevoPostulante = new Postulante(
            usuario,
            password,
            nombre,
            experiencia,
            area
        );

        sistema.postulantes.push(nuevoPostulante);

        respuesta = "registro procesado";
    }

    resultadoLog.innerHTML = respuesta;

}
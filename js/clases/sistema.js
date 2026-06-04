
//acá guardo mis array entonces no le pongo parámetros
// los array siempre van en plural
//no todas las clases tienen que ir en sistema
// las clases si a las otras
//si yo uso un atrivuto privado eso lo declaro antes del constructor
/* 
TODAS LAS CLASES LLEVA ID TODOS ID AUTOINCEMENTAL

no registrar un postulante que ya exista



*/


class Sistema { 
    constructor (){
        this.postulantes = [];
        this.admins = [];
        this.ofertas = [];
        this.postulaciones = [];
    }
}

let sistema = new Sistema();
let admin1 = new Admin("adminrodri", "Rodri123", "Rodri");
let admin2 = new Admin("admingerard", "Gerard123", "El Gerry");
let admin3 = new Admin("adminnaza", "Naza123", "Naza");

//validar precargas por mas que san precargas


sistema.admins.push(admin1);
sistema.admins.push(admin2);
sistema.admins.push(admin3);


/* yo voy a teneer en el main todo lo de html, nada se conecta con el hml menossss el main, las vitas y todo van en el ,ain mi clase sistema habla con el main 
*/

function login (){

    let txtUsuarioLogin = document.querySelector("#txtUsuarioLogin").value.toLowerCase().trim();
    let txtPasswordLogin = document.querySelector("#txtPasswordLogin").value;
    let PResultadoLogin = document.querySelector("#pLogin");
    let respuestaLogin = ""

        let posicionAdmin = indexOfAdmin(txtUsuarioLogin)
        let posicionPostulante = indexOfPostulante(txtUsuarioLogin)

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

    }else {
    respuestaLogin = "nao nao";
    }
    PResultadoLogin.innerHTML = respuestaLogin
}


// acá hago un index of casero para ver si es admin
        function indexOfAdmin(txtUsuarioLogin){

        for(let i = 0; i < sistema.admins.length; i++){
        let adminActual = sistema.admins[i];

        if(adminActual.usuario === txtUsuarioLogin){
            return i;

            }
        }
        return -1
        }

// acá hago un index of  casero para ver si es postulante
        function indexOfPostulante(txtUsuarioLogin){

        for(let i = 0; i < sistema.postulantes.length; i++){
        let postulanteActual = sistema.postulantes[i];

        if(postulanteActual.usuario === txtUsuarioLogin){
            return i;

            }
        }
        return -1
        }



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



function mostrarPantalla(idPantalla){
    for(let i = 0; i< pantallas.length; i++){

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
function irRegistro(){
    mostrarPantalla("pantallaRegistro");
}

function irLogin(){
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

    if (usuario === ""){
        respuesta += "el usuario no debe estar vacio<br>";

    } if(usuario.length < 5){
        respuesta += "el usuario debe tener al menos 5 caracteres<br>";

    } if (password === ""){
        respuesta += "la contraseña no debe estar vacia<br>";

    } if(password.length < 5){
        respuesta += "la contraseña debe tener al menos 5 caracteres<br>";

    } if(nombre.length < 5){
        respuesta += "el nombre debe tener al menos 5 caracteres<br>";

    } if (experiencia === ""){
        respuesta += "seleccione una opcion de experiencia<br>";

    } if (area === ""){
        respuesta += "seleccione una opcion de area<br>";

    } if (indexOfAdmin(usuario) !== -1 || indexOfPostulante(usuario) !== -1){
    respuesta += "el usuario ya existe<br>";

    } if(resultadoContra.contadorNumPas === 0){
    respuesta += "la contraseña debe tener al menos un numero<br>";

    } if(resultadoContra.tieneMayus === false){
    respuesta += "la contraseña debe tener al menos una mayuscula<br>";

    } if(resultadoContra.tieneMinus === false){
    respuesta += "la contraseña debe tener al menos una minuscula<br>";

    }

    if(respuesta === ""){

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

//gerryyy esto lo deje como una funcion afuera para que no quede mezclado con los if, de aca mando un objeto para arriba y lo voy leyendo en los if que corresponden a la contraseña
function validarContra(password) {

let tieneMayus = false;
let tieneMinus = false;
let contadorNumPas = 0;

    for(let i = 0; i < password.length; i++){

        let letra = password.charAt(i);

            
        if(!isNaN(Number(letra))){
            contadorNumPas++;
        }

        if(letra.charCodeAt(0) >= 65 && letra.charCodeAt(0) <= 90){
            tieneMayus = true;
        }

        
        if(letra.charCodeAt(0) >= 97 && letra.charCodeAt(0) <= 122){
            tieneMinus = true;
        }

    }
    return {
    tieneMayus,
    tieneMinus,
    contadorNumPas
    }

    agregarOferta()
    agregarPostulacion()
    buscarAdminPorUsuario()
    buscarPostulantePorUsuario()
    existeUsuario()
    listarOfertasParaPostulante()
    procesarPostulacion()
}
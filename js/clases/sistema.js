
//acá guardo mis array entonces no le pongo parámetros
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

sistema.admins.push(admin1);
sistema.admins.push(admin2);
sistema.admins.push(admin3);

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
        } else {
            respuestaLogin = "Contraseña incorrecta";
        }
    } else if (posicionAdmin === -1 && posicionPostulante !== -1) {

        let postulanteEncontrado = sistema.postulantes[posicionPostulante];

        if (postulanteEncontrado.password === txtPasswordLogin) {
            respuestaLogin = "Login correcto como postulante";
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

registrar.addEventListener("click", registrarPostulante);
btnIniciarSesion.addEventListener("click", login);

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

}
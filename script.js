


//acá guardo mis array entonces no le pongo parámetros
class Sistema { 
    constructor (){
        this.postulantes = [];
        this.admins = [];
        this.ofertas = [];
        this.postulaciones = [];
    }

}

/* 
3 Administradores. 
15 Postulantes (distribuidos en diferentes niveles de experiencia). 
10 Ofertas Laborales (al menos 2 destacadas, con diferentes niveles y 
estados)  
*/ 

//interfaz de registro
let volver = document.querySelector("#btnVolverLogin");
let resultadoLog = document.querySelector("#pResultado");
let registrar = document.querySelector("#btnRegistrar");
let btnIniciarSesion = document.querySelector("#btnLogin");

registrar.addEventListener("click", registrarPostulante);//COMENTARIO DE GERARD :Agregue el add de los botones para ir viendo como va funcionando el codigo que tenemos .
btnIniciarSesion.addEventListener("click", login);

function registrarPostulante() {

    let respuesta = "";
    // case insensitive
    let usuario = document.querySelector("#txtUsuario").value.trim().toLowerCase();

    // case sensitive
    let password = document.querySelector("#txtPassword").value;

    let nombre = document.querySelector("#txtNombre").value.trim();
    let experiencia = document.querySelector("#slcExperiencia").value;
    let area = document.querySelector("#slcArea").value;

    //validacionesss
    // el profe dijo que quería que se fueran sumando los errores es decir que si tiene todos los errores que pe aparezcan todos los mensajes de error
    
    if (usuario === ""){
        respuesta = "el usuario no debe estar vacio";

    } else if(usuario.length < 5){
        respuesta = "el usuario debe tener al menos 5 caracteres";

    } else if (password === ""){
        respuesta = "la contraseña no debe estar vacia";

    } else if(password.length < 5){
        respuesta = "la contraseña debe tener al menos 5 caracteres";

    } else if(nombre.length < 5){
        respuesta = "el nombre debe tener al menos 5 caracteres";

    } else if (experiencia === ""){
        respuesta = "seleccione una opcion de experiencia";

    } else if (area === ""){
        respuesta = "seleccione una opcion de area";

    } else {

        //COMENTARIO GERARD:  aca hice lo de la contraseña .

    let tieneMayus = false;
    let tieneMinus = false;
    let contadorNumPas = 0;
    //Me puse las variables aca porque soy medio autista y esta largo el codigo .

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

        if(contadorNumPas === 0){
            respuesta = "la contraseña debe tener al menos un numero";

        } else if(tieneMayus === false){
            respuesta = "la contraseña debe tener al menos una mayuscula";

        } else if(tieneMinus === false){
            respuesta = "la contraseña debe tener al menos una minuscula";

        } else {
            respuesta = "registro procesado";
        }
    }

    /*
    me faltannn
    ¿usuario ya existe?
    */

    resultadoLog.innerHTML = respuesta;
}

function login (){

    let txtUsuarioLogin = document.querySelector("#txtUsuarioLogin").value;
    let txtPasswordLogin = document.querySelector("#txtPasswordLogin").value;
    let PResultadoLogin = document.querySelector("#pLogin");

    //validar y ver si es postulante o admin


    /*  Los postulantes deberán poder ingresar a la aplicación utilizando su nombre de usuario y su 
    contraseña, recibiendo los avisos de error que correspondan en caso de que las credenciales no sean 
    correctas. Además, deberán contar con la posibilidad de cerrar sesión y, a continuación, iniciar una 
    nueva sesión en caso de que así lo deseen.   
    */
}

class Postulante { 
    
    constructor(usuario, password, nombre, experiencia, area){
        this.usuario = usuario;
        this.password = password;
        this.nombre = nombre;
        this.experiencia = experiencia;
        this.area = area;
    }

}

/* 
Los usuarios con perfil postulante podrán registrarse en el sistema y postularse a ofertas laborales 
publicadas por el administrador.  

Para poder registrarse en el sistema, deberán ingresar su nombre de usuario (único en el sistema, 
case insensitive, no pueden existir el usuario "a" y el usuario "A" en la aplicación y con mínimo 5 
caracteres), una contraseña (mínimo 5 caracteres, incluyendo al menos una mayúscula, una minúscula 
y un número), su nombre completo, su nivel de experiencia (Junior, Semi-Senior o Senior) y su área de 
interés (Tecnología, Diseño, Marketing, Administración u Otros). Todos los datos deberán ser 
obligatorios.  

Los postulantes deberán poder ingresar a la aplicación utilizando su nombre de usuario y su 
contraseña, recibiendo los avisos de error que correspondan en caso de que las credenciales no sean 
correctas. Además, deberán contar con la posibilidad de cerrar sesión y, a continuación, iniciar una 
nueva sesión en caso de que así lo deseen.  

no me digas como hacerlo explicame como pensarlo
*/

class OfertaLaboral {

}

class Admin {

}

class Postulacion {

}

/*  
Postulaciones (se recomienda crear postulaciones en distintos estados 
cuidando la consistencia de los datos para luego poder realizar suficientes 
pruebas de procesamiento de postulaciones según lo descripto en la 
funcionalidad).  
*/
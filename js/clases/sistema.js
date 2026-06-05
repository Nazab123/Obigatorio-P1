
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

    //pregarca de datos va aca 


    // aca iria la precarga de datos 
}


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

//--------------------------------------------------------------
//datos de la precarga de datos 
let sistema = new Sistema();
let admin1 = new Admin("adminrodri", "Rodri123", "Rodri");
let admin2 = new Admin("admingerard", "Gerard123", "El Gerry");
let admin3 = new Admin("adminnaza", "Naza123", "Naza");

//validar precargas por mas que san precargas


sistema.admins.push(admin1);
sistema.admins.push(admin2);
sistema.admins.push(admin3);


//datos de la precarga de datos
//--------------------------------------------------------------
/* yo voy a teneer en el main todo lo de html, nada se conecta con el hml menossss el main, las vitas y todo van en el ,ain mi clase sistema habla con el main 
*/


/* VALIDACIONES  */
    let posicionAdmin = indexOfAdmin(txtUsuarioLogin);
    let posicionPostulante = indexOfPostulante(txtUsuarioLogin);

    // acá valido si es admin o postulante

/* 
guardar unicamente en 1 sola varible sea dmin o sea postulante 

el objeto
peroooooo0, despues necesito un this. y ahi me guardo si es postulante o admin




yo saco el id de la postulacuon cuando yo este en la postulacion voy a pasar mi oferta paso el bojeto enter


*/




*/
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


/* funccion registrar postulante */

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




// esta la deje aca porque es una validacion general .
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

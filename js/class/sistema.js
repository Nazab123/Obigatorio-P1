
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
        this.precargaDatos();// puse esto dentro para cargar los datos iniciales que tengamos , esta determinado por eso lo pongo en el constructor a chequear 
    }

  //PRECARGA DE DATOS PAPÁ

  precargaDatos(){
let admin1 = new Admin("adminrodri", "Rodri123", "Rodri");
let admin2 = new Admin("admingerard", "Gerard123", "El Gerry");
let admin3 = new Admin("adminnaza", "Naza123", "Naza");

//validar precargas por mas que san precargas


this.admins.push(admin1);
this.admins.push(admin2);
this.admins.push(admin3);
        
    }



//BUSQUEDA DE ADMINS POR USERSSSSSS

// cambie esto porque puse la funcion en sistema ocmo metodo , por eso tampoco se llama con funciton antes  ,vos llamabas a todo con sistema.admins y asi , ahora lo cmabie por this ya que puse todo dentro de la clase sistemas porque son sus metodos .

indexOfAdmin(txtUsuarioLogin) {

    for (let i = 0; i < this.admins.length; i++) {
        let adminActual = this.admins[i];

        if (adminActual.usuario === txtUsuarioLogin) {
            return i;
        }
    }

    return -1;
}


 indexOfPostulante(txtUsuarioLogin) {

    for (let i = 0; i < this.postulantes.length; i++) {
        let postulanteActual = this.postulantes[i];

        if (postulanteActual.usuario === txtUsuarioLogin) {
            return i;
        }
    }

    return -1;
}

//VALIDAR CONTRA WACHO
// antes era global ahora la movi dentro  porque es una validacion que usamos  durante el registro del postulante . osea trabajan con los datos del distema en este caso ( admins , postulantes , ofertas  y postulaciones)
 validarContra(password) {

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

/* REGISTRAR POSTULANTES */
// lo mismo aca ,  todo lo que es responsabilidad de sistemas lo puse aca adentro .
//osea en resumen pense en lo global pero no usando variables globales porqye sistemas ya es la clase que conecta todo con todo .
registrarPostulante(usuario, password, nombre, experiencia, area){

let respuesta ="";
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

        this.postulantes.push(nuevoPostulante);

        respuesta = "registro procesado";
    }
    return respuesta;

}
}

let sistema = new Sistema();








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

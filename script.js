


class Sistema {

}

/* 
3 Administradores. 
15 Postulantes (distribuidos en diferentes niveles de experiencia). 
10 Ofertas Laborales (al menos 2 destacadas, con diferentes niveles y 
estados)  */ 

//interfaz de registro
let volver = document.querySelector("#btnVolverLogin")
let resultadoLog = document.querySelector("#pResultado")
let registrar = document.querySelector("#btnRegistrar")

function registrarPostulante() {

    let respuesta = ""
    // case insensitive
    let usuario = document.querySelector("#txtUsuario").value.trim().toLowerCase()
    // case sensitive
    let password = document.querySelector("#txtPassword").value

    let nombre = document.querySelector("#txtNombre").value.trim()
    let experiencia = document.querySelector("#slcExperiencia").value
    let area = document.querySelector("#slcArea").value

    //validacionesss

    if (usuario===""){
        respuesta="el usuario no debe estar vacio"

    }else if(usuario.length < 5){
        respuesta="el usuario debe tener al menos 5 caracteres"

    } else if (password === ""){
        respuesta="la contraseña no debe estar vacia"

    }else if(nombre.length < 5){
        respuesta="la contraseña debe tener al menos 5 caracteres"

    }else if (password === ""){
        respuesta="el nombre no debe estar vacio"

    }else if (experiencia === ""){
        respuesta="selecione una opcion de experiencia"

    }else if (area === ""){
        respuesta="selecione una opcion de area"
    }
/*
me faltannn
¿usuario ya existe?
¿password tiene mayúscula?
¿password tiene minúscula?
¿password tiene número?
 */


}

class Postulante {

}

/* Los usuarios con perfil postulante podrán registrarse en el sistema y postularse a ofertas laborales 
publicadas por el administrador.  
Para poder registrarse en el sistema, deberán ingresar su nombre de usuario (único en el sistema, 
case insensitive, no pueden existir el usuario "a" y el usuario "A" en la aplicación y con mínimo 5 
caracteres), una contraseña (mínimo 5 caracteres, incluyendo al menos una mayúscula, una minúscula 
y un número), su nombre completo, su nivel de experiencia (Junior, Semi-Senior o Senior) y su área de 
interés (Tecnología, Diseño, Marketing, Administración u Otros). Todos los datos deberán ser 
obligatorios  
Los postulantes deberán poder ingresar a la aplicación utilizando su nombre de usuario y su 
contraseña, recibiendo los avisos de error que correspondan en caso de que las credenciales no sean 
correctas. Además, deberán contar con la posibilidad de cerrar sesión y, a continuación, iniciar una 
nueva sesión en caso de que así lo deseen.  no me digas como hacerlo explicame como pensarlo
 */
class OfertaLaboral {

}

class Admin {

}



class Postulacion {

}

/*  Postulaciones (se recomienda crear postulaciones en distintos estados 
cuidando la consistencia de los datos para luego poder realizar suficientes 
pruebas de procesamiento de postulaciones según lo descripto en la 
funcionalidad).  */ 
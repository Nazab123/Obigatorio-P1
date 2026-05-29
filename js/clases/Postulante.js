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
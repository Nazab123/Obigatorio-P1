// Verifica si la contraseña cumple con los requisitos solicitados.

function validarPassword(password) {
    let tieneMayus = false;
    let tieneMinus = false;
    let contadorNumPas = 0;

    for (let i = 0; i < password.length; i++) {
        let letra = password.charAt(i);

        if (!isNaN(Number(letra))) {
            contadorNumPas++;
        }

        if (letra.charCodeAt(0) >= 65 && letra.charCodeAt(0) <= 90) {
            tieneMayus = true;
        }

        if (letra.charCodeAt(0) >= 97 && letra.charCodeAt(0) <= 122) {
            tieneMinus = true;
        }
    }

    return {
        tieneMayus,
        tieneMinus,
        contadorNumPas
    };
}

// Valida los datos ingresados para registrar un postulante.
function validarRegistroPostulante(usuario, password, nombre, experiencia, area, sistema) {
    let respuesta = "";
    let resultadoContra = validarPassword(password);

    if (usuario === "") {
        respuesta += "el usuario no debe estar vacio<br>";
    }

    if (usuario.length < 5) {
        respuesta += "el usuario debe tener al menos 5 caracteres<br>";
    }

    if (password === "") {
        respuesta += "la contraseña no debe estar vacia<br>";
    }

    if (password.length < 5) {
        respuesta += "la contraseña debe tener al menos 5 caracteres<br>";
    }

    if (nombre.length < 5) {
        respuesta += "el nombre debe tener al menos 5 caracteres<br>";
    }

    if (experiencia === "") {
        respuesta += "seleccione una opcion de experiencia<br>";
    }

    if (area === "") {
        respuesta += "seleccione una opcion de area<br>";
    }

    let usuarioBuscado = usuario.toLowerCase();

    for(let i = 0; i < sistema.postulantes.length; i++){
        if(sistema.postulantes[i].usuario.toLowerCase() === usuarioBuscado){
            respuesta += "el usuario ya existe<br>";
        }
    }

    if (resultadoContra.contadorNumPas === 0) {
        respuesta += "la contraseña debe tener al menos un numero<br>";
    }

    if (resultadoContra.tieneMayus === false) {
        respuesta += "la contraseña debe tener al menos una mayuscula<br>";
    }

    if (resultadoContra.tieneMinus === false) {
        respuesta += "la contraseña debe tener al menos una minuscula<br>";
    }

    return respuesta;
}

// Verifica si una oferta puede ser mostrada y utilizada por un postulante.
function validarOfertaParaPostulante(postulante, oferta) {

    if (
        oferta.getEstado() === "Activa" &&
        this.expCompatible(postulante, oferta) &&
        !this.yaSePostulo(postulante, oferta) &&
        this.contarPostulacionesOferta(oferta) < oferta.limitePostulaciones
    ) {
        return true;
    }

    return false;
}

// Valida los datos necesarios para crear o editar una oferta laboral.
function validarOferta(titulo, empresa, descripcion, nivel, area, limitePostulaciones, cantidadVacantes, destacada) {

    if (
        titulo === "" ||
        empresa === "" ||
        descripcion === "" ||
        nivel === "" ||
        area === "" ||
        limitePostulaciones === "" ||
        cantidadVacantes === "" ||
        destacada === ""
    ) {
        return "Todos los campos son obligatorios";
    }

    if (Number(limitePostulaciones) < Number(cantidadVacantes)) {
        return "El límite de postulaciones debe ser mayor o igual a la cantidad de vacantes";
    }

    return "";
}
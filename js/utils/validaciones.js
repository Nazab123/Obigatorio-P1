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

    if (
    findCasero(sistema.admins, "usuario", usuario) !== -1 ||
    findCasero(sistema.postulantes, "usuario", usuario) !== -1
    ) {
    respuesta += "el usuario ya existe<br>";
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
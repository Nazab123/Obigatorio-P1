
class Sistema {
    #tipoUser;
    constructor() {
        this.#tipoUser = null;
        this.postulantes = [];
        this.admins = [];
        this.ofertas = [];
        this.postulaciones = [];

        this.usuarioLogueado = null;

        this.precargaDatos();
    }

    //PRECARGA DE DATOS PAPÁ
    precargaDatos() {

      
        // ADMINISTRADORES
        this.registrarAdmin("adminrodri", "Rodri123", "Rodri");
        this.registrarAdmin("admingerard", "Gerard123", "El Gerry");
        this.registrarAdmin("adminnaza", "Naza123", "Naza");


        // POSTULANTES
        this.registrarPostulante("juanp", "Juan123", "Juan Perez", "Junior", "Tecnología");
        this.registrarPostulante("maria", "Maria123", "Maria Lopez", "Semi-Senior", "Diseño");
        this.registrarPostulante("pedrog", "Pedro123", "Pedro Garcia", "Senior", "Marketing");
        this.registrarPostulante("lucias", "Lucia123", "Lucia Silva", "Junior", "Administración");
        this.registrarPostulante("carlar", "Carla123", "Carla Rodriguez", "Semi-Senior", "Tecnología");

        this.registrarPostulante("matias", "Matias123", "Matias Fernandez", "Senior", "Diseño");
        this.registrarPostulante("florencia", "Flor123", "Florencia Diaz", "Junior", "Marketing");
        this.registrarPostulante("sofiag", "Sofia123", "Sofia Gomez", "Semi-Senior", "Administración");
        this.registrarPostulante("nicolas", "Nico123", "Nicolas Castro", "Senior", "Tecnología");
        this.registrarPostulante("valentina", "Vale123", "Valentina Ruiz", "Junior", "Otros");

        this.registrarPostulante("camilo", "Camilo123", "Camilo Suarez", "Semi-Senior", "Marketing");
        this.registrarPostulante("agusm", "Agus123", "Agustina Molina", "Senior", "Administración");
        this.registrarPostulante("martina", "Martin123", "Martin Acosta", "Junior", "Diseño");
        this.registrarPostulante("biancam", "Bianca123", "Bianca Mendez", "Semi-Senior", "Otros");
        this.registrarPostulante("facundo", "Facu123", "Facundo Pereira", "Senior", "Tecnología");


        // OFERTAS LABORALES
        this.crearOferta("Frontend Junior", "TechUy", "HTML CSS y JavaScript", "Junior", "Tecnología", 5, 2, true);
        this.crearOferta("Diseñador UX UI", "DiseñoPro", "Diseño de interfaces web", "Semi-Senior", "Diseño", 4, 2, true);
        this.crearOferta("Analista de Marketing", "MarketPlus", "Campañas digitales", "Junior", "Marketing", 3, 1, false);
        this.crearOferta("Administrativo Contable", "Gestion SA", "Tareas administrativas", "Junior", "Administración", 4, 2, false);
        this.crearOferta("Backend Senior", "CodeFactory", "Desarrollo backend", "Senior", "Tecnología", 5, 2, false);

        this.crearOferta("Diseñador Grafico Senior", "Creativa", "Piezas graficas", "Senior", "Diseño", 3, 1, false);
        this.crearOferta("Community Manager", "SocialGo", "Gestion de redes sociales", "Semi-Senior", "Marketing", 4, 2, true);
        this.crearOferta("Asistente Administrativo", "OficinaUy", "Soporte administrativo", "Semi-Senior", "Administración", 3, 1, false);
        this.crearOferta("Soporte Tecnico Junior", "HelpDeskUy", "Atencion a usuarios", "Junior", "Tecnología", 6, 3, false);
        this.crearOferta("Operador General", "ServiciosYa", "Tareas generales", "Semi-Senior", "Otros", 4, 2, false);


        // CAMBIO DE ESTADOS DE ALGUNAS OFERTAS
        this.ofertas[5].inactivarOferta();
        this.ofertas[9].cerrarOferta();

        // POSTULACIONES
        this.registrarPostulacion(this.postulantes[0], this.ofertas[0], "aceptada");
        this.registrarPostulacion(this.postulantes[4], this.ofertas[0], "pendiente");
        this.registrarPostulacion(this.postulantes[14], this.ofertas[0], "rechazada");

        this.registrarPostulacion(this.postulantes[1], this.ofertas[1], "pendiente");
        this.registrarPostulacion(this.postulantes[12], this.ofertas[1], "aceptada");

        this.registrarPostulacion(this.postulantes[6], this.ofertas[2], "rechazada");
        this.registrarPostulacion(this.postulantes[10], this.ofertas[2], "pendiente");

        this.registrarPostulacion(this.postulantes[3], this.ofertas[3], "aceptada");
        this.registrarPostulacion(this.postulantes[7], this.ofertas[3], "pendiente");
        this.registrarPostulacion(this.postulantes[11], this.ofertas[3], "rechazada");

        this.registrarPostulacion(this.postulantes[8], this.ofertas[4], "aceptada");
        this.registrarPostulacion(this.postulantes[14], this.ofertas[4], "pendiente");

        this.registrarPostulacion(this.postulantes[5], this.ofertas[5], "aceptada");
        this.registrarPostulacion(this.postulantes[1], this.ofertas[6], "pendiente");
        this.registrarPostulacion(this.postulantes[2], this.ofertas[6], "rechazada");

        this.registrarPostulacion(this.postulantes[7], this.ofertas[7], "pendiente");
        this.registrarPostulacion(this.postulantes[11], this.ofertas[7], "aceptada");

        this.registrarPostulacion(this.postulantes[0], this.ofertas[8], "pendiente");
        this.registrarPostulacion(this.postulantes[4], this.ofertas[8], "rechazada");
        this.registrarPostulacion(this.postulantes[8], this.ofertas[8], "aceptada");

    }


    //METODOS PARA LAS PR-RECARGAS 
    registrarAdmin(usuario, contrasenia, nombre) {
        let nuevoAdmin = new Admin(usuario, contrasenia, nombre);
        this.admins.push(nuevoAdmin);
    }


    registrarPostulante(usuario, password, nombre, experiencia, area) {

        let respuesta = validarRegistroPostulante(
            usuario,
            password,
            nombre,
            experiencia,
            area,
            this
        );

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

    registrarPostulacion(postulante, oferta, estado) {
        let nuevaPostulacion = new Postulacion(postulante, oferta);
        nuevaPostulacion.estado = estado;
        this.postulaciones.push(nuevaPostulacion);
    }

    crearOferta(titulo, empresa, descripcion, nivel, area, limitePostulaciones, cantidadVacantes, destacada) {

let respuesta = this.validarOferta(titulo, empresa, descripcion, nivel, area, limitePostulaciones, cantidadVacantes, destacada);

if (respuesta === "") {
    let nuevaOferta = new OfertaLaboral(
        titulo,
        empresa,
        descripcion,
        nivel,
        area,
        limitePostulaciones,
        cantidadVacantes,
        destacada
    );

    this.ofertas.push(nuevaOferta);

    respuesta = "Oferta creada correctamente";
}

return respuesta;
    }
    //----------------------------------------------------------------------------------

    login(usuario, password) {

        let posicionAdmin = findCasero(this.admins, "usuario", usuario);
        let posicionPostulante = findCasero(this.postulantes, "usuario", usuario);

        if (posicionAdmin !== -1) {
            let adminEncontrado = this.admins[posicionAdmin];

            if (adminEncontrado.password === password) {
                this.usuarioLogueado = adminEncontrado;
                this.#tipoUser = "Admin";
                return true;
            }

            return false;
        }

        if (posicionPostulante !== -1) {
            let postulanteEncontrado = this.postulantes[posicionPostulante];

            if (postulanteEncontrado.password === password) {
                this.usuarioLogueado = postulanteEncontrado;
                this.#tipoUser = "Postulante";
                return true;
            }

            return false;
        }

        return false;
    }

    getTipoUser() {
        return this.#tipoUser;
    }

    cerrarSesion() {
        this.usuarioLogueado = null;
        this.#tipoUser = null;
    }

    findOfertaById(idBuscado) {
        for (let i = 0; i < this.ofertas.length; i++) {

            if (this.ofertas[i].getId() === idBuscado) {
                return this.ofertas[i];
            }
        }

        return null;
    }


    //AGREGUE METODOS A SISTEMA PARA POSTULANTES 
    //los llamo a todos en el view de OfertasPostulante , recorda que los metodos declarados aca son solo parametros , osea fijate que en lavista de ofertasPostulantes mi condicion llama a estos parametros usando los parametros de 
    yaSePostulo(postulante, oferta) {
        for (let i = 0; i < this.postulaciones.length; i++) {
            let postulacionActual = this.postulaciones[i];

            if (
                postulacionActual.postulante === postulante &&
                postulacionActual.ofertaLaboral === oferta
            ) {
                return true;
            }
        }

        return false;
    }
    // probar foreach.

    contarPostulacionesOferta(oferta) {
        let contador = 0;

        for (let i = 0; i < this.postulaciones.length; i++) {
            if (this.postulaciones[i].ofertaLaboral === oferta) {
                contador++;
            }
        }

        return contador;
    }


    expCompatible(postulante, oferta) {
        if (postulante.experiencia === "Senior" && (oferta.nivel === "Senior" || oferta.nivel === "Semi-Senior")) {
            return true;
        }

        if (
            postulante.experiencia === "Semi-Senior" &&
            (oferta.nivel === "Senior" || oferta.nivel === "Semi-Senior" || oferta.nivel === "Junior")
        ) {
            return true;
        }

        if (
            postulante.experiencia === "Junior" &&
            oferta.nivel === "Junior"
        ) {
            return true;
        }

        return false;
    }

    postularse(postulante, oferta) {
        if (this.validarOfertaParaPostulante(postulante, oferta)) {

            this.registrarPostulacion(postulante, oferta, "pendiente");

            if(this.contarPostulacionesOferta(oferta)>= oferta.limitePostulaciones){
                oferta.inactivarOferta();
            }
        
         return "Postulación realizada correctamente";
        }
    

        return "No es posible postularse a esta oferta";
    }

    //AGREGAR METODOS PARA MIS POSTULACIONES 
    // Primer metodo que necesito , voy a neceistas 3 metodos .

    obtenerMisPostulaciones(postulante) {
        let resultado = [];

        for (let i = 0; i < this.postulaciones.length; i++) {
            let postulacionActual = this.postulaciones[i];
            if (postulacionActual.postulante === postulante) {
                resultado.push(postulacionActual);
            }

        }
        return resultado;

    }

    //AGREGUE ESTE METODO PARA SEGUIR HACIENDO ESTO DE USAR METODOS DESDE ACA Y EN EL VIEW QUE NO SE USEN 
    obtenerPostulacionesPendientes() {
    let resultado = [];

    for (let i = 0; i < this.postulaciones.length; i++) {
        let postulacionActual = this.postulaciones[i];

        if (postulacionActual.estado === "pendiente") {
            resultado.push(postulacionActual);
        }
    }

    return resultado;
    }


procesarPostulacion(idPostulacion, accion) {
    let postulacionProcesada = null;

    for (let i = 0; i < this.postulaciones.length; i++) {
        let postulacionActual = this.postulaciones[i];

        if (postulacionActual.getId() === idPostulacion) {
            postulacionActual.estado = accion;
            postulacionProcesada = postulacionActual;
        }
    }

    if (postulacionProcesada === null) {
        return "No se pudo procesar la postulación";
    }

    if (accion === "rechazada") {
        return "Postulación rechazada correctamente";
    }

    let oferta = postulacionProcesada.ofertaLaboral;

    let rechazadasAutomaticamente = 0;
    let cambioEstadoOferta = false;
    let aceptadas = this.contarPostulacionesPorEstado(oferta, "aceptada");

    let totalPostulaciones = this.contarPostulacionesOferta(oferta);

    if (aceptadas >= oferta.cantidadVacantes || totalPostulaciones >= oferta.limitePostulaciones) {
        oferta.inactivarOferta();
        cambioEstadoOferta = true;

        for (let i = 0; i < this.postulaciones.length; i++) {
            let postulacionActual = this.postulaciones[i];

            if (
                postulacionActual.ofertaLaboral === oferta &&
                postulacionActual.estado === "pendiente"
            ) {
                postulacionActual.estado = "rechazada";
                rechazadasAutomaticamente++;
            }
        }
    }

    let mensaje = "Postulación aceptada correctamente";

    if (cambioEstadoOferta === true) {
        if (aceptadas >= oferta.cantidadVacantes && totalPostulaciones >= oferta.limitePostulaciones) {
            mensaje += "<br>La oferta pasó a estado Inactiva porque se cubrieron todas las vacantes y se alcanzó el límite de postulaciones.";
        } else if (aceptadas >= oferta.cantidadVacantes) {
            mensaje += "<br>La oferta pasó a estado Inactiva porque se cubrieron todas las vacantes.";
        } else {
            mensaje += "<br>La oferta pasó a estado Inactiva porque se alcanzó el límite de postulaciones.";
        }

        mensaje += "<br>Postulaciones rechazadas automáticamente: " + rechazadasAutomaticamente;
    }

    return mensaje;
}

//Buscador de titulos de oferta

obtenerPostulacionesPorOferta(textoBuscado){
    let resultado = [];

    for (let i = 0; i < this.ofertas.length; i++) {
        let ofertaActual = this.ofertas[i];

        if (!ofertaActual.titulo.toLowerCase().includes(textoBuscado)) {
            continue;
        }

        let pendientes = 0;
        let aceptadas = 0;
        let rechazadas = 0;

        for (let j = 0; j < this.postulaciones.length; j++) {
            let postulacionActual = this.postulaciones[j];

            if (ofertaActual === postulacionActual.ofertaLaboral) {
                if (postulacionActual.estado === "pendiente") {
                    pendientes++;
                } else if (postulacionActual.estado === "aceptada") {
                    aceptadas++;
                } else if (postulacionActual.estado === "rechazada") {
                    rechazadas++;
                }
            }
        }

        resultado.push({
            titulo: ofertaActual.titulo,
            pendientes: pendientes,
            aceptadas: aceptadas,
            rechazadas: rechazadas,
            total: pendientes + aceptadas + rechazadas
        });
    }

    return resultado;
}

obtenerTotalesOfertasPorEstado() {

    let activas = 0;
    let inactivas = 0;
    let cerradas = 0;

    this.ofertas.forEach(function(ofertaActual) {

        if (ofertaActual.getEstado() === "Activa") {
            activas++;
        } else if (ofertaActual.getEstado() === "Inactiva") {
            inactivas++;
        } else if (ofertaActual.getEstado() === "Cerrada") {
            cerradas++;
        }

    });

    return {
        activas: activas,
        inactivas: inactivas,
        cerradas: cerradas
    };
}

obtenerPorcentajeVacantesCubiertas() {

    let vacantesCubiertas = 0;
    let cantidadVacantes = 0;

    this.ofertas.forEach(function(ofertaActual) {
        cantidadVacantes += Number(ofertaActual.cantidadVacantes);
    });

    this.postulaciones.forEach(function(postulacionActual) {
        if (postulacionActual.estado === "aceptada") {
            vacantesCubiertas++;
        }
    });

    return vacantesCubiertas * 100 / cantidadVacantes;
}

obtenerPostulanteMasPostulacionesActivas() {

    let postulanteMayor = null;
    let mayorCantidad = 0;

    for (let i = 0; i < this.postulantes.length; i++) {

        let postulanteActual = this.postulantes[i];
        let cantidad = 0;

        for (let j = 0; j < this.postulaciones.length; j++) {

            let postulacionActual = this.postulaciones[j];

            if (
                postulacionActual.postulante === postulanteActual &&
                postulacionActual.ofertaLaboral.getEstado() === "Activa"
            ) {
                cantidad++;
            }
        }

        if (cantidad > mayorCantidad) {
            mayorCantidad = cantidad;
            postulanteMayor = postulanteActual;
        }
    }

    return {
        postulante: postulanteMayor,
        cantidad: mayorCantidad
    };
}

obtenerTodasLasOfertas() {
    return this.ofertas;
}

cerrarOfertaPorId(idOferta) {

    let oferta = this.findOfertaById(idOferta);

    if (oferta !== null) {
        oferta.cerrarOferta();
    }
}

editarOfertaPorId(idOferta, titulo, empresa, descripcion, nivel, area, limitePostulaciones, cantidadVacantes, destacada) {

    let respuesta = this.validarOferta(titulo, empresa, descripcion, nivel, area, limitePostulaciones, cantidadVacantes, destacada);

    if (respuesta === "") {
        let oferta = this.findOfertaById(idOferta);

        if (oferta !== null) {
            oferta.editarOferta(titulo, empresa, descripcion, nivel, area, limitePostulaciones, cantidadVacantes, destacada);

            respuesta = "Oferta editada correctamente";
        } else {
            respuesta = "No se pudo encontrar la oferta";
        }
    }

    return respuesta;
}

obtenerOfertasFiltradas(postulante, filtroArea, soloDestacadas) {
    let resultado = [];

    for (let i = 0; i < this.ofertas.length; i++) {
        let ofertaActual = this.ofertas[i];

        let cumpleArea = filtroArea !== "area" || ofertaActual.area === postulante.area;
        let cumpleDestacada = soloDestacadas === false || ofertaActual.destacada === true;

        if (
            this.validarOfertaParaPostulante(postulante, ofertaActual) &&
            cumpleArea &&
            cumpleDestacada
        ) {
            resultado.push(ofertaActual);
        }
    }

    return resultado;
}

obtenerOfertasParaPostulante(postulante, filtro) {
    return this.obtenerOfertasFiltradas(postulante, filtro, false);
}

obtenerOfertasParaTablaPostulante(postulante) {
    return this.obtenerOfertasFiltradas(postulante, "todas", false);
}

obtenerOfertasParaTablaDestacadas(postulante) {
    return this.obtenerOfertasFiltradas(postulante, "todas", true);
}

// hice este método porque se venia repitiendoo
validarOfertaParaPostulante(postulante, oferta) {

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

validarOferta(titulo, empresa, descripcion, nivel, area, limitePostulaciones, cantidadVacantes, destacada) {

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

contarPostulacionesPorEstado(oferta, estado) {
    let contador = 0;

    for (let i = 0; i < this.postulaciones.length; i++) {
        let postulacionActual = this.postulaciones[i];

        if (
            postulacionActual.ofertaLaboral === oferta &&
            postulacionActual.estado === estado
        ) {
            contador++;
        }
    }

    return contador;
}
postularsePorId(postulante, idOferta) {
    let ofertaSeleccionada = this.findOfertaById(idOferta);

    if (ofertaSeleccionada !== null) {
        return this.postularse(postulante, ofertaSeleccionada);
    }

    return "No se encontró la oferta";
}
}
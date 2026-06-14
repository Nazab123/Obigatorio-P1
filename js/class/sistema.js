
//acá guardo mis array entonces no le pongo parámetros
// los array siempre van en plural
//no todas las clases tienen que ir en sistema
// las clases si a las otras

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

        /* 
        Las precargas se hacen desde métodos del sistema cuando existe validación.
        Postulantes pasan por registrarPostulante().
        Ofertas pasan por crearOferta().
        Admins y postulaciones usan push porque todavía no tienen método propio.
        
        //CREE LOS METODOS PARA RESITRAS ADMIN Y REGISTRAR POSTULACIONES , CORTA .
        */
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

        return "Oferta creada correctamente";


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
    }// en esta parte el unico que podria ver ambas postulaciones tanto jr ocmo señor seria el semi señor , el señor solo puede las señor y semi señor y el jr solo las jr y las de semi señor .
    //PREGUNTARLE AL PROFESOR SI ESTO ESTA BIEN AL  FINAL O NO 

    //LA REAL POSTULASAO (Crack de los data.id deaau)
    postularse(postulante, oferta) {
        if (oferta.getEstado() === "Activa" && this.expCompatible(postulante, oferta) && !this.yaSePostulo(postulante, oferta) && this.contarPostulacionesOferta(oferta) < oferta.limitePostulaciones) {
            let nuevaPostulacion = new Postulacion(postulante, oferta);
            this.registrarPostulacion(postulante,oferta,"pendiente");

            return "Postulación realizada correctamente";
        }

        return "No es posible postularse a esta oferta";
    }

    //AGREGAR METODOS PARA MIS POSTULACIONES 
    // Primer metodo que necesito , voy a neceistas 3 metodos .

    obtenerMisPostulaciones(postulante){
        let resultado = [];

        for ( let i = 0; i < this.postulaciones.length; i++){
            if(postulacionActual.posicionPostulante === postulante){
                resultado.push(postulacionActual);
            }

        }
        return resultado;

    }
// aca recorro todas las postulacuines y las guardo en un array porque el postulante puede que se haya postulado a varias .
// este metodo lo uso en la visual de mis postulaciones ( me siento re crack porque filtro y muestro pantalla en el mismo metodo en la otra parte , genial mal )


}

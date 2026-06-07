
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

(falta cambiarlo)
*/
        // ADMINISTRADORES
        this.admins.push(new Admin("adminrodri", "Rodri123", "Rodri"));
        this.admins.push(new Admin("admingerard", "Gerard123", "El Gerry"));
        this.admins.push(new Admin("adminnaza", "Naza123", "Naza"));


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
        this.postulaciones.push(new Postulacion(this.postulantes[0], this.ofertas[0]));
        this.postulaciones.push(new Postulacion(this.postulantes[4], this.ofertas[0]));
        this.postulaciones.push(new Postulacion(this.postulantes[14], this.ofertas[0]));

        this.postulaciones.push(new Postulacion(this.postulantes[1], this.ofertas[1]));
        this.postulaciones.push(new Postulacion(this.postulantes[12], this.ofertas[1]));

        this.postulaciones.push(new Postulacion(this.postulantes[6], this.ofertas[2]));
        this.postulaciones.push(new Postulacion(this.postulantes[10], this.ofertas[2]));

        this.postulaciones.push(new Postulacion(this.postulantes[3], this.ofertas[3]));
        this.postulaciones.push(new Postulacion(this.postulantes[7], this.ofertas[3]));
        this.postulaciones.push(new Postulacion(this.postulantes[11], this.ofertas[3]));

        this.postulaciones.push(new Postulacion(this.postulantes[8], this.ofertas[4]));
        this.postulaciones.push(new Postulacion(this.postulantes[14], this.ofertas[4]));

        this.postulaciones.push(new Postulacion(this.postulantes[5], this.ofertas[5]));
        this.postulaciones.push(new Postulacion(this.postulantes[1], this.ofertas[6]));
        this.postulaciones.push(new Postulacion(this.postulantes[2], this.ofertas[6]));

        this.postulaciones.push(new Postulacion(this.postulantes[7], this.ofertas[7]));
        this.postulaciones.push(new Postulacion(this.postulantes[11], this.ofertas[7]));

        this.postulaciones.push(new Postulacion(this.postulantes[0], this.ofertas[8]));
        this.postulaciones.push(new Postulacion(this.postulantes[4], this.ofertas[8]));
        this.postulaciones.push(new Postulacion(this.postulantes[8], this.ofertas[8]));


        // ESTADOS VARIADOS DE POSTULACIONES
        this.postulaciones[0].estado = "aceptada";
        this.postulaciones[1].estado = "pendiente";
        this.postulaciones[2].estado = "rechazada";

        this.postulaciones[3].estado = "pendiente";
        this.postulaciones[4].estado = "aceptada";

        this.postulaciones[5].estado = "rechazada";
        this.postulaciones[6].estado = "pendiente";

        this.postulaciones[7].estado = "aceptada";
        this.postulaciones[8].estado = "pendiente";
        this.postulaciones[9].estado = "rechazada";

        this.postulaciones[10].estado = "aceptada";
        this.postulaciones[11].estado = "pendiente";

        this.postulaciones[12].estado = "aceptada";
        this.postulaciones[13].estado = "pendiente";
        this.postulaciones[14].estado = "rechazada";

        this.postulaciones[15].estado = "pendiente";
        this.postulaciones[16].estado = "aceptada";

        this.postulaciones[17].estado = "pendiente";
        this.postulaciones[18].estado = "rechazada";
        this.postulaciones[19].estado = "aceptada";
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

}

let sistema = new Sistema();
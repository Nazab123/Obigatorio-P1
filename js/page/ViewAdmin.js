// Inicializa el menú principal del administrador y conecta sus botones.
function initAdmin() {

    let btnCrearOferta = document.querySelector("#btnCrearOferta");
    let btnCerrarSesionAdmin = document.querySelector("#btnCerrarSesionAdmin");
    let btnListadoOfertasAdmin = document.querySelector("#btnVerListadoOfertasAdmin");
    let btnPostulacionesPendientesAdmin = document.querySelector("#btnVerPostulacionesPendientes");
    let btnEstadísticas = document.querySelector("#btnVerEstadisticasAdmin");


    btnListadoOfertasAdmin.addEventListener("click", listadoOfertasAdmin);
    btnPostulacionesPendientesAdmin.addEventListener("click", postulacionesPendientesAdmin);
    btnEstadísticas.addEventListener("click", estadisticas);

    btnCrearOferta.addEventListener("click", crearOferta);
    btnCerrarSesionAdmin.addEventListener("click", cerrarSesionAdmin);
}

// Vuelve al listado de ofertas del administrador.
function volverAdmin() {
    irA("view-table-ofertas-admin", initListadoOfertasAdmin);
}

// Cierra la sesión actual y vuelve al login.
function cerrarSesionAdmin() {
    sistema.cerrarSesion();
    irA("view-login", initLogin);
}

// Navega a la pantalla de creación de ofertas.
function crearOferta() {
    irA("view-crear-oferta", initCrearOferta);
}

// Navega al listado de ofertas.
function listadoOfertasAdmin() {
    irA("view-table-ofertas-admin", initListadoOfertasAdmin);
}

// Navega a la pantalla de postulaciones pendientes.
function postulacionesPendientesAdmin() {
    irA("view-postulaciones-pendientes", initPostulacionesPendientesAdmin);

}

// Navega a la pantalla de estadísticas.
function estadisticas() {
    irA("view-estadisticas-admin", initEstadistica);

}

// Inicializa la pantalla de creación de ofertas.
function initCrearOferta() {

    initAdmin();
    let btnGuardarOferta = document.querySelector("#btnGuardarOferta");
    let btnVolverMenuAdmin = document.querySelector("#btnVolverMenuAdmin1");

    btnGuardarOferta.addEventListener("click", guardarOferta);
    btnVolverMenuAdmin.addEventListener("click", volverAdmin);
}

// Obtiene los datos ingresados y crea una nueva oferta.
function guardarOferta() {
    let titulo = document.querySelector("#txtTituloOferta").value.trim();
    let empresa = document.querySelector("#txtEmpresaOferta").value.trim();
    let descripcion = document.querySelector("#txtDescripcionOferta").value.trim();
    let nivel = document.querySelector("#slcNivelOferta").value;
    let area = document.querySelector("#slcAreaOferta").value;
    let limitePostulaciones = Number(document.querySelector("#txtLimitePostulaciones").value);
    let cantidadVacantes = Number(document.querySelector("#txtCantidadVacantes").value);
    let destacada = document.querySelector("#slcOfertaDestacada").value;

    let esDestacada = false;

    if (destacada === "si") {
        esDestacada = true;
    }

    let respuesta = sistema.crearOferta(
        titulo,
        empresa,
        descripcion,
        nivel,
        area,
        limitePostulaciones,
        cantidadVacantes,
        esDestacada
    );

    if (respuesta === "Oferta creada correctamente") {
        irA("view-table-ofertas-admin", initListadoOfertasAdmin);
    } else {
        document.querySelector("#pCrearOferta").innerHTML = respuesta;
    }
}

// Inicializa la pantalla de estadísticas y carga la información.
function initEstadistica() {
    initAdmin();

    let txtBuscarOfertaEstadistica = document.querySelector("#txtBuscarOfertaEstadistica");
    let btnBuscarOfertaEstadistica = document.querySelector("#btnBuscarOfertaEstadistica");
    let btnVolverMenuAdmin4 = document.querySelector("#btnVolverMenuAdmin4");


    btnBuscarOfertaEstadistica.addEventListener("click", buscarOfertaEstadistica);

    btnVolverMenuAdmin4.addEventListener("click", volverAdmin);

    mostrarOfertaEstadistica();
    mostrarTotalesEstadistica();
    mostrarResumenGeneral();
}

// Muestra las estadísticas de postulaciones por oferta.
function mostrarOfertaEstadistica(textoBuscado = "") {
    let tabla = document.querySelector("#tbodyPostulacionesPorOferta");
    tabla.innerHTML = "";

    let datos = sistema.obtenerPostulacionesPorOferta(textoBuscado);

    if (datos.length === 0) {
        tabla.innerHTML = `<tr><td colspan="5">No hay ofertas registradas</td></tr>`;
    }

    for (let i = 0; i < datos.length; i++) {
        let fila = datos[i];

        tabla.innerHTML += `
            <tr>
                <td>${fila.titulo}</td>
                <td>${fila.pendientes}</td>
                <td>${fila.aceptadas}</td>
                <td>${fila.rechazadas}</td>
                <td>${fila.total}</td>
            </tr>
        `;
    }
}



// Busca ofertas por título para las estadísticas.
function buscarOfertaEstadistica() {
    let txtBuscarOfertaEstadistica = document.querySelector("#txtBuscarOfertaEstadistica");
    let textoBuscado = txtBuscarOfertaEstadistica.value.toLowerCase().trim();

    mostrarOfertaEstadistica(textoBuscado);

}

// Muestra la cantidad de ofertas por estado.
function mostrarTotalesEstadistica() {

    let tbodyTotalOfertasPorEstado = document.querySelector("#tbodyTotalOfertasPorEstado");

    tbodyTotalOfertasPorEstado.innerHTML = "";


    let totales = sistema.obtenerTotalesOfertasPorEstado();

    tbodyTotalOfertasPorEstado.innerHTML = `
    <tr>
        <td>${totales.activas}</td>
        <td>${totales.inactivas} </td>
        <td>${totales.cerradas}</td>
    </tr>`;
}

// Muestra el resumen general de estadísticas del sistema.
function mostrarResumenGeneral() {
    let tbodyResumenGeneral = document.querySelector("#tbodyResumenGeneral");

    let porcentaje = sistema.obtenerPorcentajeVacantesCubiertas();
    let resultado = sistema.obtenerPostulanteMasPostulacionesActivas();

    tbodyResumenGeneral.innerHTML = `
        <tr>
            <td>Porcentaje de vacantes cubiertas</td>
            <td>${porcentaje}%</td>
        </tr>
        <tr>
            <td>Postulante con más postulaciones activas</td>
            <td>${resultado.postulante.nombre}, tiene ${resultado.cantidad} postulaciones activas</td>
        </tr>
    `;
}

// Inicializa la pantalla de listado de ofertas.
function initListadoOfertasAdmin() {
    initAdmin();

    let btnVolverMenuAdmin2 = document.querySelector("#btnVolverMenuAdmin2");

    mostrarListadoOfertasAdmin();

    btnVolverMenuAdmin2.addEventListener("click", volverAdmin);

}

// Muestra todas las ofertas registradas en el sistema.
function mostrarListadoOfertasAdmin() {

    let tabla = document.querySelector("#tbodyListadoOfertasAdmin");

    tabla.innerHTML = "";

    let ofertas = sistema.obtenerTodasLasOfertas();

    if (ofertas.length === 0) {
        tabla.innerHTML = `<tr><td colspan="8">No hay ofertas registradas</td></tr>`;
    }

    for (let i = 0; i < ofertas.length; i++) {

        //aca aplico el operador ternario
        let ofertaActual = ofertas[i];

 if (ofertaActual.getEstado() === "Activa"){
        tabla.innerHTML += `
            <tr>
                <td>${ofertaActual.getId()}</td>
                <td>${ofertaActual.titulo}</td>
                <td>${ofertaActual.empresa}</td>
                <td>${ofertaActual.nivel}</td>
                <td>${ofertaActual.area}</td>
                <td>${ofertaActual.destacada ? "si" : "no"}</td>
                <td>${ofertaActual.getEstado()}</td>
                <td>
                <button class="btnEditarOferta" data-id="${ofertaActual.getId()}">Editar</button>
                <button class="btnCerrarOferta" data-id="${ofertaActual.getId()}">Cerrar</button>
                </td>
            </tr>
        `;
        }
    }

    let botonesEditar = document.querySelectorAll(".btnEditarOferta");
    let botonesCerrar = document.querySelectorAll(".btnCerrarOferta");

    for (let i = 0; i < botonesEditar.length; i++) {
        botonesEditar[i].addEventListener("click", procesarEditarOferta);

    }

    for (let i = 0; i < botonesCerrar.length; i++) {
        botonesCerrar[i].addEventListener("click", procesarCierreOferta);

    }

}

// Cierra una oferta seleccionada desde el listado.
function procesarCierreOferta() {

    let idOferta = this.getAttribute("data-id");

    sistema.cerrarOfertaPorId(idOferta);

    mostrarListadoOfertasAdmin();
}

let idOfertaEditando = "";


// Guarda el id de la oferta seleccionada y abre la edición.
function procesarEditarOferta() {

    idOfertaEditando = this.getAttribute("data-id");

    irA("view-editar-oferta", initEditarOferta);
}


// Inicializa la pantalla de edición de ofertas y carga sus datos.
function initEditarOferta() {
    initAdmin();
    let btnGuardarCambiosOferta = document.querySelector("#btnGuardarCambiosOferta");
    let btnCancelarEditarOferta = document.querySelector("#btnCancelarEditarOferta");

    btnGuardarCambiosOferta.addEventListener("click", guardarCambiosOferta);
    btnCancelarEditarOferta.addEventListener("click", cancelarEditarOferta);





    let oferta = sistema.findOfertaById(idOfertaEditando);

    if (oferta !== null) {



        document.querySelector("#txtEditarTituloOferta").value = oferta.titulo;
        document.querySelector("#txtEditarEmpresaOferta").value = oferta.empresa;
        document.querySelector("#txtEditarDescripcionOferta").value = oferta.descripcion;
        document.querySelector("#slcEditarNivelOferta").value = oferta.nivel;
        document.querySelector("#slcEditarAreaOferta").value = oferta.area;
        document.querySelector("#txtEditarLimitePostulaciones").value = oferta.limitePostulaciones;
        document.querySelector("#txtEditarCantidadVacantes").value = oferta.cantidadVacantes;

        if (oferta.destacada === true) {
            document.querySelector("#slcEditarOfertaDestacada").value = "si";
        } else {
            document.querySelector("#slcEditarOfertaDestacada").value = "no";
        }
    }
}

// Guarda los cambios realizados sobre una oferta.
function guardarCambiosOferta() {

    let titulo = document.querySelector("#txtEditarTituloOferta").value.trim();
    let empresa = document.querySelector("#txtEditarEmpresaOferta").value.trim();
    let descripcion = document.querySelector("#txtEditarDescripcionOferta").value.trim();
    let nivel = document.querySelector("#slcEditarNivelOferta").value;
    let area = document.querySelector("#slcEditarAreaOferta").value;
    let limitePostulaciones = Number(document.querySelector("#txtEditarLimitePostulaciones").value);
    let cantidadVacantes = Number(document.querySelector("#txtEditarCantidadVacantes").value);
    let destacada = document.querySelector("#slcEditarOfertaDestacada").value;

    let esDestacada = false;

    if (destacada === "si") {
        esDestacada = true;
    }

    let respuesta = sistema.editarOfertaPorId(
        idOfertaEditando,
        titulo,
        empresa,
        descripcion,
        nivel,
        area,
        limitePostulaciones,
        cantidadVacantes,
        esDestacada
    );

    if (respuesta === "Oferta editada correctamente") {
        idOfertaEditando = "";
        irA("view-table-ofertas-admin", initListadoOfertasAdmin);
    } else {
        document.querySelector("#pEditarOferta").innerHTML = respuesta;
    }
}

// Cancela la edición y vuelve al listado de ofertas.
function cancelarEditarOferta() {
    idOfertaEditando = "";
    irA("view-table-ofertas-admin", initListadoOfertasAdmin);
}

// Inicializa la pantalla de postulaciones pendientes.
function initPostulacionesPendientesAdmin() {
    initAdmin();

    let btnVolverMenuAdmin3 = document.querySelector("#btnVolverMenuAdmin3");


    mostrarPostulacionesPendientes();

    btnVolverMenuAdmin3.addEventListener("click", volverAdmin);
}

// Muestra todas las postulaciones pendientes.
function mostrarPostulacionesPendientes() {
    let tabla = document.querySelector("#tbodyPostulacionesPendientes");

    tabla.innerHTML = "";
    let postulacionesPendientes = sistema.obtenerPostulacionesPendientes();

    for (let i = 0; i < postulacionesPendientes.length; i++) {
        let postulacionActual = postulacionesPendientes[i];

        tabla.innerHTML += `
                <tr>
                    <td>${postulacionActual.getId()}</td>
                    <td>${postulacionActual.postulante.nombre}</td>
                    <td>${postulacionActual.postulante.experiencia}</td>
                    <td>${postulacionActual.postulante.area}</td>
                    <td>${postulacionActual.ofertaLaboral.titulo}</td>
                    <td>${postulacionActual.ofertaLaboral.empresa}</td>
                    <td>${postulacionActual.ofertaLaboral.nivel}</td>
                    <td>
                        <button class="btnAceptarPostulacion" data-id="${postulacionActual.getId()}">Aceptar</button>
                        <button class="btnRechazarPostulacion" data-id="${postulacionActual.getId()}">Rechazar</button>
                    </td>
                </tr>
            `;
    }


    let botonesAceptar = document.querySelectorAll(".btnAceptarPostulacion");
    //LOS RECORREMOS Y CUANDO CONCIDEN CON LOS QUE HICIMOS CLICK LO RECONOCEMOS .( O NO SE COM LLAMARLO PERO COMO QUE NOS DAMOS CUENTA QUE ES EL , CAPAZ SE EEJCUTA O ESCUCHA )
    for (let i = 0; i < botonesAceptar.length; i++) {
        botonesAceptar[i].addEventListener("click", aceptarPostulacion);
    }

    let botonesRechazar = document.querySelectorAll(".btnRechazarPostulacion");

    for (let i = 0; i < botonesRechazar.length; i++) {
        botonesRechazar[i].addEventListener("click", rechazarPostulacion);
    }
}

// Procesa la aceptación de una postulación.
function aceptarPostulacion() {
    let idPostulacion = this.getAttribute("data-id");

    let mensaje = sistema.procesarPostulacion(idPostulacion, "Aceptada");

    document.querySelector("#pPostulacionesPendientes").innerHTML = mensaje;

    mostrarPostulacionesPendientes();
}

// Procesa el rechazo de una postulación.
function rechazarPostulacion() {
    let idPostulacion = this.getAttribute("data-id");

    let mensaje = sistema.procesarPostulacion(idPostulacion, "Rechazada");

    document.querySelector("#pPostulacionesPendientes").innerHTML = mensaje;

    mostrarPostulacionesPendientes();
}
//VIEW ADMIN
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

//FUNCIONES DE irA

function volverAdmin(){
    irA("view-table-ofertas-admin", initListadoOfertasAdmin);
}


function cerrarSesionAdmin() {
    sistema.cerrarSesion();
    irA("view-login", initLogin);
}

function crearOferta(){
     irA("view-crear-oferta", initCrearOferta);
}

function listadoOfertasAdmin (){
     irA("view-table-ofertas-admin", initListadoOfertasAdmin);
}

function postulacionesPendientesAdmin (){
     irA("view-postulaciones-pendientes", initPostulacionesPendientesAdmin);

}

function estadisticas (){
     irA("view-estadisticas-admin", initEstadistica);

}




//VIEW CREAR OFERTA


function initCrearOferta(){

    initAdmin();
    let btnGuardarOferta = document.querySelector("#btnGuardarOferta");
    let btnVolverMenuAdmin = document.querySelector("#btnVolverMenuAdmin1");

    btnGuardarOferta.addEventListener("click", guardarOferta);
    btnVolverMenuAdmin.addEventListener("click", volverAdmin);
}

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


//VIEW ESTADISTICA


function initEstadistica() {
    initAdmin();

    let txtBuscarOfertaEstadistica = document.querySelector("#txtBuscarOfertaEstadistica");
    let btnBuscarOfertaEstadistica = document.querySelector("#btnBuscarOfertaEstadistica");
    let btnVolverMenuAdmin4 = document.querySelector("#btnVolverMenuAdmin4");


    btnBuscarOfertaEstadistica.addEventListener("click", buscarOfertaEstadistica);

    btnVolverMenuAdmin4.addEventListener("click", volverAdmin);

    mostrarOfertaEstadistica();
    mostrarTotalesEstadistica();
    porcentaje();
    postulanteMasPostulacionesActivas();
}

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


// le estoy poneindo id a todo en las tablas para probar despues lo sacamoss

function buscarOfertaEstadistica() {
    let txtBuscarOfertaEstadistica = document.querySelector("#txtBuscarOfertaEstadistica");
    let textoBuscado = txtBuscarOfertaEstadistica.value.toLowerCase().trim();

    mostrarOfertaEstadistica(textoBuscado);

}

function mostrarTotalesEstadistica() {

    let tbodyTotalOfertasPorEstado = document.querySelector("#tbodyTotalOfertasPorEstado");

    tbodyTotalOfertasPorEstado.innerHTML = "";


    let totales = sistema.obtenerTotalesOfertasPorEstado();

    tbodyTotalOfertasPorEstado.innerHTML=`
    <tr>
        <td>${totales.activas}</td>
        <td>${totales.inactivas} </td>
        <td>${totales.cerradas}</td>
    </tr>`;
}

function porcentaje() {

    let pPorcentajeVacantesCubiertas = document.querySelector("#pPorcentajeVacantesCubiertas");

    let porcentaje = sistema.obtenerPorcentajeVacantesCubiertas();

    pPorcentajeVacantesCubiertas.innerHTML = `${porcentaje}%`;

}

function postulanteMasPostulacionesActivas() {

    let pPostulanteMasPostulaciones = document.querySelector("#pPostulanteMasPostulaciones");

    let resultado = sistema.obtenerPostulanteMasPostulacionesActivas();

    pPostulanteMasPostulaciones.innerHTML =
        `El postulante con más postulaciones activas es ${resultado.postulante.nombre}, tiene ${resultado.cantidad} postulaciones activas`;
}

//VIEW LISTADO

function initListadoOfertasAdmin() {
    initAdmin();

    let btnVolverMenuAdmin2 = document.querySelector("#btnVolverMenuAdmin2");

    mostrarListadoOfertasAdmin();

    btnVolverMenuAdmin2.addEventListener("click", volverAdmin);

}

function mostrarListadoOfertasAdmin (){

    let tabla = document.querySelector("#tbodyListadoOfertasAdmin");

    tabla.innerHTML = "";

// le pongo esto para que me muestre un error en caso de que este vacio

let ofertas = sistema.obtenerTodasLasOfertas();

if (ofertas.length === 0) {
    tabla.innerHTML = `<tr><td colspan="8">No hay ofertas registradas</td></tr>`;
}

    for(let i = 0; i < ofertas.length; i++){

//aca aplico el operador ternario
    let ofertaActual = ofertas[i];

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

    // como los botones se repiten uso querySelectorAll para traerlos todos
    let botonesEditar = document.querySelectorAll(".btnEditarOferta");
    let botonesCerrar = document.querySelectorAll(".btnCerrarOferta");

// recorro todos los botones editar y les asigno el evento click
    for(let i = 0; i < botonesEditar.length; i++ ){
        botonesEditar[i].addEventListener("click", procesarEditarOferta);

    }

// recorro todos los botones cerrar y les asigno el evento click
    for(let i = 0; i < botonesCerrar.length; i++){
        botonesCerrar[i].addEventListener("click", procesarCierreOferta);

    }

}

function procesarCierreOferta() {

    let idOferta = this.getAttribute("data-id");

    sistema.cerrarOfertaPorId(idOferta);

    mostrarListadoOfertasAdmin();
}

// guardo temporalmente el id de la oferta que estoy editando
let idOfertaEditando = "";


function procesarEditarOferta(){

    // guardo el id de la oferta seleccionada para usarlo en la pantalla de editar
    idOfertaEditando = this.getAttribute("data-id");

    irA("view-editar-oferta", initEditarOferta);
}

// Aca traigo los datos que ya tenia la oferta y los muestro en los inputs
// para que el admin pueda cambiar solo lo que quiera.
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


function guardarCambiosOferta(){

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

    sistema.editarOfertaPorId(
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

    idOfertaEditando = "";
    irA("view-table-ofertas-admin", initListadoOfertasAdmin);
}

// Cancela la edición: limpia el id de la oferta que se estaba editando
// y vuelve al listado sin realizar cambios.

function cancelarEditarOferta(){
    idOfertaEditando = "";
    irA("view-table-ofertas-admin", initListadoOfertasAdmin);
}

//VIEW POSTULACIONES PENDIENTES 

function initPostulacionesPendientesAdmin() {
    initAdmin();

    let btnVolverMenuAdmin3 = document.querySelector("#btnVolverMenuAdmin3");


    mostrarPostulacionesPendientes();

    btnVolverMenuAdmin3.addEventListener("click", volverAdmin);
}

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
    
//BUSCAMOS TODOS LOS BOTONES QUE CREAMOS DE FORMA DINAMICA 
    let botonesAceptar = document.querySelectorAll(".btnAceptarPostulacion");
//LOS RECORREMOS Y CUANDO CONCIDEN CON LOS QUE HICIMOS CLICK LO RECONOCEMOS .( O NO SE COM LLAMARLO PERO COMO QUE NOS DAMOS CUENTA QUE ES EL , CAPAZ SE EEJCUTA O ESCUCHA )
    for (let i = 0; i < botonesAceptar.length; i++) {
        botonesAceptar[i].addEventListener("click", aceptarPostulacion);
    }

    let botonesRechazar = document.querySelectorAll(".btnRechazarPostulacion");

    for (let i = 0; i < botonesRechazar.length; i++) {
        botonesRechazar[i].addEventListener("click", rechazarPostulacion);
    }
    // todo esto dentro del metodo ya que genere la tabla y sin los botones dentro no funcionarian bien ( creo yo no lo probe y no lo pienso probar ya que me anda asi ajaj)
}
// ta esto es simple , con el id de data id actualizo la tabla, tipo cambiamos el estado 
function aceptarPostulacion() {
    let idPostulacion = this.getAttribute("data-id");

    let mensaje = sistema.aceptarPostulacion(idPostulacion);

    document.querySelector("#pPostulacionesPendientes").innerHTML = mensaje;

    mostrarPostulacionesPendientes();
}
//lo mismo pero para que el estado sea rechazado 
function rechazarPostulacion() {
    let idPostulacion = this.getAttribute("data-id");

    let mensaje = sistema.rechazarPostulacion(idPostulacion);

    document.querySelector("#pPostulacionesPendientes").innerHTML = mensaje;

    mostrarPostulacionesPendientes();
}





/*

validacion tercisario 
una condicion ? si es verdaderi o si es falfo
lo uso para el true or false

num > 5 ? "aprobo":"desaprobo"

hago un if para cuando este vacia mi lista es decir que no haya tareas

yo voy a agregar un atrivuto llamado data id que su valor va a ser el id del elemento 

el numero de id no va en las tablas uso data-id data id NO ES ALGO RESERVADO, ES UN NOMBRE QUE ELIGIO EL PROFEEE

VIVE ADENTROOO DE MI FUNCION

el data id es para que al recorrer eso igualarlo y me guardo el data id

como no le puedo poner id le tengo que poner una claseee

yo necesito un dato que se pueda repetirrr, en este caso seria una clase, uso document.querryselectorall "."

hay que tener a alguien logeado para generar una tarea tipo como que logeo a lguien meto a toas las precargas y lo delogueo

this me devuele que devolvio


luego de que cambio a comletado despues set atrivute y lo deshabilito

HAY QUE CAMBIAR TODO Y PONER TODO EN SISTEMA


*/
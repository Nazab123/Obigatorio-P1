function initPostulante(){
    let btnVerOfertas = document.querySelector("#btnVerOfertas");
    let btnVerMisPostulaciones = document.querySelector("#btnVerMisPostulaciones");
    let btnVerOfertasDestacadas = document.querySelector("#btnVerOfertasDestacadas");
    let btnCerrarSesionPostulante = document.querySelector("#btnCerrarSesionPostulante"); 
    
    
    
    btnVerOfertas.addEventListener("click", verOfertas);
    btnVerMisPostulaciones.addEventListener("click", verMisPostulaciones);
    btnVerOfertasDestacadas.addEventListener("click", verOfertasDestacadas);
    btnCerrarSesionPostulante.addEventListener("click", cerrarSesionPostulante);
}

function cerrarSesionPostulante() {
    sistema.cerrarSesion();
    irA("view-login", initLogin);
}

function verOfertas() {
    irA("view-ofertas-postulante", initOfertasPostulante);
}

function verMisPostulaciones() {
    irA("view-mis-postulaciones", initMisPostulaciones);
}

function verOfertasDestacadas() {
    irA("view-ofertas-destacadas", initOfertasDestacadas);
}

function volverMenuPostulante() {
    irA("view-ofertas-postulante", initOfertasPostulante);
}

function initMisPostulaciones() {
    initPostulante();
    let btnVolverMenuPostulante2 = document.querySelector("#btnVolverMenuPostulante2");

    mostrarMisPostulaciones();

    btnVolverMenuPostulante2.addEventListener("click", volverMenuPostulante);
}

function mostrarMisPostulaciones() {
    let tabla = document.querySelector("#tbodyListadoMisPos");

    tabla.innerHTML = "";
    //llamo al metodo desde aca y loguardo en una variable ( para recorrer unicamente las postu de los logueados y no todas las postu)
    let misPostulaciones = sistema.obtenerMisPostulaciones(sistema.usuarioLogueado);

    for(let i = 0; i < misPostulaciones.length; i++){
        let postulacionActual = misPostulaciones[i];

        tabla.innerHTML += `
                <tr>
                    <td>${postulacionActual.getId()}</td>
                    <td>${postulacionActual.ofertaLaboral.titulo}</td>
                    <td>${postulacionActual.ofertaLaboral.empresa}</td>
                    <td>${postulacionActual.ofertaLaboral.nivel}</td>
                    <td>${postulacionActual.ofertaLaboral.area}</td>
                    <td>${postulacionActual.ofertaLaboral.destacada ? "⭐" : "-"}</td>
                    <td>${postulacionActual.estado}</td>
                </tr>
            `;
        
        }

    }

function initOfertasDestacadas() {
    initPostulante();
    let btnVolverMenuPostulante3 = document.querySelector("#btnVolverMenuPostulante3");

    mostrarOfertasDestacadas();

    btnVolverMenuPostulante3.addEventListener("click", volverMenuPostulante);
}

function mostrarOfertasDestacadas() {

    let tabla = document.querySelector("#tbodyListadoDestacadas");

    tabla.innerHTML = "";

    let ofertasDestacadas = sistema.obtenerOfertasParaTablaDestacadas(sistema.usuarioLogueado);

    for (let i = 0; i < ofertasDestacadas.length; i++) {

        let ofertaActual = ofertasDestacadas[i];

        tabla.innerHTML += `
            <tr>
                <td>${ofertaActual.titulo}</td>
                <td>${ofertaActual.empresa}</td>
                <td>${ofertaActual.nivel}</td>
                <td>${ofertaActual.area}</td>
                <td>⭐</td>
                <td>${ofertaActual.descripcion}</td>
                <td>${ofertaActual.getEstado()}</td>
                        <td>
                        <button class="btnPostularme" data-id="${ofertaActual.getId()}">
                            Postularme
                        </button>
                    </td>
            </tr>
        `;
    }
    let btnsPostularme = document.querySelectorAll(".btnPostularme");

    for(let i = 0; i < btnsPostularme.length; i++){
        btnsPostularme[i].addEventListener("click", hacerPostulacionDestacada);
    }
}

function hacerPostulacionDestacada() {
    let idOferta = this.getAttribute("data-id");
    let respuesta = sistema.postularsePorId(sistema.usuarioLogueado, idOferta);
    document.querySelector("#pOfertasDestacadas").innerHTML = respuesta;

    mostrarOfertasDestacadas();
}


function initOfertasPostulante(){
    initPostulante();
    let btnVolverMenuPostulante1 = document.querySelector("#btnVolverMenuPostulante1");
    let btnAplicarFiltroOfertas = document.querySelector("#btnAplicarFiltroOfertas");

    // esto es para que por defecto muestre primero el area postulante
    mostrarOfertasPostulante("area");

    btnAplicarFiltroOfertas.addEventListener("click", aplicarFiltroOfertas);
    btnVolverMenuPostulante1.addEventListener("click", volverMenuPostulante);
}

function aplicarFiltroOfertas(){
    let filtro = document.querySelector("#slcFiltroOfertas").value;

    mostrarOfertasPostulante(filtro);
}

function mostrarOfertasPostulante(filtro){
    let listadoOfertas = document.querySelector("#tbodyListadoOfertasPostulante");
    
    listadoOfertas.innerHTML ="";


let ofertasTabla = sistema.obtenerOfertasParaPostulante(sistema.usuarioLogueado, filtro);

for (let i = 0; i < ofertasTabla.length; i++) {
    let ofertaActual = ofertasTabla[i];

    listadoOfertas.innerHTML += `
        <tr>
            <td>${ofertaActual.getId()}</td>
            <td>${ofertaActual.titulo}</td>
            <td>${ofertaActual.empresa}</td>
            <td>${ofertaActual.nivel}</td>
            <td>${ofertaActual.area}</td>
            <td>${ofertaActual.destacada ? "⭐" : "-"}</td>
            <td>${ofertaActual.getEstado()}</td>
            <td>
                <button class="btnPostularme" data-id="${ofertaActual.getId()}">
                    Postularme
                </button>
            </td>
        </tr>`;
}

    let btnsPostularme = document.querySelectorAll(".btnPostularme");

    for(let i = 0; i < btnsPostularme.length; i++){
        btnsPostularme[i].addEventListener("click", hacerPostulacion);
    }
}


function hacerPostulacion() {
    let idOferta = this.getAttribute("data-id");

    let respuesta = sistema.postularsePorId(sistema.usuarioLogueado, idOferta);
    document.querySelector("#pOfertasPostulante").innerHTML = respuesta;

    aplicarFiltroOfertas();
}

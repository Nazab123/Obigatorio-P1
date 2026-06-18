function initOfertasPostulante(){
    initPostulante();
    let btnVolverMenuPostulante1 = document.querySelector("#btnVolverMenuPostulante1");
    let btnAplicarFiltroOfertas = document.querySelector("#btnAplicarFiltroOfertas");

    // esto es para que por defecto muestre primero el area postulante
    mostrarOfertasPostulante("todas");

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

    for(let i = 0; i < sistema.ofertas.length; i++){
        let ofertaActual = sistema.ofertas[i];

        let cumpleFiltroArea = true;

        if(filtro === "area" && ofertaActual.area !== sistema.usuarioLogueado.area){
            cumpleFiltroArea = false;
        }

        if(
            cumpleFiltroArea &&
            ofertaActual.getEstado() === "Activa" &&
            sistema.expCompatible(sistema.usuarioLogueado, ofertaActual) &&
            !sistema.yaSePostulo(sistema.usuarioLogueado, ofertaActual) &&
            sistema.contarPostulacionesOferta(ofertaActual) < ofertaActual.limitePostulaciones
        ){
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
    }

    let btnsPostularme = document.querySelectorAll(".btnPostularme");

    for(let i = 0; i < btnsPostularme.length; i++){
        btnsPostularme[i].addEventListener("click", hacerPostulacion);
    }
}


// pongo el comentario aca abajo porque dentro no me deja ,cambia la creacion de la lista postulantes  y agregue lo de data id replicando lo que hizo el profesor en el toDo <button class="btnPostularme" data-id="${ofertaActual.getId()}">Postularme</button>

function hacerPostulacion(){
    let idOferta = this.getAttribute("data-id");
    let ofertaSeleccionada = sistema.findOfertaById(idOferta);
    let respuesta = sistema.postularse(sistema.usuarioLogueado,ofertaSeleccionada);

    //despues hay que sacar tus alert
    alert(respuesta);

}

function volverMenuPostulante() {
    irA("view-postulante", initPostulante);
}
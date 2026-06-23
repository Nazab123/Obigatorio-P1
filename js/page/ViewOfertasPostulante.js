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

    /* 
    en sistema hago una funcion que me traiga un array ya validado de todas las postulaciones con las validaciones 
    de postulante y en esa misma le paso un parametro true of false que me diga si es detacada o no
    entonces queda una funcion sola
    */


let ofertasTabla = sistema.obtenerOfertasParaPostulante(sistema.usuarioLogueado, filtro);

for (let i = 0; i < ofertasTabla.length; i++) {
    let ofertaActual = ofertasTabla[i];

    {
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


function hacerPostulacion() {
    let idOferta = this.getAttribute("data-id");

    let respuesta = sistema.postularsePorId(sistema.usuarioLogueado, idOferta);
    document.querySelector("#pOfertasPostulante").innerHTML = respuesta;

    aplicarFiltroOfertas();
}

function volverMenuPostulante() {
    irA("view-ofertas-postulante", initOfertasPostulante);
}
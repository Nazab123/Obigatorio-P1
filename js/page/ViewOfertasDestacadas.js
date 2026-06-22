function initOfertasDestacadas() {
    initPostulante();
    let btnVolverMenuPostulante3 = document.querySelector("#btnVolverMenuPostulante3");

    mostrarOfertasDestacadas();

    btnVolverMenuPostulante3.addEventListener("click", volverMenuPostulante);
}

function mostrarOfertasDestacadas() {

    let tabla = document.querySelector("#tbodyListadoDestacadas");

    tabla.innerHTML = "";

    let ofertasDestacadas = sistema.obtenerOfertasDestacadas();

    for (let i = 0; i < ofertasDestacadas.length; i++) {

        let ofertaActual = ofertasDestacadas[i];

        tabla.innerHTML += `
            <tr>
                <td>${ofertaActual.titulo}</td>
                <td>${ofertaActual.empresa}</td>
                <td>${ofertaActual.nivel}</td>
                <td>${ofertaActual.area}</td>
                <td>⭐</td>
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
        btnsPostularme[i].addEventListener("click", hacerPostulacion);
    }
}


function volverMenuPostulante() {
    irA("view-ofertas-postulante", initOfertasPostulante);
}
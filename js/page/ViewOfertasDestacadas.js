function initOfertasDestacadas() {
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
            </tr>
        `;
    }
}

function volverMenuPostulante() {
    irA("view-postulante", initPostulante);
}
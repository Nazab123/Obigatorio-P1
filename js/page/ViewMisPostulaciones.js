function initMisPostulaciones() {
    let btnVolverMenuPostulante2 = document.querySelector("#btnVolverMenuPostulante2");
    mostrarMispostulaciones();
    btnVolverMenuPostulante2.addEventListener("click", volverMenuPostulante);
}

function volverMenuPostulante(){
    irA("view-admin", initMisPostulaciones);
}

function mostrarMispostulaciones() {

    let tabla = document.querySelector("#tbodyListadoOfertasAdmin");

    tabla.innerHTML = "";

    for(let i = 0; i < sistema.ofertas.length; i++){

    let ofertaActual = sistema.ofertas[i];

        tabla.innerHTML += `
            <tr>
                <td>${ofertaActual.getId()}</td>
                <td>${ofertaActual.titulo}</td>
                <td>${ofertaActual.empresa}</td>
                <td>${ofertaActual.nivel}</td>
                <td>${ofertaActual.area}</td>
                <td>${ofertaActual.destacada}</td>
                <td>${ofertaActual.getEstado()}</td>
                <td>
                    <button>Editar</button>
                    <button class='btnCerrarOferta'>Cerrar</button>
                </td>
            </tr>
        `;
    }
}



    
    
function initListadoOfertasAdmin() {

    let btnVolverMenuAdmin2 = document.querySelector("#btnVolverMenuAdmin2");

    mostrarListadoOfertasAdmin();

    btnVolverMenuAdmin2.addEventListener("click", volverAdmin);
}

function volverAdmin(){
    irA("view-admin", initAdmin);
}

function mostrarListadoOfertasAdmin (){

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
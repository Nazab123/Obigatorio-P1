

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

//todo esto es solo la vista , la funcionabilidad e informacion viene del metodo que esta en sistemas ( asi pidio el profe las cosas , es bastane complejo pensarlo a vecs pero ta .)
function volverMenuPostulante() {
    irA("view-ofertas-postulante", initOfertasPostulante);
}
//CHECKEAR ESTO ME CANSE Y SE ME SATURO LA MENTE A ESTA HORA 22:00
// para esto hay que buscar pustulanteActual dentro de la oferta laboral y luego si  en titulo , empresa  nivel , area , destacada  y estado .

    
    
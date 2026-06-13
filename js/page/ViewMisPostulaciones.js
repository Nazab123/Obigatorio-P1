

function initMisPostulaciones() {
    let btnVolverMenuPostulante2 = document.querySelector("#btnVolverMenuPostulante2");

    mostrarMispostulaciones();

    btnVolverMenuPostulante2.addEventListener("click", volverMenuPostulante);
}

function mostrarMispostulaciones() {
    let tabla = document.querySelector("#tbodyListadoMisPos");

    tabla.innerHTML = "";

    for(let i = 0; i < sistema.postulaciones.length; i++){
        let postulacionActual = sistema.postulaciones[i];

        if(postulacionActual.postulante === sistema.usuarioLogueado){

            tabla.innerHTML += `
                <tr>
                    <td>${postulacionActual.getId()}</td>
                    <td>${postulacionActual.ofertaLaboral.titulo}</td>
                    <td>${postulacionActual.ofertaLaboral.empresa}</td>
                    <td>${postulacionActual.ofertaLaboral.nivel}</td>
                    <td>${postulacionActual.ofertaLaboral.area}</td>
                    <td>${postulacionActual.ofertaLaboral.destacada}</td>
                    <td>${postulacionActual.estado}</td>
                </tr>
            `;
        }
    }
}

function volverMenuPostulante(){
    irA("view-postulante", initPostulante);
}

//CHECKEAR ESTO ME CANSE Y SE ME SATURO LA MENTE A ESTA HORA 22:00
// para esto hay que buscar pustulanteActual dentro de la oferta laboral y luego si  en titulo , empresa  nivel , area , destacada  y estado .

    
    
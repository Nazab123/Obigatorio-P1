function initOfertasPostulante(){
    let btnVolverMenuPostulante1 = document.querySelector("#btnVolverMenuPostulante1");
    mostrarOfertasPostulante();
    btnVolverMenuPostulante1.addEventListener("click", volverMenuPostulante);
}

function mostrarOfertasPostulante(){
    let listadoOfertas = document.querySelector("#divListadoOfertas");
    
    listadoOfertas.innerHTML ="";

    for(let i = 0; i< sistema.ofertas.length; i++){
        let ofertaActual = sistema.ofertas[i];
        if(ofertaActual.getEstado()=== "Activa"){
            listadoOfertas.innerHTML += `
                <div>
                    <h3>${ofertaActual.titulo}</h3>
                    <p><strong>Empresa:</strong> ${ofertaActual.empresa}</p>
                    <p><strong>Área:</strong> ${ofertaActual.area}</p>
                    <p><strong>Nivel:</strong> ${ofertaActual.nivel}</p>
                    <p><strong>Descripción:</strong> ${ofertaActual.descripcion}</p>
                    <p><strong>Vacantes:</strong> ${ofertaActual.cantidadVacantes}</p>
                    <button>Postularme</button>
                    <hr>
                </div>`;
        }
    }
}


function volverMenuPostulante() {
    irA("view-postulante", initPostulante);
}
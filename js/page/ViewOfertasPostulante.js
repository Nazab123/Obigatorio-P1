function initOfertasPostulante(){
    let btnVolverMenuPostulante1 = document.querySelector("#btnVolverMenuPostulante1");
    mostrarOfertasPostulante();
    btnVolverMenuPostulante1.addEventListener("click", volverMenuPostulante);
}

function mostrarOfertasPostulante(){
    let listadoOfertas = document.querySelector("#tbodyListadoOfertasPostulante");
    
    listadoOfertas.innerHTML ="";

    for(let i = 0; i< sistema.ofertas.length; i++){
        let ofertaActual = sistema.ofertas[i];

        //CAMBIE LA CONDICION DE ESTE IF PORQUE AGREGUE METODOS EN SISTEMAS PARA QUE MUESTRE SOLO LAS POSTULACIONES A LAS CUALES SU expCompatible  sea ( ese es el nombre de mi metodo ).Entre otras .
        if(ofertaActual.getEstado() === "Activa" &&sistema.expCompatible(sistema.usuarioLogueado, ofertaActual) && !sistema.yaSePostulo(sistema.usuarioLogueado, ofertaActual) && sistema.contarPostulacionesOferta(ofertaActual) < ofertaActual.limitePostulaciones){

                listadoOfertas.innerHTML += `
                <tr>
        <td>${ofertaActual.getId()}</td>
        <td>${ofertaActual.titulo}</td>
        <td>${ofertaActual.empresa}</td>
        <td>${ofertaActual.nivel}</td>
        <td>${ofertaActual.area}</td>
        <td>${ofertaActual.destacada}</td>
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
    //aca voy a usar el ALL del profesor 
for(let i =0; i < btnsPostularme.length;i ++){
    btnsPostularme[i].addEventListener("click", hacerPostulacion );
}

}
// pongo el comentario aca abajo porque dentro no me deja ,cambia la creacion de la lista postulantes  y agregue lo de data id replicando lo que hizo el profesor en el toDo <button class="btnPostularme" data-id="${ofertaActual.getId()}">Postularme</button>

function hacerPostulacion(){
    let idOferta = this.getAttribute("data-id");
    let ofertaSeleccionada = sistema.findOfertaById(idOferta);
    let respuesta = sistema.postularse(sistema.usuarioLogueado,ofertaSeleccionada);

    alert(respuesta);

    mostrarOfertasPostulante();



}

function volverMenuPostulante() {
    irA("view-postulante", initPostulante);
}
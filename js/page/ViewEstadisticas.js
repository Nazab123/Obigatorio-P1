function initEstadistica() {

    let txtBuscarOfertaEstadistica = document.querySelector("#txtBuscarOfertaEstadistica");
    let btnBuscarOfertaEstadistica = document.querySelector("#btnBuscarOfertaEstadistica");

    let pTotalOfertasPorEstado = document.querySelector("#pTotalOfertasPorEstado");
    let pPorcentajeVacantesCubiertas = document.querySelector("#pPorcentajeVacantesCubiertas");
    let pPostulanteMasPostulaciones = document.querySelector("#pPostulanteMasPostulaciones");

    let btnVolverMenuAdmin4 = document.querySelector("#btnVolverMenuAdmin4");


    btnBuscarOfertaEstadistica.addEventListener("click", buscarOfertaEstadistica);

    btnVolverMenuAdmin4.addEventListener("click", volverAdmin);

    mostrarOfertaEstadistica()
}

function volverAdmin() {
    irA("view-admin", initAdmin);
}

function mostrarOfertaEstadistica() {

    let tabla = document.querySelector("#tbodyPostulacionesPorOferta")

    tabla.innerHTML = "";



    if (sistema.ofertas.length === 0) {
    tabla.innerHTML = `<tr><td colspan="5">No hay ofertas registradas</td></tr>`;}

    for(let i = 0; i < sistema.ofertas.length; i++){
        let OfertaActual = sistema.ofertas[i];

    let pendientes = 0
    let aceptadas = 0
    let rechazadas = 0

    for (let j = 0; j < sistema.postulaciones.length; j++){

        let postulacionActual = sistema.postulaciones[j];

        if (OfertaActual === postulacionActual.ofertaLaboral){

        if(postulacionActual.estado === "pendiente"){
            pendientes++
        } else if (postulacionActual.estado === "aceptada"){
            aceptadas++
        } else if (postulacionActual.estado === "rechazada"){
            rechazadas ++
        }

        }
    }



        tabla.innerHTML += `
        <tr>
            <td>${OfertaActual.titulo}</td>
            <td>${pendientes}</td>
            <td>${aceptadas}</td>
            <td>${rechazadas}</td>
            <td>${pendientes + aceptadas + rechazadas}</td>        
        </tr>
        `
    }
}


/* 
<h3>Postulaciones por oferta</h3>

<table>
    <thead>
        <tr>
            <th>Título de la oferta</th>
            <th>Pendientes</th>
            <th>Aceptadas</th>
            <th>Rechazadas</th>
            <th>Total</th>
        </tr>
    </thead>

    <tbody id="tbodyPostulacionesPorOferta">

    </tbody>
</table>
 */



// le estoy poneindo id a todo en las tablas para probar despues lo sacamoss

function buscarOfertaEstadistica(){

}

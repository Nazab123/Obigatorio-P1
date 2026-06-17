function initEstadistica() {

    let txtBuscarOfertaEstadistica = document.querySelector("#txtBuscarOfertaEstadistica");
    let btnBuscarOfertaEstadistica = document.querySelector("#btnBuscarOfertaEstadistica");
    let pTotalOfertasPorEstado = document.querySelector("#pTotalOfertasPorEstado");
    let btnVolverMenuAdmin4 = document.querySelector("#btnVolverMenuAdmin4");


    btnBuscarOfertaEstadistica.addEventListener("click", buscarOfertaEstadistica);

    btnVolverMenuAdmin4.addEventListener("click", volverAdmin);

    mostrarOfertaEstadistica();
    mostrarTotalesEstadistica();
    porcentaje();
    postulanteMasPostulacionesActivas();
}

function volverAdmin() {
    irA("view-admin", initAdmin);
}


//ESTO ESTA BIEN ASI ? LO HICE CON EL TEXTO QUE TENEMOS DEL HTML PERO A CHECK
function mostrarOfertaEstadistica(textoBuscado = "") {

    let tabla = document.querySelector("#tbodyPostulacionesPorOferta")

    tabla.innerHTML = "";



    if (sistema.ofertas.length === 0) {
        tabla.innerHTML = `<tr><td colspan="5">No hay ofertas registradas</td></tr>`;
    }

    for (let i = 0; i < sistema.ofertas.length; i++) {
        let OfertaActual = sistema.ofertas[i];

        if (!OfertaActual.titulo.toLowerCase().includes(textoBuscado)) {
            continue;
        }

        let pendientes = 0
        let aceptadas = 0
        let rechazadas = 0

        for (let j = 0; j < sistema.postulaciones.length; j++) {

            let postulacionActual = sistema.postulaciones[j];

            if (OfertaActual === postulacionActual.ofertaLaboral) {

                if (postulacionActual.estado === "pendiente") {
                    pendientes++
                } else if (postulacionActual.estado === "aceptada") {
                    aceptadas++
                } else if (postulacionActual.estado === "rechazada") {
                    rechazadas++
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

function buscarOfertaEstadistica() {
    let txtBuscarOfertaEstadistica = document.querySelector("#txtBuscarOfertaEstadistica");
    let textoBuscado = txtBuscarOfertaEstadistica.value.toLowerCase().trim();

    mostrarOfertaEstadistica(textoBuscado);

}


function mostrarTotalesEstadistica() {

    let pTotalOfertasPorEstado = document.querySelector("#pTotalOfertasPorEstado");

    let activas = 0;
    let inactivas = 0;
    let cerradas = 0;




    // voy a proseguir con un for y esa manos , dejo este comentario para continuar en clase
    for (let i = 0; i < sistema.ofertas.length; i++) {
        let OfertaActual = sistema.ofertas[i];

        if (OfertaActual.getEstado() === "Activa") {
            activas++;
        } else if (OfertaActual.getEstado() === "Inactiva") {
            inactivas++;
        } else if (OfertaActual.getEstado() === "Cerrada") {
            cerradas++;
        }
    }
    pTotalOfertasPorEstado.innerHTML = `Activas: ${activas} | Inactivas: ${inactivas} | Cerradas: ${cerradas}`;
}

// check si el formato es este o se pide estilo tabla 
//faltan 2 metodos mas , el del porcentaje y otro que no se cual es

function porcentaje() {
    let pPorcentajeVacantesCubiertas = document.querySelector("#pPorcentajeVacantesCubiertas");

    let vacantesCubietas = 0;
    let cantidadVacantes = 0;


    for (i=0; i < sistema.ofertas.length; i++){
        let ofetaVer=sistema.ofertas[i]

        cantidadVacantes += Number(ofetaVer.cantidadVacantes)
    }
    for (i=0; i < sistema.postulaciones.length; i++){
        let postulacionVer=sistema.postulaciones[i]


        if(postulacionVer.estado === "aceptada"){
            vacantesCubietas++

        }
    }

    pPorcentajeVacantesCubiertas.innerHTML = `${vacantesCubietas*100/cantidadVacantes}%`;


}

function postulanteMasPostulacionesActivas(){

    let pPostulanteMasPostulaciones = document.querySelector("#pPostulanteMasPostulaciones");

    let postulanteMayor = null;
    let mayorCantidad = 0;

    sistema.postulantes.forEach(function(postulanteActual){

        let cantidad = 0;

        sistema.postulaciones.forEach(function(postulacionActual){

            if(postulacionActual.postulante === postulanteActual && postulacionActual.ofertaLaboral.estado === "ctiva"){
                cantidad++;

            }
        });

        if(cantidad > mayorCantidad){
            mayorCantidad = cantidad
            postulanteMayor = postulanteActual
        }
    })

    pPostulanteMasPostulaciones.innerHTML = `el postulante con más postulaciones activas es ${postulanteMayor}, tiene ${mayorCantidad} postulaciones activas`

    //esto no esta andando pero no lo toques que ya lo agrego

}
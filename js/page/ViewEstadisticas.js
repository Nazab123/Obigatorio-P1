function initEstadistica() {

    let txtBuscarOfertaEstadistica = document.querySelector("#txtBuscarOfertaEstadistica");
    let btnBuscarOfertaEstadistica = document.querySelector("#btnBuscarOfertaEstadistica");

    let divTablaPostulacionesPorOferta = document.querySelector("#divTablaPostulacionesPorOferta");

    let pTotalOfertasPorEstado = document.querySelector("#pTotalOfertasPorEstado");
    let pPorcentajeVacantesCubiertas = document.querySelector("#pPorcentajeVacantesCubiertas");
    let pPostulanteMasPostulaciones = document.querySelector("#pPostulanteMasPostulaciones");

    let btnVolverMenuAdmin4 = document.querySelector("#btnVolverMenuAdmin4");


    btnBuscarOfertaEstadistica.addEventListener("click", buscarOfertaEstadistica);

    btnVolverMenuAdmin4.addEventListener("click", volverAdmin);

}

function volverAdmin() {
    irA("view-admin", initAdmin);
}

function buscarOfertaEstadistica() {

}
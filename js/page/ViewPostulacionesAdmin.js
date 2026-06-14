function initPostulacionesPendientesAdmin() {

    let divPostulacionesPendientes = document.querySelector("#divPostulacionesPendientes");

    let pPostulacionesPendientes = document.querySelector("#pPostulacionesPendientes");

    let btnVolverMenuAdmin3 = document.querySelector("#btnVolverMenuAdmin3");


    mostrarPostulacionesPendientes();

    btnVolverMenuAdmin3.addEventListener("click", volverAdmin);
}

function volverAdmin() {
    irA("view-admin", initAdmin);
}

function mostrarPostulacionesPendientes() {
    let tabla = document.querySelector("#tbodyPostulacionesPendientes");

    tabla.innerHTML = "";

    for (let i = 0; i < sistema.postulaciones.length; i++) {
        let postulacionActual = sistema.postulaciones[i];

        if (postulacionActual.estado === "pendiente") {
            tabla.innerHTML += `
                <tr>
                    <td>${postulacionActual.getId()}</td>
                    <td>${postulacionActual.postulante.nombre}</td>
                    <td>${postulacionActual.postulante.experiencia}</td>
                    <td>${postulacionActual.postulante.area}</td>
                    <td>${postulacionActual.ofertaLaboral.titulo}</td>
                    <td>${postulacionActual.ofertaLaboral.empresa}</td>
                    <td>${postulacionActual.ofertaLaboral.nivel}</td>
                    <td>
                        <button class="btnAceptarPostulacion" data-id="${postulacionActual.getId()}">Aceptar</button>
                        <button class="btnRechazarPostulacion" data-id="${postulacionActual.getId()}">Rechazar</button>
                    </td>
                </tr>
            `;
        }
    }
//BUSCAMOS TODOS LOS BOTONES QUE CREAMOS DE FORMA DINAMICA 
    let botonesAceptar = document.querySelectorAll(".btnAceptarPostulacion");
//LOS RECORREMOS Y CUANDO CONCIDEN CON LOS QUE HICIMOS CLICK LO RECONOCEMOS .( O NO SE COM LLAMARLO PERO COMO QUE NOS DAMOS CUENTA QUE ES EL , CAPAZ SE EEJCUTA O ESCUCHA )
    for (let i = 0; i < botonesAceptar.length; i++) {
        botonesAceptar[i].addEventListener("click", aceptarPostulacion);
    }

    let botonesRechazar = document.querySelectorAll(".btnRechazarPostulacion");

    for (let i = 0; i < botonesRechazar.length; i++) {
        botonesRechazar[i].addEventListener("click", rechazarPostulacion);
    }
    // todo esto dentro del metodo ya que genere la tabla y sin los botones dentro no funcionarian bien ( creo yo no lo probe y no lo pienso probar ya que me anda asi ajaj)
}
// ta esto es simple , con el id de data id actualizo la tabla, tipo cambiamos el estado 
function aceptarPostulacion() {
    let idPostulacion = this.getAttribute("data-id");
    sistema.aceptarPostulacion(idPostulacion);
    mostrarPostulacionesPendientes();
}
//lo mismo pero para que el estado sea rechazado 
function rechazarPostulacion() {
    let idPostulacion = this.getAttribute("data-id");
    sistema.rechazarPostulacion(idPostulacion);
    mostrarPostulacionesPendientes();
}
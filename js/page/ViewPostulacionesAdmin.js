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

// llamo a mi tabla del html
    let tabla = document.querySelector("#tbodyPostulacionesPendientes")
// limpio mi tabla
    tabla.innerHTML = "";
// le agrego esto para que me muestre un mensaje si esta vacio, el colspan=8 es para como que ocupe toda la tabla
if (sistema.postulaciones.length === 0) {
    tabla.innerHTML = `<tr><td colspan="8">No hay postulaciones registradas</td></tr>`;
}

// le estoy poneindo id a todo en las tablas para probar despues lo sacamoss
    for(let i = 0; i < sistema.postulaciones.length; i++){
        let postulacionActual = sistema.postulaciones[i];

        if (postulacionActual.estado === "pendiente"){

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
        <button id='btnAceptarPostulacion'>aceptar</button>
        <button id='btnRechazarPostulacion'>Rechazar</button>
        </td>
        </tr>
        `

        }

    }
}

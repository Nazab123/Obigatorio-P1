function initCrearOferta(){
    let btnGuardarOferta = document.querySelector("#btnGuardarOferta");
    let btnVolverMenuAdmin = document.querySelector("#btnVolverMenuAdmin1");

    btnGuardarOferta.addEventListener("click", guardarOferta);
    btnVolverMenuAdmin.addEventListener("click", volverAdmin);
}

function volverAdmin(){
    irA("view-admin", initAdmin)
}

function guardarOferta() {
    let titulo = document.querySelector("#txtTituloOferta").value.trim();
    let empresa = document.querySelector("#txtEmpresaOferta").value.trim();
    let descripcion = document.querySelector("#txtDescripcionOferta").value.trim();
    let nivel = document.querySelector("#slcNivelOferta").value;
    let area = document.querySelector("#slcAreaOferta").value;
    let limitePostulaciones = Number(document.querySelector("#txtLimitePostulaciones").value);
    let cantidadVacantes = Number(document.querySelector("#txtCantidadVacantes").value);
    let destacada = document.querySelector("#slcOfertaDestacada").value;
    let pCrearOferta = document.querySelector("#pCrearOferta");

    let esDestacada = false;

    if (destacada === "si") {
        esDestacada = true;
    }

    let respuesta = sistema.crearOferta(
        titulo,
        empresa,
        descripcion,
        nivel,
        area,
        limitePostulaciones,
        cantidadVacantes,
        esDestacada
    );

    pCrearOferta.innerHTML = respuesta;
}
//  funcion para navegar entre template 

function irA(idTemplate, funcionInicio) {
    let contenedor = document.querySelector("#contenedorPrincipal");
    let template = document.querySelector("#" + idTemplate);

    contenedor.innerHTML = template.innerHTML;

    if (funcionInicio !== undefined) {//puede tomarmelo como falso cuando es 0 o no exite.
        funcionInicio();
    }
}

 
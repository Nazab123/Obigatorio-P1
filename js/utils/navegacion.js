// aca va la funcion que nos explico el profe para navegar entre template 

function irA(idTemplate, funcionInicio) {
    let contenedor = document.querySelector("#contenedorPrincipal");
    let template = document.querySelector("#" + idTemplate);

    contenedor.innerHTML = template.innerHTML;

    if (funcionInicio !== undefined) {//puede tomarmelo como falso cuando es 0 o no exite.
        funcionInicio();
    }
}

 /* por las dudas aclaro como funciona esto , es bastante simple , la funcion irA te lleva a los template , el template lo que hace es generar las  "pantallas" , no oculta nada , no estan creadas como tal .
 La funcion del if la hice a mi manera no la del profe pero funciona igualmente , creo que vas a entenderlo si lo analizas dos segundos naza .
 */
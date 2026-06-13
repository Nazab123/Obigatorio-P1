function initListadoOfertasAdmin() {

    let btnVolverMenuAdmin2 = document.querySelector("#btnVolverMenuAdmin2");

    mostrarListadoOfertasAdmin();

    btnVolverMenuAdmin2.addEventListener("click", volverAdmin);
}

function volverAdmin(){
    irA("view-admin", initAdmin);
}

function mostrarListadoOfertasAdmin (){

    let tabla = document.querySelector("#tbodyListadoOfertasAdmin");

    tabla.innerHTML = "";

// le pongo esto para que me muestre un error en caso de que este vacio
if (sistema.ofertas.length === 0) {
    tabla.innerHTML = `<tr><td colspan="8">No hay ofertas registradas</td></tr>`;
}

    for(let i = 0; i < sistema.ofertas.length; i++){

//aca aplico el operador ternario
    let ofertaActual = sistema.ofertas[i];

        tabla.innerHTML += `
            <tr>
                <td>${ofertaActual.getId()}</td>
                <td>${ofertaActual.titulo}</td>
                <td>${ofertaActual.empresa}</td>
                <td>${ofertaActual.nivel}</td>
                <td>${ofertaActual.area}</td>
                <td>${ofertaActual.destacada ? "si" : "no"}</td>
                <td>${ofertaActual.getEstado()}</td>
                <td>
                    <button>Editar</button>
                    <button class='btnCerrarOferta'>Cerrar</button>
                </td>
            </tr>
        `;
    }
}

/*

validacion tercisario 
una condicion ? si es verdaderi o si es falfo
lo uso para el true or false

num > 5 ? "aprobo":"desaprobo"

hago un if para cuando este vacia mi lista es decir que no haya tareas

yo voy a agregar un atrivuto llamado data id que su valor va a ser el id del elemento 

el numero de id no va en las tablas uso data-id data id NO ES ALGO RESERVADO, ES UN NOMBRE QUE ELIGIO EL PROFEEE

VIVE ADENTROOO DE MI FUNCION

el data id es para que al recorrer eso igualarlo y me guardo el data id

como no le puedo poner id le tengo que poner una claseee

yo necesito un dato que se pueda repetirrr, en este caso seria una clase, uso document.querryselectorall "."

hay que tener a alguien logeado para generar una tarea tipo como que logeo a lguien meto a toas las precargas y lo delogueo

this me devuele que devolvio


luego de que cambio a comletado despues set atrivute y lo deshabilito



*/
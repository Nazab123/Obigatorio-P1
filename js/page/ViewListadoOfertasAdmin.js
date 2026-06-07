function initListadoOfertasAdmin() {

    let btnVolverMenuAdmin2 = document.querySelector("#btnVolverMenuAdmin2");

    mostrarListadoOfertasAdmin();

    btnVolverMenuAdmin2.addEventListener("click", volverAdmin);
}

function volverAdmin(){
    irA("view-admin", initAdmin)
}

function mostrarListadoOfertasAdmin (){

}
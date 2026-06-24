let ofertaLaboralAutoincrement = 1;

class OfertaLaboral {

    #estado;
    #id;

    constructor(titulo, empresa, descripcion, nivel, area, limitePostulaciones, cantidadVacantes, destacada){

        this.#id = "JOB_OFFER_" + ofertaLaboralAutoincrement++;
        this.#estado = "Activa";

        this.titulo = titulo;
        this.empresa = empresa;
        this.descripcion = descripcion;
        this.nivel = nivel;
        this.area = area;
        this.limitePostulaciones = limitePostulaciones;
        this.cantidadVacantes = cantidadVacantes;
        this.destacada = destacada;
    }

    getId() { 
        return this.#id; 
    }

        getEstado() { 
        return this.#estado;
    }
/* 
cuando creo la oferta esta activa, cuando se cubre el maximo de postulaciones o se cubren todas las vacantes pasa a ser inactiva, cuando el admin la cierra manualmente se pone cerrada */
    cerrarOferta(){
        this.#estado = "Cerrada"
    }

    inactivarOferta(){
        this.#estado = "Inactiva"
    }

/*
este metodo lo uso cuando el admin edita una oferta desde el listado de ofertas.
recibe los datos nuevos y actualiza los atributos del objeto sin crear una oferta nueva.
*/
    editarOferta(titulo, empresa, descripcion, nivel, area, limitePostulaciones, cantidadVacantes, destacada) {
    this.titulo = titulo;
    this.empresa = empresa;
    this.descripcion = descripcion;
    this.nivel = nivel;
    this.area = area;
    this.limitePostulaciones = limitePostulaciones;
    this.cantidadVacantes = cantidadVacantes;
    this.destacada = destacada;
}
    
}
    
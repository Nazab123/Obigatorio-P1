let ofertaLaboralAutoincrement = 1;

class OfertaLaboral {

    #id

    constructor(titulo, empresa, descripcion, nivel, area, limitePostulaciones, cantidadVacantes, destacada){

        this.#id = "JOB_OFFER_" + ofertaLaboralAutoincrement++;

        this.titulo = titulo;
        this.empresa = empresa;
        this.descripcion = descripcion;
        this.nivel = nivel;
        this.area = area;
        this.limitePostulaciones = limitePostulaciones;
        this.cantidadVacantes = cantidadVacantes;
        this.destacada = destacada;
        this.estado = "Activa";
    }
    getId() { 
        return this.#id; 
    }
    
}

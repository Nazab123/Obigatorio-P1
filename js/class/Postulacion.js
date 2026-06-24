let postulacionAutoincrement = 1;


// como parámetro estoy dando mis 2 objetos
class Postulacion {
        #id
    constructor(postulante, ofertaLaboral){
        this.#id = `JOB_${postulacionAutoincrement}`;
        postulacionAutoincrement++;
        this.postulante = postulante;
        this.ofertaLaboral = ofertaLaboral;
        this.estado = "pendiente";
    }
    
    getId() { 
        return this.#id; 
    }
}

/*  
Postulaciones (se recomienda crear postulaciones en distintos estados 
cuidando la consistencia de los datos para luego poder realizar suficientes 
pruebas de procesamiento de postulaciones según lo descripto en la 
funcionalidad).  
*/
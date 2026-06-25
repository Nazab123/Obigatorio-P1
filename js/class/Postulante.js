let postulanteAutoincrement = 1;

class Postulante {
    #id;
    constructor(usuario, password, nombre, experiencia, area) {
        this.#id = postulanteAutoincrement++;
        this.usuario = usuario;
        this.password = password;
        this.nombre = nombre;
        this.experiencia = experiencia;
        this.area = area;
    }
    getId() {
        return this.#id;
    }

}



let adminAutoincrement = 1;

class Admin { 

    #id;

        constructor(usuario, password, nombre){

        this.#id = adminAutoincrement;
        adminAutoincrement++;
        this.usuario = usuario;
        this.password = password;
        this.nombre = nombre;
    }

    getId(){
        return this.#id; 
    }

}






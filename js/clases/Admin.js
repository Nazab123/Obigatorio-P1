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


/* 
3 Administradores. 
15 Postulantes (distribuidos en diferentes niveles de experiencia). 
10 Ofertas Laborales (al menos 2 destacadas, con diferentes niveles y 
estados)  
*/ 



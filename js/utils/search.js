// para buscar en un array

/*
lista: array donde buscar.
atributo: propiedad a comparar.
valor: dato que quiero encontrar.
Devuelve la posición o -1 si no existe.
*/

function findCasero(lista, atributo, valor) {

    for (let i = 0; i < lista.length; i++) {

        let elementoActual = lista[i];

        if (elementoActual[atributo] === valor) {
            return i;
        }
    }

    return -1;
}

//hay que llamarla y buscar con esto

//me sirve SOLO para atrivutos PUBLICOSSSSS
    
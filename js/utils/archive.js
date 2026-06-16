
/* ACÁ VAN TODAS LAS VALIDACIONES, el profe dice que se usa después 


naza, perdon la demora en repponder
 
el registra esta muy bien, solo que las validaciones deben estar separadas en funciones
 
para que despues las utilices
 
como les decia, deben tener un archive js para las validaciones
 
y despues usarlas


a chequear si funciona esto 
for(let i = 0; i < sistema.ofertas.length; i++){

        let ofertaActual = sistema.ofertas[i];

        if(ofertaActual.getEstado() === "Activa"){
            activas++;
        } else if(ofertaActual.getEstado() === "Inactiva"){
            inactivas++;
        } else if(ofertaActual.getEstado() === "Cerrada"){
            cerradas++;
        }
    }

    pTotalOfertasPorEstado.innerHTML = 
    `Activas: ${activas} | Inactivas: ${inactivas} | Cerradas: ${cerradas}`;
}
 */
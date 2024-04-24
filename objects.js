/**
 * Mucha veces, vamos a tener la necesidad de describir las características de un objeto o concepto (viaje, entra de un concierto) de la vida real.
 * Con lo que tenemos hasta ahora, ¿Cómo podríamos representarlo?
 */

// en la primera posición está el nombre
// en la segunda, el tamaño de la pantalla
// etc...
// let portatil = ['ACEMAGIC',
// 15.6, 'Argento', 512];

// Mucho mejor utilizar un objeto para representar a este portatil

const portatil = {
    marca: "ACEMAGIC",
    resolucionPantalla: 15.6,
    color: "Argento",
    tamanoDiscoDuro: 512,
    esOferta: true,
    dimensiones: {
        anchura: 30,
        altura: 17,
        grosor: 5
    },
    sistemasOperativosInstalados: ["Windows 11", "Ubuntu (Linux)"],
    coloresDisponibles: ["Argento", "Dorado"]
}


/**
 * Necesito acceder únicamente al tamaño del disco duro para mostrarlo en la parte del HTML correspondiente 
 */

// Acceder o consultar el valor de la propiedad 'tamanoDiscoDuro' del objeto guadado en la variable 'portatil'
console.log(portatil.tamanoDiscoDuro);

// Modificar el valor de una de las propiedades
// Nos indican que este ordenador ya no está
// en oferta
portatil.esOferta = false;
console.log("🚀 ~ portatil:", portatil);

// Si asignas un valor a una propiedad que no existe, la crea. Es decir, para crear una propiedad nueva en un objeto, simplemente, asignale un valor
// Ahora queremos guardar también numPuertosUSB

portatil.numPuertosUSB = 3;
console.log("🚀 ~ portatil:", portatil)


// Acceder a los sistemas operativos disponibles
console.log("🚀 ~ portatil.sistemasOperativosInstalados:", portatil.sistemasOperativosInstalados)

// Acceder al primer sistema operativo disponible de este ordenador
console.log("🚀 ~ portatil-sistema operativo en primera posición:", portatil.sistemasOperativosInstalados[0]);

// Accder al grosor del portatil
let grosor = portatil.dimensiones.grosor;

if (grosor <= 5) {
    console.log("El portatil no es muy grueso.")
}

// Acceder a la propiedad 'precio'. Si no existe (o te equivocas en el nombre), saldra como undefined

console.log("Precio: ", portatil.precio);

// Me equivoco al acceder al grosor del portatil
//console.log(portatil.dimesiones.grosor);
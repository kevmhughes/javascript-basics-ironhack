/**
 * Caso de uso típico: buscar algo en un array
 */

// tamaño? 3
// ¿Cuál es el índice máximo de este array? 2


let morosos = ["1234567U", "34564456H", "11164456H"];

// definir variable de lo que buscas
let dniBuscado = "34564456H";

// definir una variable que nos indique si hemos encontrado aquello que buscabamos. ¿Que valor inicial tiene? Por defecto, todavia NO hemos encontrado al moroso, porque no hemos empezado a recorrer el array. 
let morosoEncontrado = false;

// Este caso tipico de uso de bucle while. Tenemos trabajo que realizar, a no ser, que encontremos lo que buscamos. 
let indice = 0; // porque empezar a buscar des de el primer elemento del array
while (!morosoEncontrado && indice < morosos.length) {
    // Comprobar si en la posición que estamos se encuentra nuestro moroso 
    if (dniBuscado == morosos[indice]) {
        morosoEncontrado = true;
    }

    // Incrementar la variable de iteración (indice)
    indice++;
}

if (morosoEncontrado) {
    console.log("El dni proporcionado es moros");
} else {
    console.log("El dni está limpio, no tiene deudas.")
}
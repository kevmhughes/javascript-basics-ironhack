/**
 * En general, estructra de datos iterables. Cómo recorrérlas, aparte del típico for y while
 */

/**
 * REcorrer un array con un for...of
 * https://www.w3schools.com/js/js_loop_forof.asp
 */

// Quiero el saldo final de estos movimientos
let movimientos = [650000, -20, 1500, -45, -30];
let sumaTotal = 0;

for (let mov of movimientos) {
    console.log(mov);
    sumaTotal += mov;
}

console.log("🚀 ~ file: maneras-recorrer-array.js:17 ~ sumaTotal:", sumaTotal)

/** for...in . Este manera solo se te interea conocer el índice en el que estas iterando */
for (let index in movimientos) {
    console.log("Yo estoy en for..in", index);
    console.log(`El valor del índice ${index} es ${movimientos[index]} `)
}

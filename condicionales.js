/**
 * Las estrcturas condicionales en JS nos permiten tomar decisiones. Nos permiten ejecutar bloques de código de manera condicional
 */

/**
 * Si la palabra introducida por el usuario en www.palabradeldia.com es correcta, informa al usuario que el juego ha acabado y ha ganado. En caso contrario, informa al usuario que puede seguir jugando
 */

let palabraCorrecta = "choca";
let palabraProbada = "broma";
/**
 * Si la expresión se cumple...
 * Si la expresión es cierta....
 * Si el valor de palabraCorrecta es igual al valor de palabraProbada...
 * 
 * == : operador de comparación. Está preguntando: ¿el valor de la parte izquierda es igual al valor de la parte derecha?
 * {}: llaves. Delimitan el trozo de código que vamos a ejecutar, si en este caso, se cumple la condición
 */
if (palabraCorrecta == palabraProbada) {
    console.log("Enhorabuena!");
    console.log("Has acertado la palabra del día!");
}
else {
    console.log("Has fallado! Sigue jugando.")
}
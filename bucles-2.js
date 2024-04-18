/**
 * Oye, dime todos los números que se pueden dividir por 3 (esto es, que dan exacto, o que su residuo es 0), hasta el número 10
 */

for (let i = 1; i <= 10000; i++) {
    console.log("El número " + i);

    if (i % 3 == 0) {
        console.log("El número " + i + " es divisible por 3");
    }
}

/**
 * Una iteración o también llamada "vuelta", es cada una de las veces que se ejecuta el bloque de código del bucle
 */

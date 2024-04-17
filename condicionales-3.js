/**
 * En función de la nota del examen de UF1841, va de 0 a 10, yo tengo que dar un valor categórico o conceptual (Insuficiente si es menor de 5, suficiente entre 5 y 6, Notable, si el valor del a nota es entre 6 y 8.5, entre 8.5 y 9.9 es excelente, pero un 10 es Matricula de honor! )
 */

let nota = 9;
let calificacion; // undefined

// Condición
if (nota < 5) {
    calificacion = "Insuficiente";
} else if (nota < 6) {
    calificacion = "Suficiente";
} else if (nota < 8.5) {
    calificacion = "Notable";
} else if (nota <= 9.9) {
    calificacion = "Excelente";
} else if (nota <= 10) { // No le ponemos el "if"
    calificacion = "Matrícula de honor";
} else {
    calificacion = "Me has puesto un valor de nota imposible";
}

console.log("Calificación conceptual: ", calificacion);
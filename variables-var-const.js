/**
 * DEclarar variable con var
 */

for (let i = 0; i < 3; i++) {
    var nombre = "Ricardo";
    console.log("PATATA");

}

// muestro fuera del FOR la variable nombre
console.log("Variable nombre: ", nombre);

// Variables declradas con la palabra reserva const
// El valor de esta variable no puede cambiar nunca. Por eso se le llama una constante
const EARTH_GRAVITY = 9.81;
let peso = 66;

console.log("Mi peso en la tierra es : " + (peso * EARTH_GRAVITY));

// Si ejecutamos esta instrucción, nos va a dar un error, porque estamos intentando modificar un valor constante

// EARTH_GRAVITY = 100.3;
/**
 * En función de tu edad, te voy a devolver un string diciendo si eres mayor de edad en España o no
 */

function eresMayorEdad(edad) {
    // fuera de la función, esta variable NO es visible
    // Tampoco lo es, el parámetro edad (que no deja de ser una variable)
    let mensaje;

    if (edad >= 18) {
        mensaje = "Sí";
    } else {
        mensaje = "No";
    }

    return mensaje;
}

// console.log("EDAD: ", edad); // Esto no tiene sentido. el paráemtro edad forma parte de la función. Nosotros le tenemos que pasar un valor

console.log(eresMayorEdad(15)); // "No"
console.log(eresMayorEdad(18)); // "Si"
console.log(eresMayorEdad(25));

let edadRicardo = 25;
let mensaje = "Es Ricardo mayor de edad? " + eresMayorEdad(edadRicardo);
console.log(mensaje);
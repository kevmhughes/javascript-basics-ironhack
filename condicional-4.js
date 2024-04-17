/**
 * Imaginar que existe un formulario que habeis rellenado para entrar a este curso. Hay un serie de requisitos que hay que cumplir para poder entrar al curso
 * 
 * Para entrar en el curso las notas de las pruebas deben ser mayor o igual a 5, y ademas tienes que estar trabajando en algo
 */

let plazasCurso = 15;
let notaPruebaMates = 5;
let notaPruebaIdioma = 5;
let esTrabajador = true; // he nombrado a la variale con el prefijo 'es' delante. 

// Operador AND lógico &&
if (plazasCurso>0 && notaPruebaIdioma >= 5 && notaPruebaMates >= 5 && esTrabajador) {
    console.log("Enhorabuena, estás dentro.");
    plazasCurso = plazasCurso - 1; // en cuanto alguien entra en el curso, el numero de plazas hay que decrementarlas en 1
    console.log("Quedan " + plazasCurso + " del curso.");

} else {
    console.log("Lo siento, no puedes entrar.")
}
/**
 * Imagina que el usario de Zoom el nombre aparece sombreado si no esta conectado
 * 
 * Pero, si estás conectado y no estás activo, aparece con una bolita amarilla. Decimos que un usuario está inactivo si hace más de 200 segundos que no mueve el ratón
 *       Si estás activo se pone una bolita verde al lado del nombre
 */
// Andri

let estaUsuarioConectado = true; // valor boleano (true o false)
let segundosDesdeUltimoMovimientoRaton = 0; // con esta variable, de tipo number, Zoom sabe los segundos des de la útlima vez que moviste el ratón

if (estaUsuarioConectado) {
    // voy a hacer cosas
    console.log("El usuario está conectado.");

    if (segundosDesdeUltimoMovimientoRaton > 200) {
        console.log("Pintar la bolita  al lado del usuario de color amarillo");
    } else {
        console.log("Pintar una boltia verde indicando que el usuario está activo");
    }

} else {
    console.log("Zoom mostrará el usuario con transparecia y de color gris para indicar que está desconectado");
}
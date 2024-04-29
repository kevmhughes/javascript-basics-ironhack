/**
 * Método forEach para recorrer un array
 */

let movimientos = [650000, -20, 1500, -45, -30];

/**
 * El método forEach recibe como parámetro una función, que ejecuta, por cada uno de los elementos del array. A este tipo de funciones también se le suele llamar funciones de callback
 */
function mostrarConsola(mov) {
    console.log(mov);
}
// Para cada elemento, ejecuta la función mostrarConsola. Además, pasále como parámetro el valor de dicho elemento 
movimientos.forEach(mostrarConsola)

// No nos importa el nombre del a función, de hecho, se llama función anónima
movimientos.forEach(function (m) {
    console.log(m);
})

// Otra manera para definir las funciones, es mediante una notación, que se llama "función flecha"



movimientos.forEach(m => {
    console.log(m);
})
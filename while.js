/**
 * GEneralmente usamos un bucle while cuando queremos repetir una acción un numero determinado de veces HASTA que suceda algo
 * 
 * - Vivir: comes, duermes, trabajs..hasta que te mueres
 * - Buscar algo en 20 cajones. Si lo encuentro en el primero...ya puedo parar, ¿para qué buscarlo en los demás?
 * - Monopoly. Hasta que no salga un 6 en el dado, no puedo salir la carcel
 */

/**
 * Imaginar que estamos en la cárcel. 
 */

let tiradaDadados; // undefined

while (tiradaDadados != 6) {
    console.log("Estoy en en la cárcel");

    // lanzar el dado
    tiradaDadados = parseInt(Math.random() * 7);
    console.log("En la tirada ha salido un " + tiradaDadados);
}

console.log("Has salido de la cárcel!");
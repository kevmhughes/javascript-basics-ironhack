/**
 * Vamos a declarar una función que siempre que la ejecutamos nos muestra el terminal un saludo y la hora 
 */
/**
 * function: palabra reservada para declarar una función
 * saludar: es el nombre de la función. Siempre le ponemos un nombre que tenga que ver con lo que hace 
 * () : los paréntesis contiene los parámetros de la función. Esta función NO tiene parámetros
 * {} : las llaves encapsulan el código que va ejecutar al invocar esta función. Lo que esté fuera de las llaves, NO se ejecutará al invocar la función
 */
function saludar() {
    console.log("Que hay, bro?");
    console.log(`Son las ${new Date().toLocaleString()}`)
}

// Para ejecutar una función debemos poner su nombre y usar el operador ()
// Sinónimos de ejecutar: "llamar", "correr una función", "invocar"
saludar();
saludar();
saludar();


/**
 * Si queremos que nuestra función devuelva un valor, o se evalúe de alguna manera, debemos usar la palabra reservada return
 * 
 * contarOvejas(["oveja", "lobo", "camello", "oveja"]) --> 2
 * contarOvejas(["perro", "lobo", "camello", "grillo"]) --> 0
 */

function contarOvejas(animales) {
    let numOvejas = 0;

    for (let i = 0; i < animales.length; i++) {
        // Tenemos que comprobar si la posición actual del array contiene una oveja. En tal caso, debemos incrementar en 1 la variable 'numOvejas'
        if (animales[i] == "oveja") {
            numOvejas++;
        }
    }

    return numOvejas;

}

console.log(contarOvejas(["oveja", "perro"])); // 1
console.log(contarOvejas(["gato", "perro"])); // 0 

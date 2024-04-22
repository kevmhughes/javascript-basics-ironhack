let animales = ["oveja", "lobo", "camello", "oveja"];
let numOvejas = 0;

for (let i = 0; i < animales.length; i++) {
    // Tenemos que comprobar si la posición actual del array contiene una oveja. En tal caso, debemos incrementar en 1 la variable 'numOvejas'
    if (animales[i] == "oveja") {
        numOvejas++;
    }
}

console.log(`He contado: ${numOvejas}`);
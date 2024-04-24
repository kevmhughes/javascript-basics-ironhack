/**
 * Los objetos también pueden albergar funciones.
 * A esas funciones, generlamente, se les llama métodos
 */

let gato = {
    nombre: "Bigotes",
    edad: 10,
    comidasFavoritas: ["moscas", "churu (snack de salmón)", "atún", "pavo"],
    maullar: function () {
        console.log("Miau!");
    },
    cumpleGato: function () {

        // añadir un año más al gato porque cumple años
        // Hacer que cumpla años el gato, significa incrementar en 1 su propiedad 'edad'
        this.edad++;
    },
    edadEquivalenteHumana: function () {
        // Dada la edad del gato, su equivalente en años humanos
        let edadHumana = this.edad * 7;
        return edadHumana;
    },
    nuevaComidaFavorita: function (comida) {
        // Modificar el array de comidasFavoritas con la nueva comida
        this.comidasFavoritas.push(comida);
    }

}

// Como ejecutar un método dentro de un objeto
gato.maullar();
gato.cumpleGato();
console.log("Edad gato después de cumplir años: ", gato.edad);
gato.nuevaComidaFavorita("Pollo");
console.log("Las comidas favoritas del gato: ", gato.comidasFavoritas);
console.log("La edad equivalente humana es: ", gato.edadEquivalenteHumana());


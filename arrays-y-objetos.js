/**
 * Trabajar con array de objetos
 */

let portatiles = [
    {
        marca: "Dell",
        modelo: "XPS 15",
        procesador: "Intel Core i7",
        RAM: "16GB",
        tamanoPantalla: "15.6 pulgadas",
        precio: 1500
    },
    {
        marca: "Apple",
        modelo: "MacBook Pro",
        procesador: "Apple M1",
        RAM: "16GB",
        tamanoPantalla: "13 pulgadas",
        precio: 1800
    },
    {
        marca: "HP",
        modelo: "Spectre x360",
        procesador: "Intel Core i7",
        RAM: "16GB",
        tamanoPantalla: "13.3 pulgadas",
        precio: 1200
    },
    {
        marca: "Lenovo",
        modelo: "ThinkPad X1 Carbon",
        procesador: "Intel Core i7",
        RAM: "16GB",
        tamanoPantalla: "14 pulgadas",
        precio: 1400
    },
    {
        marca: "Asus",
        modelo: "ZenBook 13",
        procesador: "Intel Core i5",
        RAM: "8GB",
        tamanoPantalla: "13.3 pulgadas",
        precio: 900
    }
];

for (let i = 0; i < portatiles.length; i++) {
    // Recorrer todo el array
    // Voy a mostrar por consola solo la marca
    console.log(portatiles[i].RAM);

}

let i = 0;
while (i < portatiles.length) {
    console.log(portatiles[i].precio);
    i++;
}

/**
 * El Iva de un producto de lujo en España es del 21%
 * Vamos a incorporar un parámetro a la función que en función de dicho parámetro obtengas un resultado diferente
 */
/**
 * Voy a calcular el IVA de este producto en función de su "precio"
 */
function calcularIvaLujo(precio) {
    console.log("El IVA de este producto es: " + precio * 0.21);
}

// iva del anillo
// iva de un coche
let precioCoche = 9000000;
let precioAnilloOro = 80;

// No le pasamos una variable a la función,  le pasamos su VALOR
let ivaAnillo = calcularIvaLujo(precioAnilloOro);
let ivaCoche = calcularIvaLujo(precioCoche);

console.log("Iva Anillo " + ivaAnillo);

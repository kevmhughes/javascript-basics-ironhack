/**
 * Imagina que somos Amazon y todos nuestros productos en España, tienen que pagar un 21% de IVA cuando los vendemos. Y en función del tipo de producto, si es de lujo o no, 1€ adicional
 * 
 * leche : 1.5€ 21% IVA 
 * anillo de oro: 100€ 21% IVA + 1euro 
 * 
 */

/**
 * Que tengo que hacer para calcular el coste total?
 */

let producto1 = 1.5;
let esProducto1Lujo = false;
let total = 0;

// Aplicar el IVA
total = total + (producto1 * 0.21) + producto1;

if (esProducto1Lujo) {
    total += 1;
}

// producto 2 (anillo de oro)
let producto2 = 100;
let esProducto2Lujo = true;

total = total + (producto2 * 0.21) + producto2;

if (esProducto2Lujo) {
    total += 1; // total = total + 1
}

console.log(`Total:  ${total}`);

function calcularPrecioProducto(precio, esLujo) {
    // un trabajo, para devolverme un valor
}

/**
 * calcularPrecioProducto("leche", false) => 1.815
 * 
 */


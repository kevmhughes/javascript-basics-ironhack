/**
 * Nos piden implementar un programa que nos permita almacenar las retiradas de dinero e ingresos de tu cuenta bancaria
 */

// let saldo = 650000;
// let retirada1 = 20;
// let ingresos1 = 1500;
// let retirada2 = 45;
// let retirada3 = 30;

// Que rollo almacenar todo esto en variables diferentes. Además, imagínate que tienens que seguir poniendo más y mas retiradas e ingresos
// [] --> corchetes
let movimientosBancarios = [650000, -20, 1500, -45, -30];

// Operaciones típicas cuando tienes un array

// Consultar el valor de la variable movimientosBancarios
console.log(movimientosBancarios);

// Consultar el valor de un índice. 
// Queremos consultar la primera posición de este array
console.log(movimientosBancarios[0]);

// Recorrerlo y mostrar cada uno de sus valores
for (let indice = 0; indice < movimientosBancarios.length; indice++) {
    console.log(movimientosBancarios[indice]);
}

// Dame el saldo total de tu cuenta
let saldoTotal = 0; // Aquí voy a guardar el saldo total de mi cuenta tras recorrer todos mis movimientos 
for (let indice = 0; indice < movimientosBancarios.length; indice++) {
    // En cada iteración del bucle, sumamos(decremantamos, depende el signo) cada movimiento bancario en la variable saldoTotal
    saldoTotal = saldoTotal + movimientosBancarios[indice];
}

console.log(`Saldo total: ${saldoTotal}`);

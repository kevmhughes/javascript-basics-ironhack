/**
 * Otra manera de definir las funciones, es usar una flecha, o array function. Podemos guardar la función en una variable
 */

const sumar = (par1, par2) => {
    return par1 + par2
}

console.log(sumar(1, 2));

const llamame = function () {
    console.log("LLAMAME!!!");
}

function fun(func) {
    console.log("Función fun!!");
    func();
}

fun(llamame);



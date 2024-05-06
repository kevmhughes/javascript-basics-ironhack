let display = "none";
let copia_display = display;
copia_display = "maria";
// console.log(display);
// Los valores tipo stirng, boolean, y number se copian por valor

let persona = {
    nombre: "Zulema",
    edad: 24
}

let persona_otra = persona;
persona.edad = 108;
persona_otra.nombre = "Pepito";

console.log(persona_otra);
console.log(persona);


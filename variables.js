
/** Crear una app de mensajeria parecida a WhatsApp */

// Soy un comentario de una sola línea

/**
 * Comentario multi línea
 * 
 * 
 * 
 * 
 * 
 */

/** 
 * 
 * 1. Mensajes
 * 2. Numeros
 * 3. Idioma del teclado
 * 4. Numero de mensajes no leidos
 * 5. Fotos, archivos
 * 6. Notificaciones
 * 7. Nombre Contacto Emergencia
  */

/**  Declarar una variable */

/**
 * let: es una palabra reservada que sirve para declarar una variable. Reservar un espacio en memoria RAM (8GB), para guardar algún tipo de información
 * 
 * notificaciones: es el nombre de la variable. Deberíamos ponerle un nombre que esté relacionado con el tipo de información que vamos a guardar
 * 
 */

// te instalar por primera vez WhatsApp, ¿cuantas notificaciones hay?

// Declarar e inicializar una variable al mismo tiempo
let numeroNotificacionesPendientes = 0;
let idiomaTeclado;
let nombreContactoEmergencia;

/** Hago el Setup de WhatsApp y elegir el idioma del teclado */
idiomaTeclado = "Español"; /** LAs comillas indican que esta variable es de tipo 'cadena de texto', 'string',  */

/** Cómo consultar el valor de esta variable. Ejemplo: queremos escribir un mensaje y vamos a consultar el idioma del teclado para mostrar un teclado u otro */
console.log("Idioma teclado: ", idiomaTeclado);

// Eventualmente, nos va a llegar una mensaje. Tenemos que aumentar en 1 el numero de notificaicones
// Incrementando en 1 el valor de la variable

// Más técnica: actualizamos el valor de la variable numeroNotificacionesPendientes con el resultado de la evaluación de la parte derecha del operador de asignación 
numeroNotificacionesPendientes = numeroNotificacionesPendientes + 1;
numeroNotificacionesPendientes = numeroNotificacionesPendientes + 1;

console.log("Numero notficaciones pendientes: ", numeroNotificacionesPendientes);

// ¿Cómo podemos saber el tipo de dato que almacena una variable?
console.log(typeof idiomaTeclado);
console.log(typeof numeroNotificacionesPendientes);

// el valor 'undefined' significa que no hemos asignado ningún valor a esta variable todavía
console.log(typeof nombreContactoEmergencia);

// En ocasiones, vamos a poder concatenar números y strings 
console.log("El número de notificaciones pendientes que tienes es: " + numeroNotificacionesPendientes);

// Las comas en console.log, simplemente es para poner un número arbitrario de parámetros en la función
console.log("Hola", "Adios", nombreContactoEmergencia, 1 + 3, "patata");


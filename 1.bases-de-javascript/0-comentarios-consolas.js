// 1. Comentarios
/**
 * Son líneas de código que javascript ignorará a la hora de ejecutarlo.
 */

// Comentarios en una sola línea

// Esto es un comentario de una única línea.
console.log(100);

// alert("Esto es una alerta");

// Comentarios munti-línea
/*
alert("Esto es una alerta 1");
alert("Esto es una alerta 2");
alert("Esto es una alerta 3");
*/

// 2. Consola
/**
 * console.log()
 * console.info()
 * console.warn()
 * console.error()
 * console.log("%c ", "")
 * console.table();
 * console.clear()
 */

console.log("---Consola---");
console.log("Console.log");
console.info("console.info");
console.warn("console.warn");
console.error("console.error");
console.log(
  "%cMensaje con Color",
  "font-weight:bold; background:red; font-size:30px"
);
console.table(["Hola", "Mundo"]);
console.log("--- Fin Consola---");

/**
 * Ejercicio
 */

/**
 * Cree dos nuevas funciones: Una que no tenga parámetros y simplemente muestre algún texto de su elección y otra que reciba como parametro un nombre; luego, usar prompt() para generar ese nombre.
 */

let namePrompt = prompt("¿Cómo te llamas?");

function helloWorld() {
  console.log("Hola mundo");
}

function sayHi(name) {
  console.log("Hi " + name);
}

/**
 * Llame a ambas funciones directamente desde su código.
 */

helloWorld();
// sayHi(namePrompt);

/**
 * Agregue un evento "click" del botón con id "button" y adjunte la primera función (la que no tiene argumentos). Luego, haga click en el botón para comprar que funciona.
 */

let idButton = document.getElementById("button");
idButton.addEventListener("click", () => {
  helloWorld();
});

/**
 * Agregue una nueva función que tome tres parámetros (name, lastName y age), y que devuelva una cadena combinada con el siguiente texto: "Mi nombre es name, mi apellido es lastName y mi edad es age".
 */

function getDataPersonal(name, lastName, age) {
  return `Mi nombre es ${name}, mi apellido es ${lastName} y mi edad es ${age}`;
}

console.log(getDataPersonal("Luis", "Yauri", 26));

/**
 * Llame a esa nueva función y muestre el resultado en un alert().
 */

alert(newFunction("1", "2", "3"));

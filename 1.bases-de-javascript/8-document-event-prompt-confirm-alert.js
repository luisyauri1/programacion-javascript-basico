// Document

console.log(document);

let idInput = document.getElementById("username");
console.log(idInput);
idInput.value = "LuisYM";

let idButton = document.getElementById("button");
console.log(idButton);

// Events

/**
 * blur -> Cuando el elemento pierde el foco.
 * click ->  Cuando se hace clic sobre el elemento.
 * dblclick -> Cuando se hace doble clic sobre el elemento.
 * keydown -> Cuando se presiona una tecla.
 * keypress  -> Cuando se presiona una tecla y la mantiene pulsada.
 * keyup -> Cuando se libera la tecla.
 * change -> Cuando un elemento ha sido modificado.
 */

idInput.addEventListener("blur", () => {
  console.log("blur");
});

idInput.addEventListener("click", () => {
  console.log("click");
});

idInput.addEventListener("dblclick", () => {
  console.log("dblclick");
});

idInput.addEventListener("focus", () => {
  console.log("focus");
});

idInput.addEventListener("keydown", () => {
  console.log("keydown");
});

idInput.addEventListener("keypress", () => {
  console.log("keypress");
});

idInput.addEventListener("keyup", () => {
  console.log("keyup");
});

idInput.addEventListener("change", () => {
  console.log("change");
});

// Prompt
/**
 * Se usa para mostrar en una venta modal un mensaje que solicita al usuario que ingrese algún texto o información.
 */

// let name = prompt("¿Cómo te llamas?");
// console.log(name);

// confirm
/**
 * Se usa para mostrar por pantalla mensajes de alerta para su confirmación o cancelación en una ventana modal.
 */

// let result = confirm("¿Es mayor de edad?");
// console.log(result);

// alert
/**
 * Se usa para mostrar por pantalla mensajes de alerta en una ventana modal.
 */
// alert("Hola Mundo");

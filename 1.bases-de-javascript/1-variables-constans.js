// Variables
/**
 * Las variables son espacios en memoria donde se puede guardar información y asociarla a un determinado nombre.
 *
 * Acciones Permitidas
 * - Buen práctica: camelCase -> lastName
 * - Solo letras y Digitos -> lastName20
 * - Empezar con $ -> $lastName
 * - Empezar con _ -> _lastName
 * Acciones No permitidas
 * - Mala Práctica: Incluir _ -> user_name
 * - Empezar digitos -> 12UserName
 * - Incluir caracteres especiales (hay excepciones) -> user-name
 * - Incluir palabras no permitidas -> let
 *   https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Lexical_grammar#palabras_clave
 *   https://mathiasbynens.be/notes/javascript-identifiers
 */

var valueFirst; // Declaración de una variable.
var valueSecond = 10; // Declaración de una variable y asigando un valor;

console.log(valueFirst);
console.log(valueSecond);

var valueX = 1;
var valueY = 2;
var valueZ = 3;

var valueLine1 = 1,
  valueLine2 = 2,
  valueLine3 = 3;

// Var -> Ambito Global y Nivel de Función

var valueExample = 1;
console.log(valueExample);

function exampleFunction() {
  console.log(valueExample);
  var valueExample = 2;
  console.log(valueExample);
  console.log(window.valueExample);
}

exampleFunction();
console.log(valueExample);

var valueExample2 = 1;
console.log(valueExample2);

function exampleFunction() {
  console.log(valueExample2);
  valueExample2 = 2;
  console.log(valueExample2);
  console.log(window.valueExample2);
}

exampleFunction();
console.log(valueExample2);

// Let (ES6)
/**
 * Sustituye al "var"
 * Ambitos Global y Local
 */

console.log("Uso del let");
for (let i = 0; i < 5; i++) {
  console.log(" | ", i);
}
// console.log("Fin del let", i);

console.log("Uso del var");
for (var j = 0; j < 5; j++) {
  console.log(" | ", j);
}
console.log("Fin del var", j);

// Constantes (ES6)
const NAME = "Luis";
console.log(NAME);

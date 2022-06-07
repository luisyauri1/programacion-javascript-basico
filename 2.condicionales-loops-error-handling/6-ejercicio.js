/**
 * Ejercicio
 */

/**
 * Cree una constante con un valor random utilizando "Math.random()""
 * Math.random(), retorna valores entre 0 (incluido) y 1 (excluido) de manera aletoria.
 */
const randomNumber = Math.random();

/**
 * Escriba un código que muestre una alerta (con cualquier mensaje) cuando ese número sea mayor que 0.6.
 */

if (randomNumber > 0.6) {
  alert("Mayor 0.6");
}

/**
 * Cree una matriz de números (cualquier número de su elección) y recorra la matriz de dos maneras diferentes: Imprimiendo en consola los números dentro del bucle.
 */

const arrNumbers = [1, 2, 3, 4, 5];

for (let item of arrNumbers) {
  console.log(item);
}

for (let i in arrNumbers) {
  console.log(arrNumbers[i]);
}

/**
 * Modifique uno de los bucles de la última tarea de modo que comience del final (último elemento) de la matriz y se repita hasta el primer elemento.
 */

for (let i = arrNumbers.length - 1; i >= 0; i--) {
  console.log(arrNumbers[i]);
}

/**
 * Cree dos números aleatorios (en constantes separadas) y muestre una alerta con un mensaje "Mayores" si Ambos son mayores a 0.8 sino mostrar una alerta con un mensaje "No entró a la condición".
 */

const randomNumberFirst = Math.random();
const randomNumberSecond = Math.random();

if (randomNumberFirst > 0.8 && randomNumberSecond > 0.8) {
  alert("Mayores");
} else {
  alert("No entró a la condición");
}

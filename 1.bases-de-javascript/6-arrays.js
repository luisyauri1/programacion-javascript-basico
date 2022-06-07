// Arrays
/**
 * Importante para una lista de datos importantes de la lista.
 * Es un objeto muy similar a una lista de información, que contiene un grupo de elementos.
 * Suelen tener el mismo tipo de dato la información dentro del arreglo.
 */

let arrFirst = new Array(5);
let arrSecond = [];
console.log(arrFirst);
console.log(arrSecond);

let fruits = ["Apple", "Banana", "Pineapple"];

console.log(fruits);

console.log(fruits.length);

console.log(Object.keys(fruits));

let firstValue = fruits[0];
console.log(firstValue);

let lastValue = fruits[fruits.length - 1];
console.log(lastValue);

fruits.push("Pear");
console.log(fruits);

fruits.unshift("Strawberry");
console.log(fruits);

const deleteLastValue = fruits.pop();
console.log(deleteLastValue);
console.log(fruits);

const deleteFirstValue = fruits.shift();
console.log(deleteFirstValue);
console.log(fruits);

const indexValue = fruits.indexOf("Banana");
console.log(indexValue);

fruits.splice(1, 1);
console.log(fruits);

let copyFruits = fruits.slice();
console.log(copyFruits);

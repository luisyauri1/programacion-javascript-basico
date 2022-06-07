// Operadores de comparación
/**
 * == -> Igual
 * != -> No es igual
 * === -> Estrictamente igual
 * !== -> Desigualdad estricta
 * > -> Mayor que
 * >= -> Mayor o igual que
 * < -> Menor que
 * <= -> Menor o igual
 */

console.log(10 == "10");
console.log(10 != "10");

console.log(10 === "10");
console.log(10 !== "10");

console.log(30 > 30);
console.log(30 >= 30);

console.log(15 < 15);
console.log(15 <= 15);

// Operadores lógicos
/**
 * a && b -> AND Lógico
 * a || b -> OR Lógico
 * !a  -> NOT Lógico
 */

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(false && 5 == 1);
console.log(true && "Cat");
console.log("Hello" && "World");

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log(false || 10 == 1);
console.log(false || "Cat");
console.log("Hello" || "World");

console.log(!true);
console.log(!false);
console.log(!"Cat");

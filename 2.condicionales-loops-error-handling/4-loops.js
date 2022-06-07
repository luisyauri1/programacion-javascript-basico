// Loops
/**
 * Los Loops o bucles ofrecen una forma rápida y sencilla de hacer algo repetidamente.
 * for loop -> Ejecuta código una cierta cantidad de tiempo (con variable de contador)
 * for-of loop -> Ejecuta para cada elemento en un arreglo
 * for-in loop -> Ejecuta para cada clave en un objeto
 * while loop -> Ejecuta código siempre que una condición sea verdadera
 * do while loop -> Ejecuta un bloque de código una vez y luego continua si la condición es verdadera
 */

// for loop
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// for-of loop
const arrayForOf = ["Lunes", "Martes", "Miercoles"];
for (const item of arrayForOf) {
  console.log(item);
}

// for-in loop
const objectForIn = {
  name: "Luis",
  lastName: "Yauri",
  age: "26",
};
for (const key in objectForIn) {
  console.log(key);
  console.log(objectForIn[key]);
}

// while loop
let isLegal = 15;
while (isLegal < 18) {
  console.log("No es legal: " + isLegal);
  isLegal++;
}
console.log("Es legal: " + isLegal);

// do while loop
let membershipPlatium = 50;
do {
  console.log("Aún no es Platinum");
  membershipPlatium++;
} while (membershipPlatium < 60);
console.log("Ya es platinium");

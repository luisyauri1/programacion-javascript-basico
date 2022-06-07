// Break
/**
 * Termina el bucle actual en el momento que ha sido utilizado.
 */

let items = [1, 2, 3, 4];
for (let item of items) {
  if (item === 3) {
    break;
  }
  console.log(item);
}

let valueYear = 2020;
while (valueYear < 2050) {
  if (valueYear === 2020) {
    break;
  }
  valueYear++;
}
console.log(valueYear);

// Continue
/**
 * Termina la ejecución de las sentencias de la iteración actual del bucle actual y continua la ejecución del bucle con la próxima iteración.
 */

let items2 = [1, 2, 3, 4];
for (let item of items2) {
  if (item === 3) {
    continue;
  }
  console.log(item);
}

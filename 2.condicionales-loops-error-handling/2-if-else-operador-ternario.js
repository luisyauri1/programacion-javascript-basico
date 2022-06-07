// If-else

let currentAge = 26;

if (currentAge > 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

const valueToday = new Date();
console.log(valueToday);
console.log(valueToday.getDay());
console.log(valueToday.getMonth());
console.log(valueToday.getFullYear());

const valueDay = valueToday.getDay();

if (valueDay === 0) {
  console.log("Es domingo");
} else if (valueDay === 1) {
  console.log("Es lunes");
} else if (valueDay === 2) {
  console.log("Es martes");
} else {
  console.log("No es domingo, ni lunes, ni martes");
}

// Operador ternario

let currentExpJob = 3;
console.log(currentAge >= 3 ? "Aceptado" : "Rechazado");

let getMembership = true;
console.log(getMembership ? "Si es miembro" : "No es miembro");

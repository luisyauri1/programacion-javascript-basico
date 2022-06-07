// Funciones sin retorno

function greeting() {
  console.log("Hi");
}

// Función Anónima
let greeting2 = function () {
  console.log("Hi Anonimo");
};

let greeting2Arrow = () => {
  console.log("Hi Anonimo Arrow");
};

greeting();
greeting2();
greeting2Arrow();

// Funciones con retorno

function greetingData(name) {
  console.log({ arguments });
  return "Hi " + name;
}

let greetingDataArrow = (name) => {
  return "Hi Arrow " + name;
};

console.log(greetingData("Luis"));
console.log(greetingData("Luis", 10, "Hola"));
console.log(greetingDataArrow("Luis"));

// Ejemplo

let add = (a, b = 10) => {
  return a + b;
};

console.log("Suma a + b : ", add(10, 15));
console.log("Suma a + b : ", add(10));

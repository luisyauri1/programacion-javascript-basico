(() => {
  "use strict";

  let idFirstInput = document.getElementById("first-number-value");
  let idSecondInput = document.getElementById("second-number-value");
  let idResultInput = document.getElementById("result-number-value");
  let idAdd = document.getElementById("add");
  let idSubtract = document.getElementById("subtract");
  let idmultiply = document.getElementById("multiply");
  let idDivide = document.getElementById("divide");
  let idReset = document.getElementById("reset");
  let firstValue = 0;
  let secondValue = 0;

  idFirstInput.addEventListener("keyup", (event) => {
    firstValue = event.target.value;
  });

  idSecondInput.addEventListener("keyup", (event) => {
    secondValue = event.target.value;
  });

  idAdd.addEventListener("click", () => {
    const resultValue = Number(firstValue) + parseInt(secondValue);
    idResultInput.value = resultValue;
  });

  idSubtract.addEventListener("click", () => {
    console.log("Restar");
  });

  idmultiply.addEventListener("click", () => {
    console.log("Multiplicar");
  });

  idDivide.addEventListener("click", () => {
    console.log("Dividir");
  });

  idReset.addEventListener("click", () => {
    firstValue = 0;
    secondValue = 0;
    idFirstInput.value = "";
    idSecondInput.value = "";
    idResultInput.value = "";
  });
})();

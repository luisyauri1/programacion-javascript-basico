// Objetos
/**
 *  Importante para datos agrupados/relacionados. (Clave-Valor)
 */

const valueObject = {
  name: "Luis",
  lastName: "Yauri",
  age: 26,
  dead: false,
  "is-programmer": true,
};

console.log(valueObject);
console.log(valueObject.name);
console.log(valueObject["name"]);
console.log(valueObject["is-programmer"]);

delete valueObject.dead;
console.log(valueObject);

const entriesPares = Object.entries(valueObject);
console.log(entriesPares);

Object.freeze(valueObject);
valueObject.age = 30;
console.log(valueObject);

const getPropsObject = Object.getOwnPropertyNames(valueObject);
console.log(getPropsObject);

const getValuesObject = Object.values(valueObject);
console.log(getValuesObject);

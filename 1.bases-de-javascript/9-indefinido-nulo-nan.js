// undefined
/**
 * Valor predeterminado de variables no inicializadas.
 * No debe asignar undefined como un valor manualmente
 */

let valueUndefined;
console.log(valueUndefined);

// null
/**
 * Nunca lo use por defecto.
 * Puede asignar este valor si desea "restablecer"/"borrar" una variable.
 */

let valueNull = 10;
valueNull = null;
console.log(valueNull);

// NaN
/**
 * No es un tipo
 * Técnicamente, es de tipo número y, por lo tanto, puede usarse en cálculos.
 */

let valueNaN = 10 * "Hello";
console.log(valueNaN);

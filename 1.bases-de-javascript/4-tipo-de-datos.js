// Tipo de datos
/**
 * Describe el contenido del valor que tienen la varibale.
 */

/**
 * Tipo de datos primitivos
 * - Boolean -> true / false
 * - Null -> Sin valor en lo absoluto (** Primitivo especial)
 * - Undefined ->  Una variable a la que no se le ha asignado un valor
 * - Number -> Integer, Decimal, etc
 * - String -> Una cadena de caracteres
 * - Symbol -> Un valor único que no es igual a ningun otro valor
 * ** Todo lo no primitivo es un Tipo Objeto.
 */

const valueBoolean = true;
console.log(typeof valueBoolean);

const valueNull = null;
console.log(typeof valueNull);

const valueUndefined = undefined;
console.log(typeof valueUndefined);

const valueNumber = 10;
console.log(typeof valueNumber);

const valueString = "Hola";
console.log(typeof valueString);

const valueSymbol = Symbol(10);
console.log(typeof valueSymbol);

/**
 * Tipo de datos Objetos
 * - Objetos -> Importante para datos agrupados/relacionados. (Clave-Valor)
 * - Arrays -> Importante para una lista de datos importantes de la lista.
 * - Tipos definidos por el Programador (Funciones, Clases)
 * - Clases Predefinidas Javascript (Date, RegExp, Error, etc)
 */


# Ejercicios

1. Cree una función que tome dos números como argumentos y devuelva su suma.

Ejemplos

addition(3, 2) ➞ 5

addition(-3, -6) ➞ -9

addition(7, 3) ➞ 10

2. Escriba una función que tome un entero en minutos y lo convierta en segundos.

Ejemplos

convert(5) ➞ 300

convert(3) ➞ 180

convert(2) ➞ 120

3. Escriba una función que tome la base y la altura de un triángulo, y retorne su area

Ejemplos

triArea(3, 2) ➞ 3

triArea(7, 4) ➞ 14

triArea(10, 10) ➞ 50

4. Cree una función que tome un número como único argumento y devuelva true si es menor o igual a cero, de lo contrario devuelva false.

Ejemplos

lessThanOrEqualToZero(5) ➞ false

lessThanOrEqualToZero(0) ➞ true

lessThanOrEqualToZero(-2) ➞ true

5. Crea una función que tome el número de "wins" "draws" "losses, y calcule el número de puntos que un equipo de fútbol ha obtenido hasta ahora.winsdrawslosses

wins -> Obtiene 3 puntos

draws -> Obtiene 1punto

losses -> Obtiene 0 punto

Ejemplos

footballPoints(3, 4, 2) ➞ 13

footballPoints(5, 0, 2) ➞ 15

footballPoints(0, 0, 1) ➞ 0

6. Cree una función que devuelva el número de fotogramas que se muestran en un número determinado de minutos para un determinado FPS. "Fotogramas = minutos \* fps \* 60"

Ejemplos

frames(1, 1) ➞ 60

frames(10, 1) ➞ 600

frames(10, 25) ➞ 15000

7. Dado un objeto que contiene recuentos de votos positivos y negativos, devuelva qué recuento de votos debe mostrarse. Esto se calcula restando el número de votos negativos de los votos positivos.

Ejemplos

getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

8. Cree una función que tome un número como argumento y devuelva negativo de ese número. Devuelve números negativos sin ningún cambio.

Ejemplos

returnNegative(4) ➞ -4

returnNegative(15) ➞ -15

returnNegative(-4) ➞ -4

returnNegative(0) ➞ 0

9. Escriba una función para invertir una matriz.

Ejemplos

reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

reverse([]) ➞ []

10. Escriba una función que verifique si una persona puede ver una película con clasificación 15+. Se requiere una de las siguientes dos condiciones para la admisión:

- La persona tiene al menos 15 años de edad.
- Tienen supervisión de los padres.
- La función acepta dos parámetros, age y isSupervised. Devuelve un booleano.

Ejemplos

acceptIntoMovie(14, true) ➞ true

acceptIntoMovie(14, false) ➞ false

acceptIntoMovie(16, false) ➞ true

11. Un camarero está escribiendo un programa simple para determinar si debe servir bebidas a alguien. Solo sirve bebidas a personas mayores de 18 años y cuando no está de descanso. Dada la edad de la persona, y si el tiempo de descanso está en sesión, cree una función que devuelva si debe servir bebidas.

Ejemplos

shouldServeDrinks(17, true) ➞ false

shouldServeDrinks(19, false) ➞ true

shouldServeDrinks(30, true) ➞ false

12. Cree una función que tome una palabra y devuelva la nueva palabra sin incluir el primer carácter.

Ejemplos

newWord("apple") ➞ "pple"

newWord("cherry") ➞ "herry"

newWord("plum") ➞ "lum"

13. Cree una función que tome una matriz y una cadena como argumentos y devuelva el índice de la cadena.

Ejemplos

findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

findIndex(["a", "g", "y", "d"], "d") ➞ 3

findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0

14. Luke Skywalker tiene familia y amigos. Ayúdale a recordarles quién es quién. Dada una cadena con un nombre, devuelve la relación de esa persona a Lucas. (Persona : Relación) Darth Vader : father, Leia : sister, Han : brother in law, R2D2 : droide

Ejemplos

relationToLuke("Darth Vader") ➞ "Luke, I am your father."

relationToLuke("Leia") ➞ "Luke, I am your sister."

relationToLuke("Han") ➞ "Luke, I am your brother in law."

15. La víspera de Navidad está casi sobre nosotros, ¡así que naturalmente necesitamos preparar un poco de leche y galletas para Santa! Cree una función que acepte un objeto Date y devuelva true si es Nochebuena (24 de diciembre) y de otro modo false. Tenga en cuenta que el mes de JavaScript está basado en 0, lo que significa que diciembre es el mes 11 mientras que enero es 0.

Ejemplos

timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true

timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false

timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true

16. Cree una función que tome una cadena y devuelva el número (recuento) de vocales contenidas en ella.

Ejemplos

countVowels("Celebration") ➞ 5

countVowels("Palm") ➞ 1

countVowels("Prediction") ➞ 4

17. Cree una función que encuentre la palabra en la cadena dada (no distingue entre mayúsculas y minúsculas). Si se encuentra "bomb", devuelva "Duck!!!", de lo contrario devuelva "There is no bomb, relax.".

Ejemplos

bomb("There is a bomb.") ➞ "Duck!!!"

bomb("Hey, did you think there is a bomb?") ➞ "Duck!!!"

bomb("This goes boom!!!") ➞ "There is no bomb, relax."

18. Compruebe si una cadena es una cadena de título o no. Una cadena de título es aquella que tiene todas las palabras en la cadena que comienzan con una letra mayúscula.

Ejemplos

checkTitle("A Mind Boggling Achievement") ➞ true

checkTitle("A Simple Java Script Program!") ➞ true

checkTitle("Water is transparent") ➞ false

19. Escriba una función que tome una cadena y un número (ya sea 0 o 1) y devuelva "Hola" + name si es 1, de lo contrario devuelva "Adiós" + name.

Ejemplos

sayHelloBye("alon", 1) ➞ "Hello Alon"

sayHelloBye("Tomi", 0) ➞ "Bye Tomi"

sayHelloBye("jose", 0) ➞ "Bye Jose"

20. Los códigos postales constan de 5 dígitos consecutivos. Dada una cadena, escriba una función para determinar si la entrada es un código postal válido. Un código postal válido es el siguiente:

- Solo debe contener números (no se permiten dígitos distintos).
- No debe contener espacios.
- No debe tener más de 5 dígitos de longitud.

Ejemplos

isValid("59001") ➞ true

isValid("853a7") ➞ false

isValid("732 32") ➞ false

isValid("393939") ➞ false

21. Escriba una función que devuelva el número de usuarios en una sala de chat en función de las siguientes reglas:

- Si no hay nadie, regrese."no one online"
- Si hay 1 persona, regrese."user1 online"
- Si hay 2 personas, regrese."user1 and user2 online"
- Si hay personas n>2, devuelva los dos primeros nombres y agregue "and n-2 more online". Por ejemplo, si hay 5 usuarios, devuelva: "user1, user2 and 3 more online"

Ejemplos

chatroomStatus([]) ➞ "no one online"

chatroomStatus(["paRIE_to"]) ➞ "paRIE_to online"

chatroomStatus(["s234f", "mailbox2"]) ➞ "s234f and mailbox2 online"

chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"])
➞ "pap_ier44, townieBOY and 4 more online"

22. Cree dos funciones: isPrefix(word, prefix-) y isSuffix(word, -suffix).

- isPrefix debe devolverse true si comienza con el argumento del prefijo.true.
- isSuffix debe devolver true si termina con el argumento del sufijo.
- De lo contrario, regrese .false

Ejemplos

isPrefix("automation", "auto-") ➞ true

isSuffix("arachnophobia", "-phobia") ➞ true

isPrefix("retrospect", "sub-") ➞ false

isSuffix("vocation", "-logy") ➞ false

23. Cree una función que cuente el número de dígitos del entero.

Ejemplos

count(318) ➞ 3

count(-92563) ➞ 5

count(4666) ➞ 4

count(-314890) ➞ 6

count(654321) ➞ 6

count(638476) ➞ 6

24. Cree una función que tome una matriz (resultado de la máquina tragamonedas) y devuelva true si todos los elementos de la matriz son idénticos y, false de lo contrario. La matriz contendrá 4 elementos.

Ejemplos

testJackpot(["@", "@", "@", "@"]) ➞ true

testJackpot(["abc", "abc", "abc", "abc"]) ➞ true

testJackpot(["SS", "SS", "SS", "SS"]) ➞ true

testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false

testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false

25. Cree una función que tome tres argumentos enteros y devuelva la cantidad de enteros que tienen el mismo valor.(a, b, c)

- La función debe devolver 0, 2 o 3.

Ejemplos

equal(3, 4, 3) ➞ 2

equal(1, 1, 1) ➞ 3

equal(3, 4, 1) ➞ 0

26. Devuelve el número total de matrices dentro de una matriz determinada.

Ejemplos

numOfSubbarrays([[1, 2, 3]]) ➞ 1

numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 3

numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 4

numOfSubbarrays([1, 2, 3]) ➞ 0

27. Cree una función que devuelva una versión en mayúsculas de la cadena pasada. La primera letra de cada palabra de la cadena debe estar en mayúsculas, mientras que el resto de cada palabra debe estar en minúsculas.

Ejemplos

emphasise("hello world") ➞ "Hello World"

emphasise("GOOD MORNING") ➞ "Good Morning"

emphasise("99 red balloons!") ➞ "99 Red Balloons!"

29. Los cajeros automáticos permiten códigos PIN de 4 o 6 dígitos y los códigos PIN no pueden contener nada más que exactamente 4 dígitos o exactamente 6 dígitos. Su tarea es crear una función que tome una cadena y devuelva si el PIN es válido y si no lo es.truefalse

Ejemplos

validatePIN("1234") ➞ true

validatePIN("12345") ➞ false

validatePIN("a234") ➞ false

validatePIN("") ➞ false

30. Escriba una función que, dada una fecha (en el formato MM/DD/AAAA), devuelva el día de la semana como una cadena. El nombre de cada día debe ser una de las siguientes cadenas: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", o "Saturday"..

Ejemplos

getDay("04/06/2022") ➞ "Tuesday"

getDay("15/05/2022") ➞ "Sunday"

getDay("25/07/2022") ➞ "Monday"

31. Escriba una función que convierta un objeto en una matriz, donde cada elemento represente un par clave-valor en forma de matriz.

Ejemplos

toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

toArray({}) ➞ []

32. Cree una función que tome un objeto y devuelva las claves y los valores como matrices independientes. Devuelva las claves ordenadas alfabéticamente y sus valores correspondientes en el mismo orden.

Ejemplos

keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]]

33. Cree una función que devuelva true si todos los parámetros son verdaderos y false de lo contrario.

- Los valores falsos incluyen false, 0, ""(cadena vacía), null, undefined, y NaN; todo lo demás es verdadero.
- Siempre se le proporcionará al menos un parámetro.

Ejemplos

allTruthy(true, true, true) ➞ true

allTruthy(true, false, true) ➞ false

allTruthy(5, 4, 3, 2, 1, 0) ➞ false

34. Cree una función para encontrar NaN en una matriz de números. El valor devuelto debe ser el índice donde se encuentra. Si no se encuentra NaN en la matriz, devuelva -1.

Ejemplos

findNaN([1, 2, NaN]) ➞ 2

findNaN([NaN, 1, 2, 3, 4]) ➞ 0

findNaN([0, 1, 2, 3, 4]) ➞ -1

35. Cree una función que tome una matriz de números entre 1 y 10 (excluyendo un número) y devuelva el número que falta.

missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5

missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10

missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

36. Cree una función que tome una cadena como argumento y devuelva una versión codificada (h4ck3r 5p34k) de la cadena.

- Para que funcione correctamente, la función debe reemplazar todas las "a" con 4, "e" con 3, "i" con 1, "o" con 0 y "s" con 5.

Ejemplos

hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"

hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"

hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"

36. Cree una función que tome una palabra y devuelva true si la palabra tiene dos letras idénticas consecutivas.

Ejemplos

doubleLetters("loop") ➞ true

doubleLetters("yummy") ➞ true

doubleLetters("orange") ➞ false

doubleLetters("munchkin") ➞ false

37. Cree una función que tome una matriz de números y devuelva "Boom!" si el dígito 7 aparece en la matriz. De lo contrario, devuelva "there is no 7 in the array".

Ejemplos

sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.

38. Vas a una joyería y tratas de encontrar la pieza de joyería más cara. Escribes el nombre de cada pieza de joyería y su precio.

- Crea una función que consiga el nombre de la pieza de joyería con mayor precio y rentabilidad.
- Ejemplo: "The most expensive one is the {name of jewelry piece}"

Ejemplos

```
mostExpensive ({
  "Diamond Earrings": 980,
  "Gold Watch": 250,
  "Pearl Necklace": 4650
}) ➞  "The most expensive one is the Pearl Necklace"

mostExpensive({
  "Silver Bracelet": 280,
  "Gemstone Earrings": 180,
  "Diamond Ring": 3500
}) ➞ "The most expensive one is the Diamond Ring"
```

39. Dada una palabra, cree un objeto que almacene los índices de cada letra en una matriz.

- Asegúrese de que las letras sean las claves.
- Asegúrese de que las letras sean símbolos.
- Asegúrese de que los índices se - almacenan en una matriz y que esas matrices son valores.
- Todas las cadenas dadas serán minúsculas.

Ejemplos

mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }

mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }

mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }

40. Dada una letra, se creó una función que devuelve la vocal más cercana a la letra. Si dos vocales son equidistantes a la letra dada, devuelva la vocal anterior.

- Todas las letras se darán en minúsculas.
- No habrá envoltura del alfabeto involucrada, lo que significa que la vocal más cercana a "z" debe devolver "u", no "a".

Ejemplos

nearestVowel("b") ➞ "a"

nearestVowel("s") ➞ "u"

nearestVowel("c") ➞ "a"

nearestVowel("i") ➞ "i"
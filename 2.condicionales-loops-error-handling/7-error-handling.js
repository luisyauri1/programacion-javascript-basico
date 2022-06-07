// Error handling

// throw
function getGreeting(name) {
  if (name === undefined) {
    throw { message: "No tiene nombre" };
  }
  return "Hola " + name;
}

// console.log(getGreeting());

// try catch
let valueGreeting;

try {
  valueGreeting = getGreeting("Luis");
  console.log(valueGreeting);
} catch (e) {
  console.log(e);
} finally {
  console.log("Finish");
}

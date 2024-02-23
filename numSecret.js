const prompt = require("prompt-sync")();

let numSecret = Math.trunc(Math.random() * 100);

console.log(
  "Jugaremos a * Adividar el numero* tengo un numero secreto intenta adivinarlo\n"
);

let flagResp = false;
let flagIsNumber = false;
const trys = [];
let tryNumber;
while (!flagResp) {
  while (!flagIsNumber) {
    tryNumber = Number(prompt("Ingresa el posible numero : "));
    if (!isNaN(tryNumber)) flagIsNumber = true;
    else {
      console.log("Valor ingresado no es un numero valido vuelve a intertalo");
    }
  }
  if (numSecret === tryNumber) {
    console.log("Felicidades, adivinaste el número secreto \n");
    console.log("Los numeros que intentastes son: \n");
    console.table(trys);
    flagResp = true;
  } else {
    console.log(
      "Ups, el número secreto es incorrecto, vuelve a intentarlo. \n"
    );
    trys.push(tryNumber);
    flagIsNumber = false;
    if (tryNumber > numSecret) console.log("Intenta con numeros menores");
    if (tryNumber < numSecret) console.log("Intenta con numeros mayores");
  }
}

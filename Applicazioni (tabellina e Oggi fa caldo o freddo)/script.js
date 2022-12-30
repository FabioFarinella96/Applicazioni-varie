alert("Clicca su ok per iniziare!");

// TABELLINA

let numero = "";

let tabellina = prompt("Quale tabellina vuoi stampare? (es. 5)");

for (let i = 1; i < 11; i++) {
  numero += i * tabellina + " ";
}

let numberOnDom = (document.getElementById("number").innerHTML = numero);

// Oggi fa caldo o freddo?

const temperature = 14;

let addTemperature = prompt(
  "Inserisci una temperatura e ti dirò se fa caldo o freddo! (es. 10)"
);
if (addTemperature < 3) {
  document.getElementById("temperature").innerHTML =
    " Oggi potrebbe nevicare, la temperatura è di " +
    addTemperature +
    "°." +
    " Attenzione fuori, potrebbe esserci ghiaccio in strada!";
} else if (addTemperature < temperature) {
  document.getElementById("temperature").innerHTML =
    " Oggi fa freddo, la temperatura è di " +
    addTemperature +
    "°." +
    " Meglio coprirsi!";
} else if (addTemperature >= temperature && addTemperature <= 18) {
  document.getElementById("temperature").innerHTML =
    " Oggi fa freschetto, la temperatura è di " + addTemperature + "°";
} else if (addTemperature >= 19 && addTemperature <= 24) {
  document.getElementById("temperature").innerHTML =
    " Oggi si sta bene, la temperatura è di " + addTemperature + "°";
} else if (addTemperature > 24 && addTemperature <= 32) {
  document.getElementById("temperature").innerHTML =
    " Oggi fa caldo, la temperatura è di " + addTemperature + "°";
} else {
  document.getElementById("temperature").innerHTML =
    " Oggi fa caldissimo, la temperatura è di " +
    addTemperature +
    "°." +
    " Idratati bevendo molta acqua e non uscire nelle ore più calde!";
}

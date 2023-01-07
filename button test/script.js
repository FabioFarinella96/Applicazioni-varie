// ----------- button test ------------

let numero = document.querySelector("input");
let button = document.querySelector("button");
let text = document.querySelector("h1");

function number(number) {
  let result = number % 2;
  return result;
}

button.addEventListener("click", function () {
  if ((text.innerHTML = number(numero.value) === 0)) {
    text.innerHTML = "Even!";
  } else if ((text.innerHTML = number(numero.value) === 1)) {
    text.innerHTML = "Odd!";
  }
});

const textBox = document.getElementById("textBox");
const toFahrenheight = document.getElementById("toFahrenheight");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");

let temp;
function convert() {
  if (toFahrenheight.checked) {
    temp = Number(textBox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";
    // degree on windows alt0176, mac opt shft 8
  } else if (toCelcius.checked) {
    temp = Number(textBox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + "°C";
    // degree on windows alt0176, mac opt shft 8
  } else {
    result.textContent = "select a unit";
  }
}
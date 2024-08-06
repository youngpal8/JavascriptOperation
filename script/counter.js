const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};

decreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};

resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};

const btnDice = document.getElementById("btnDice");
const dicelab1 = document.getElementById("dicelab1");
const dicelab2 = document.getElementById("dicelab2");

let roundNum1;
let roundNum2;

btnDice.onclick = function () {
  roundNum1 = Math.floor(Math.random() * 6) + 1;
  dicelab1.textContent = roundNum1;
  roundNum2 = Math.floor(Math.random() * 6) + 1;
  dicelab2.textContent = roundNum2;
};

const display = document.querySelector('.input');
let currentInput = '';
function updateDisplay() {
  display.value = currentInput;
}
function de() {
  var display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}
function clearDisplay() {
  currentInput = '';
  updateDisplay();
}
function toDisplay(value) {
  currentInput += value;
  updateDisplay();
}
function calculatePercentage() {
  if (currentInput !== '') {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
  }
}
function calculate() {
  if (currentInput.length === 0) return;
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch (error) {
    currentInput = 'Invalid!';
    updateDisplay();
  }
}
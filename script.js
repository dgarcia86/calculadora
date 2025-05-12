function append(char) {
  const display = document.getElementById('display');
  if (char === 'Math.sqrt(') {
    display.value += '√(';
  } else {
    display.value += char;
  }
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  const input = document.getElementById('display').value.replace(/√\(/g, 'Math.sqrt(');
  try {
    const result = eval(input);
    document.getElementById('display').value = result;
  } catch (e) {
    document.getElementById('display').value = 'Error';
  }
}

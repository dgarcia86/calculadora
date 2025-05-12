function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operator = document.getElementById('operator').value;
  let result;

  if (isNaN(num1) || (operator !== 'sqrt' && isNaN(num2))) {
    document.getElementById('result').textContent = 'Por favor, completa ambos campos.';
    return;
  }

  switch (operator) {
    case '+': result = num1 + num2; break;
    case '-': result = num1 - num2; break;
    case '*': result = num1 * num2; break;
    case '/': result = num2 !== 0 ? num1 / num2 : 'Error: División por cero'; break;
    case '^': result = Math.pow(num1, num2); break;
    case 'sqrt': result = Math.sqrt(num1); break;
    default: result = 'Operador inválido';
  }

  document.getElementById('result').textContent = 'Resultado: ' + result;
}

function toggleNum2(operator) {
  const num2 = document.getElementById('num2');
  if (operator === 'sqrt') {
    num2.style.display = 'none';
  } else {
    num2.style.display = 'block';
  }
}

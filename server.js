const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.use(express.json());

app.post('/api/calculate', (req, res) => {
  const { num1, num2, operator } = req.body;
  let result;

  switch (operator) {
    case '+': result = num1 + num2; break;
    case '-': result = num1 - num2; break;
    case '*': result = num1 * num2; break;
    case '/': result = num2 !== 0 ? num1 / num2 : 'Error: División por cero'; break;
    case '^': result = Math.pow(num1, num2); break;
    case 'sqrt': result = Math.sqrt(num1); break;
    default: result = 'Operador inválido';
  }

  res.json({ result });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));

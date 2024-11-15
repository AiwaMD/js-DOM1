function calculate(operator) {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const resultElement = document.getElementById('result');
    const errorElement = document.getElementById('error');
    let result;

    errorElement.textContent = '';
    resultElement.textContent = '';

    if (!num1 || !num2) {
        errorElement.textContent = 'Введіть обидва числа.';
        return;
    }

    if (isNaN(num1) || isNaN(num2)) {
        errorElement.textContent = 'Введіть коректні числа.';
        return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 === 0) {
                errorElement.textContent = 'Ділення на нуль неможливе.';
                return;
            }
            result = number1 / number2;
            result = Math.round(result * 100) / 100; 
            break;
        default:
            errorElement.textContent = 'Невірний оператор.';
            return;
    }

    resultElement.textContent = `Результат: ${result}`;
}

function clearCalculator() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('error').textContent = '';
}

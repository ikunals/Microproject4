
document.addEventListener('DOMContentLoaded', function () {
    let string = "";
    let resultInput = document.querySelector('.input');

    function calculate() {
        try {
            let newString = eval(string);
            if (isNaN(newString) || !isFinite(newString)) {
                throw new Error('Invalid expression');
            }
            string = newString.toString();
            updateResult();
        } catch (error) {
            string = 'Error';
            updateResult();
        }
    }

    function clearAll() {
        string = '';
        updateResult();
    }

    function deleteLast() {
        string = string.slice(0, -1);
        updateResult();
    }

    function toggleSign() {
        if (string !== '' && !isOperator(string[string.length - 1])) {
            string = string.charAt(0) === '-' ? string.slice(1) : `-${string}`;
            updateResult();
        }
    }

    function isOperator(char) {
        return ['+', '-', '*', '/'].includes(char);
    }

    function updateResult() {
        resultInput.value = string;
    }

    document.querySelectorAll('.button').forEach((button) => {
        button.addEventListener('click', (e) => {
            if (e.target.innerHTML === '=') {
                calculate();
            } else if (e.target.id === 'reset') {
                clearAll();
            } else if (e.target.id === 'del') {
                deleteLast();
            } else if (e.target.id === 'toggle-sign') {
                toggleSign();
            } else {
                string += e.target.innerHTML.trim();
                updateResult();
            }
        });
    });
});

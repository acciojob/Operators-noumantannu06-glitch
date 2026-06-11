// Calculator functionality
        const calculateBtn = document.getElementById('calculate');
        const num1Input = document.getElementById('num1');
        const num2Input = document.getElementById('num2');
        const operatorSelect = document.getElementById('operator');
        const resultDiv = document.getElementById('result');

        calculateBtn.addEventListener('click', function() {
            const num1 = parseFloat(num1Input.value);
            const num2 = parseFloat(num2Input.value);
            const operator = operatorSelect.value;

            // Validate inputs
            if (num1Input.value === '' || num2Input.value === '') {
                resultDiv.textContent = 'Please enter both numbers';
                return;
            }

            let result;

            // Perform operation based on selected operator
            switch(operator) {
                case '+':
                    result = num1 + num2;
                    // FIXED: Show only the result number for testing
                    resultDiv.textContent = result;
                    break;
                case '-':
                    result = num1 - num2;
                    // FIXED: Show only the result number for testing
                    resultDiv.textContent = result;
                    break;
                case '*':
                    result = num1 * num2;
                    // FIXED: Show only the result number for testing
                    resultDiv.textContent = result;
                    break;
                case '/':
                    if (num2 === 0) {
                        resultDiv.textContent = 'Cannot divide by zero';
                    } else {
                        result = num1 / num2;
                        // FIXED: Show only the result number for testing
                        resultDiv.textContent = result;
                    }
                    break;
                default:
                    resultDiv.textContent = 'Please select an operator';
            }
        });

        // Text change functionality
        const changeTextBtn = document.getElementById('change_text');
        const divisions = document.querySelectorAll('.division');

        // Original text array
        const originalText = ['Hello', 'Welcome', 'To', 'My', 'Class'];

        // New text array
        const newText = ['Bye', 'Good Bye', 'To', 'Your', 'Class'];

        let isOriginal = true;

        changeTextBtn.addEventListener('click', function() {
            if (isOriginal) {
                // Change to new text
                divisions.forEach((div, index) => {
                    div.textContent = newText[index];
                });
                isOriginal = false;
            } else {
                // Change back to original text
                divisions.forEach((div, index) => {
                    div.textContent = originalText[index];
                });
                isOriginal = true;
            }
        });
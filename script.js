let input = document.getElementById('inputBox'); // Remove the '#' from the ID selector
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonValue = e.target.innerHTML;

        if (buttonValue === '=') {
            try {
                string = eval(string); // Evaluate the string as an expression
                input.value = string;
            } catch (error) {
                input.value = 'Error'; // Handle invalid expressions
            }
        }
        else if (buttonValue === 'AC') {
            string = "";
            input.value = string;
        }
        else if (buttonValue === 'DEL') {
            string = string.slice(0, -1); // Delete the last character
            input.value = string;
        }
        else {
            string += buttonValue; // Append button value to string
            input.value = string;
        }
    });
});

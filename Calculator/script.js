let string = "";
const buttons = document.querySelectorAll('.button');
const inputField = document.querySelector('#inputBtn');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;
        
        switch (buttonText) {
            case '=':
                try {
                    string = eval(string);
                    inputField.value = string;
                } catch (error) {
                    inputField.value = 'Error';
                    string = '';
                }
                break;
                
            case 'C':
                string = "";
                inputField.value = string;
                break;
                
            default:
                string += buttonText;
                inputField.value = string;
                break;
        }
    });
});
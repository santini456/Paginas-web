const randomNumber = Math.floor(Math.random() * 100) + 1;
const message = document.getElementById('message');
const checkButton = document.getElementById('check');
const guessInput = document.getElementById('guess');

checkButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value, 10);

    if (isNaN(userGuess)) {
        message.textContent = 'Por favor, ingresa un número válido.';
    } else if (userGuess < randomNumber) {
        message.textContent = 'Demasiado bajo. Intenta nuevamente.';
    } else if (userGuess > randomNumber) {
        message.textContent = 'Demasiado alto. Intenta nuevamente.';
    } else {
        message.textContent = '¡Felicidades! Adivinaste el número.';
    }
});

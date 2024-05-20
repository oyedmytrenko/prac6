document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.getElementById('submitButton');
    var result = document.getElementById('result');

    submitButton.addEventListener('click', function() {
        var selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (selectedAnswer) {
            var userAnswer = selectedAnswer.value;
            var correctAnswer = '7';

            if (userAnswer === correctAnswer) {
                result.textContent = 'Правильно! Молодець!';
                result.style.color = 'green';
            } else {
                result.textContent = 'Неправильно. Спробуй ще раз.';
                result.style.color = 'red';
            }
        } else {
            result.textContent = 'Будь ласка, оберіть відповідь.';
            result.style.color = 'red';
        }
    });
});
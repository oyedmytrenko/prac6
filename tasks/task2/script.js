document.addEventListener('DOMContentLoaded', function() {
    var checkButtons = document.querySelectorAll('.checkButton');
    var result = document.getElementById('result');

    function calculateNOR(a, b) {
        return !(a || b);
    }

    function getNORResult(expression) {
        var [a, b] = expression.split(' v ').map(Number);
        return calculateNOR(a, b) ? '0' : '1';
    }

    checkButtons.forEach(function(button) {
        button.addEventListener('mouseover', function() {
            var expression = button.getAttribute('data-expr');
            var radios = document.querySelectorAll('input[name="q' + (['0 v 0', '1 v 0', '0 v 1', '1 v 1'].indexOf(expression) + 1) + '"]');
            var userAnswer = Array.from(radios).find(radio => radio.checked)?.value;
            var correctAnswer = getNORResult(expression);

            if (userAnswer === correctAnswer) {
                result.textContent = 'Результат: Правильно!';
                result.style.color = 'green';
            } else {
                result.textContent = 'Результат: Неправильно. Правильна відповідь: ' + correctAnswer;
                result.style.color = 'red';
            }
        });
    });
});
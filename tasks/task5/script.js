function calculateSum() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        var sum = num1 + num2;
        document.getElementById('result').value = sum;
        alert('Сума чисел: ' + sum);
    } else {
        alert('Будь ласка, введіть числа в обидва поля');
    }
}
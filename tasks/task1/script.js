document.addEventListener('DOMContentLoaded', function() {
    var colorSelector = document.getElementById('colorSelector');
    colorSelector.value = 'green';
    document.body.style.backgroundColor = 'green';

    colorSelector.addEventListener('change', function() {
        var selectedColor = this.value;
        document.body.style.backgroundColor = selectedColor;
    });
});
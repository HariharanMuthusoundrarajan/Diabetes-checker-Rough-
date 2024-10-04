document.addEventListener('DOMContentLoaded', function() {
    const genderSelect = document.getElementById('gender');
    const pregnancyContainer = document.getElementById('pregnancy-container');
    const calculateBmiButton = document.getElementById('calculate-bmi');
    const bmiResult = document.getElementById('bmi-result');

    genderSelect.addEventListener('change', function() {
        if (this.value === 'female') {
            pregnancyContainer.style.display = 'block';
        } else {
            pregnancyContainer.style.display = 'none';
        }
    });

    calculateBmiButton.addEventListener('click', function() {
        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);

        if (height > 0 && weight > 0) {
            const bmi = (weight / (height / 100) ** 2).toFixed(2);
            bmiResult.textContent = `Your BMI is: ${bmi}`;
        } else {
            bmiResult.textContent = 'Please enter valid height and weight.';
        }
    });
});

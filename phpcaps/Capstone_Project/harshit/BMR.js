// script.js
function calculateBMR() {
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);

    let BMR;
    if (gender === 'male') {
        BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === 'female') {
        BMR = 10 * weight + 6.25 * height - 5 * age - 161;
    } else {
        document.getElementById('result').textContent = 'Invalid gender input.';
        return;
    }

    document.getElementById('result').textContent = `Your BMR: ${BMR.toFixed(2)}`;
}

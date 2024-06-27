function calculateBMI() {
    try {
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value);
        const BMI = weight / (height ** 2);
        let result = `BMI: ${BMI.toFixed(2)}`;

        if (BMI < 18.5) {
            result += "\nUnderweight";
        } else if (BMI >= 18.5 && BMI <= 25) {
            result += "\nNormal Weight";
        } else if (BMI > 25 && BMI <= 30) {
            result += "\nOverweight";
        } else if (BMI > 30 && BMI <= 35) {
            result += "\nObesity Class 1";
        } else if (BMI > 35 && BMI <= 40) {
            result += "\nObesity Class 2";
        } else {
            result += "\nObesity Class 3";
        }

        document.getElementById("result").textContent = result;
    } catch (error) {
        document.getElementById("result").textContent = "Please enter valid numeric values for weight and height.";
    }
}

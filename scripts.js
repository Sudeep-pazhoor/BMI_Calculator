function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (!weight || !height || weight <= 0 || height <= 0) {
        alert("enter valid weight and height");
        return;
    }
    const heightmet = height / 100;
    const bmi = (weight / (heightmet * heightmet)).toFixed(2);
    document.getElementById("bmiResult").value = `Your BMI is ${bmi} (BMI<18=Underwight, BMI>25=Overweight else Normal)`;
}
function clearF() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("bmiResult").value = "";
}

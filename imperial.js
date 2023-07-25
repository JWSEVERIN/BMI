function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var heightM = height * 2.54;
    var weightM = weight * 0.454;

    var bmi = weightM / ((heightM / 100) * (heightM / 100));
    bmi = bmi.toFixed(1);

    document.getElementById("bmi").innerHTML = bmi;

    if (bmi < 18.5) {
        document.getElementById("status").innerHTML = "Underweight";
    } else if (bmi < 25) {
        document.getElementById("status").innerHTML = "Normal";
    } else if (bmi < 30) {
        document.getElementById("status").innerHTML = "Overweight";
    } else {
        document.getElementById("status").innerHTML = "Obese";
    }
}

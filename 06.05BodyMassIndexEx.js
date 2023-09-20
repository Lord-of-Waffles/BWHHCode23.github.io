function calculateBMI() {
	let weight = 
		Number(document.getElementById("weight").value);
	let height =
		Number(document.getElementById("height").value);
	let BMI =
		weight / (height / 100 * height / 100);
	if (BMI <= 18.4) {
		document.getElementById("answer").innerHTML =
			"Body Mass Index (BMI) is " + BMI.toFixed(2) + " (Weight less than normal weight)";
	} else if (BMI <= 24.9 && BMI >=18.5) {
		document.getElementById("answer").innerHTML =
			"Body Mass Index (BMI) is " + BMI.toFixed(2) + " (Normal weight)";
	} else {
		document.getElementById("answer").innerHTML =
			"Body Mass Index (BMI) is " + BMI.toFixed(2) + " (Overweight)";
	}
}
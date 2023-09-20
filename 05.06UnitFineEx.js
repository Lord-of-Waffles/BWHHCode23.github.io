function calculateUnitFine() {
	let netIncome =
		Number(document.getElementById("txtNetIncome").value);
	let fineMath = (netIncome - 255) / 60;
	
	document.getElementById("answerDiv").innerHTML =
		"Unit fine is " + fineMath.toFixed(2) + " euros.";
}
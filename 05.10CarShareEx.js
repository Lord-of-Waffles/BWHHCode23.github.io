function calculateCosts() {
	let kiloMeters = 
		Number(document.getElementById("kilometers").value);
	let consumption =
		Number(document.getElementById("consumption").value);
	let price = 
		Number(document.getElementById("price").value);
	let participants = 
		Number(document.getElementById("participants").value);
	let finalCost =
		(consumption / 100 * price * kiloMeters / participants);
	
	document.getElementById("answerId").innerHTML =
		"Fuel costs per participant is " + finalCost.toFixed(2) + " euros.";
	
}
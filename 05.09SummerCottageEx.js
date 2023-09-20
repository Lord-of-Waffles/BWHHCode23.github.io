function calculateRent() {
	let rent = 
		Number(document.getElementById("rent").value);
	let people = 
		Number(document.getElementById("participants").value);
	let outcome = (rent / people);
	
	document.getElementById("answerDiv").innerHTML =
		"Rent per participants is " + outcome.toFixed(2) + " euros.";
	
}
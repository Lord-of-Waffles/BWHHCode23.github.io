function calculateFee() {
	let price = 
		Number(document.getElementById("price").value);
	let fee =
		(price * 0.0344);
	if (fee < 2400)
		fee = 2400;
	document.getElementById("fee").innerHTML =
		"Real state agent's fee is " + fee.toFixed(2) + " euros"
}
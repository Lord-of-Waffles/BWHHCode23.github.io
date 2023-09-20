function play() {
	let bet = 
		Number(document.getElementById("bet").value);
	
	let pips = Math.round( (Math.random() * 5) + 1);
	
	let winner = bet * 1.25;
	
	let winnerDinner = bet * 1.5;

	if (pips === 2) {
		document.getElementById("answer").innerHTML =
			"Pips was " + pips + " - Paid back: " + winner.toFixed(2) + " euros";
		
	} else if (pips === 4) {
		document.getElementById("answer").innerHTML =
			"Pips was " + pips + " - Paid back: " + winner.toFixed(2) + " euros";
		
	} else if (pips === 6) {
		document.getElementById("answer").innerHTML =
			"Pips was " + pips + " - Paid back: " + winnerDinner.toFixed(2) + " euros";
		
	} else {
		document.getElementById("answer").innerHTML =
			"Pips was " + pips + " - no pay";
	}
}

	
function showStudyGrant() {
	
	let age = 
		Number(document.getElementById("age").value);
	
	let withParents = 
		document.getElementById("withParents").value;
	
	if (withParents === "y") {
		withParents = true;
	} else {
		withParents = false;
	}
	
	if (age >= 20 && withParents === true) {
		document.getElementById("answer").innerHTML =
			"The study grant is 87.23 - 196.27 euros.";
		
	} else if (age >=20 && withParents === false) {
		document.getElementById("answer").innerHTML =
			"The study grant is 268.23 euros.";
		
	} else {
		document.getElementById("answer").innerHTML = 
			"Ask Kela.";
	}
}

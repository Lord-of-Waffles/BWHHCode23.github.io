function comparePackages() {
	
	let texts = 
		Number(document.getElementById("textMessages").value);
	
	let calls =
		Number(document.getElementById("callTime").value);
	
	let callPrice = calls * 0.069;
	
	let txtPrice = texts * 0.069;
	
	let unlimitedPackage = 29.90;
	
	let specialPackage = 
		(19.90 + txtPrice + callPrice);
	
	if (unlimitedPackage < specialPackage) {
		document.getElementById("answer").innerHTML =
			"The All-inclusive package (29.90) is cheaper than the Special package (" + specialPackage.toFixed(2) + ")";
	} else {
		document.getElementById("answer").innerHTML =
			"The Special package (" + specialPackage.toFixed(2) + ") is cheaper than the All-inclusive package (29.90)";
	}
}
	
	
	
	
	
	
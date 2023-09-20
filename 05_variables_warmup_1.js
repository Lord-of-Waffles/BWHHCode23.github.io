    // 05_variables_warmup_1 JavasScript code
// By Benjamin Worton
function showEmail() {
var givenName;
var givenName = document.getElementById("txtGivenName").value;
var surName;
var surName = document.getElementById("txtSurname").value;
var address;
var address = givenName+"."+surName +"@myy.haaga-helia.fi";
var address = document.getElementById("pOutput").innerHTML = address;

}

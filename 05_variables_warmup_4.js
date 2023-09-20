// 05_variables_warmup_4 JavasScript code
// By Benjamin Worton
function showHoursAndMinutes() {


var minutes = Number(document.getElementById("txtMinutes").value);
var hours = minutes / 60;
var finalMinutes = minutes % 60;

var finalTime;
var finalTime = 
document.getElementById("pOutput").innerHTML = (hours.toFixed(0) + " hours and " + finalMinutes + " minutes");


}
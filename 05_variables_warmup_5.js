// 05_variables_warmup_5 JavasScript code
// By Benjamin Worton
function calculate() {

 var startBalance = 
    Number(document.getElementById("txtStartingBalance").value);

 var interestRate =
    Number(document.getElementById("txtInterestRate").value);

 var interest = startBalance * interestRate /100;

 var y1Balance = startBalance + interest;

 var y2Interest = y1Balance * interestRate /100;

 var y2Balance = y1Balance + y2Interest;

 document.getElementById("pOutput").innerHTML = 
 "1. Year: " + y1Balance.toFixed(2) + "<br>2. Year: " + y2Balance.toFixed(2);

}
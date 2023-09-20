// 05_variables_warmup_3 JavasScript code
// By Benjamin Worton

function showMinutes() {
    var txtHours;
    var txtHours = Number(document.getElementById("txtHours").value);
    var txtHours = (txtHours * 60);
    var txtMinutes;
    var txtMinutes = Number(document.getElementById("txtMinutes").value);
    var space;
    var space = " ";
    var total;
    var total = txtHours+txtMinutes;
    var total = document.getElementById("pOutput").innerHTML = (total+space+"minutes");
    
    }
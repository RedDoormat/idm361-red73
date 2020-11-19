var inputDamage = document.getElementById("damageinput");
var inputCrit = document.getElementById("critinput");
var inputDodge = document.getElementById("dodgeinput");

var submitDamage = document.getElementById("damagesubmit");
var submitCrit = document.getElementById("critsubmit");
var submitDodge = document.getElementById("dodgesubmit");

var resultDamage = document.getElementById("resultdamage");
submitDamage.addEventListener("click", addDamage);

var resultCrit = document.getElementById("resultcrit");
submitCrit.addEventListener("click", addCrit);

var resultDodge = document.getElementById("resultdodge");
submitDodge.addEventListener("click", addDodge);

var buttonReset = document.getElementById("reset");
buttonReset.addEventListener("click", resetValue);

var totalDamage = 100;
var totalCrit = 0;
var totalDodge = 0;

//Local Storage Function on load
function readData() {
    console.log("readData called");
    // Does the browser support this?
    if (typeof (Storage) !== "undefined") {
        //Read Data from local stoarage
        totalDamageInt = localStorage.redTotalDamage
        totalCritInt = localStorage.redTotalCrit
        totalDodgeInt = localStorage.redTotalDodge

        console.log("Total Damage is .." + totalDamageInt);
        console.log("Total Crit Chance is .." + totalCritInt);
        console.log("Total Dodge chance is .." + totalDodgeInt);

        if (typeof (totalDamageInt) !== "undefined") {
            // Convert data string into integer
            totalDamage = parseInt(totalDamageInt);
            totalCrit = parseInt(totalCritInt);
            totalDodge = parseInt(totalDodgeInt);
            // Display data screen
            resultDamage.innerHTML= totalDamageInt + "%";
            resultCrit.innerHTML= totalCritInt + "%";
            resultDodge.innerHTML= totalDodgeInt + "%";
        } else {
            // Initize data if it is empty/invalid
            totalDamage = 100;
            totalCrit = 0;
            totalDodge = 0;
        }
    } else {
        // Sorry! No Web Storage support..
        alert('This browser does NOT support local storage');
    }
}

function addDamage() {
    var damage = parseFloat(inputDamage.value) || 0;
    totalDamage += damage;
    // var damageSum = totalDamage;
    resultDamage.innerHTML= totalDamage + "%";
    localStorage.redTotalDamage = totalDamage;
    inputDamage.value = '';
}

function addCrit() {
    var critChance = parseFloat(inputCrit.value) || 0;
    totalCrit += critChance;
    // var critChanceSum = totalCrit;
    resultCrit.innerHTML= totalCrit + "%";
    localStorage.redTotalCrit = totalCrit;
    inputCrit.value = '';
}

function addDodge() {
    var dodgeChance = parseFloat(inputDodge.value) || 0;
    totalDodge += dodgeChance;
    // var dodgeChanceSum = totalDodge;
    resultDodge.innerHTML= totalDodge + "%";
    localStorage.redTotalDodge = totalDodge;
    inputDodge.value = '';
}

function resetValue() {
    console.log("removeData called");
    if (typeof (Storage) !== "undefined") {
        if (confirm('Are you sure you want to reset ALL stat values?')) {
            localStorage.removeItem("redTotalDamage");
            localStorage.removeItem("redTotalCrit");
            localStorage.removeItem("redTotalDodge");
            // Initize data if it is empty/invalid
            totalDamage = 100;
            totalCrit = 0;
            totalDodge = 0;
            // Clear arrays
            resultDamage.innerHTML= totalDamage + "%";
            resultCrit.innerHTML= totalCrit + "%";
            resultDodge.innerHTML= totalDodge + "%";
        }
    } else {
        // Sorry! No Web Storage support..
        alert('This browser does NOT support local storage');
    }
}
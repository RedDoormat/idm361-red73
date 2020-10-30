var inputDamage = document.getElementById("damageinput");
var inputCrit = document.getElementById("critinput");
var inputDodge = document.getElementById("dodgeinput");

var resultDamage = document.getElementById("resultdamage");
inputDamage.addEventListener("input", addDamage);

function addDamage() {
    var damage = parseFloat(inputDamage.value) || 0;
    var damagesum = 100 + damage;
    resultDamage.innerHTML= damagesum + "%";
}

var resultCrit = document.getElementById("resultcrit");
inputCrit.addEventListener("input", addCrit)

function addCrit() {
    var critChance = parseFloat(inputCrit.value) || 0;
    var critChanceSum = 0 + critChance;
    resultCrit.innerHTML= critChanceSum + "%";
}

var resultDodge = document.getElementById("resultdodge");
inputDodge.addEventListener("input", addDodge)

function addDodge() {
    var dodgeChance = parseFloat(inputDodge.value) || 0;
    var dodgeChanceSum = 0 + dodgeChance;
    resultDodge.innerHTML= dodgeChanceSum + "%";
}

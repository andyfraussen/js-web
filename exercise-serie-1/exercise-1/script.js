//Check to see if script is linked properly.
console.log("This script is linked properly!")
//Write your JS code here...

document.getElementById('blue').onclick = changeBlue;

function changeBlue() {
    document.getElementById("square").style.backgroundColor = "blue";
}

document.getElementById('red').onclick = changeRed;

function changeRed() {
    document.getElementById("square").style.backgroundColor = "red";
}

document.getElementById('green').onclick = changeGreen;

function changeGreen() {
    document.getElementById("square").style.backgroundColor = "green";
}

// Initilize input variable
input = document.getElementById("input")

// Initilize measurement variables
let lengthText = document.getElementById("length")
let volumeText = document.getElementById("volume")
let massText = document.getElementById("mass")

function calculate() {
// Convert input variable to value inputted by user
    input = input.value
// Convert measurement variables to converted value based on user input
    let feetCalc = input * 3.28084
    let metersCalc = input * 0.3048
    let litersCalc = input * 3.78541
    let gallonsCalc = input * 0.264172
    let kilogramsCalc = input * 0.453592
    let poundsCalc = input * 2.20462
// Print calculations and text to DOM
    lengthText.innerText = input + " meters = " + feetCalc.toFixed(3) + " feet | " + input + " feet = " + metersCalc.toFixed(3) + " meters"
    volumeText.innerText = input + " liters = " + gallonsCalc.toFixed(3) + " gallons | " + input + " gallons = " + litersCalc.toFixed(3) + " liters"
    massText.innerText = input + " kilos = " + poundsCalc.toFixed(3) + " pounds | " + input + " pounds = " + kilogramsCalc.toFixed(3) + " kilos"
// Reset input to initial value in preperation for next calculation
    input = document.getElementById("input")
}
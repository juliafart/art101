/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Julia Gomez
   Date: 11/7/2024
*/

function sortingHat(str) {
    // Step 1: Count the length of the string
    let length = str.length;

    // Step 2: Use modulus to determine the house
    let mod = length % 4;

    // Step 3: Return the corresponding house based on the mod value
    if (mod === 0) {
        return "Gryffindor";
    } else if (mod === 1) {
        return "Ravenclaw";
    } else if (mod === 2) {
        return "Slytherin";
    } else {
        return "Hufflepuff";
    }
}

// Event listener for the button click
document.getElementById('button').addEventListener('click', function() {
    // Step 1: Get the value from the input field
    let name = document.getElementById('input').value;

    // Step 2: Get the house name from the sortingHat function
    let house = sortingHat(name);

    // Step 3: Display the result in the output div
    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<p>The Sorting Hat has sorted you into ${house}!</p>`;
});
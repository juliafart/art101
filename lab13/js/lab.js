/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Julia Gomez
   Date: 11/7/2024
*/

function runFizzBuzz() {
    // Get the stopping limit
    const limit = parseInt(document.getElementById('limit').value);

    // Collect all factor and word pairs from the input table
    const rows = document.querySelectorAll('#factorInputs tr');
    const factors = [];

    rows.forEach(row => {
        const factor = parseInt(row.querySelector('.factor').value); // Get the factor (number)
        const word = row.querySelector('.word').value.trim();        // Get the corresponding word

        // Add only valid factor-word pairs to the array
        if (!isNaN(factor) && word) {
            factors.push({ factor, word });
        }
    });

    // Generate the FizzBuzzBoomBang output
    let result = ''; // Holds the final output string
    for (let i = 0; i <= limit; i++) {
        let output = '';

        // Check each factor and append the corresponding word if divisible
        factors.forEach(({ factor, word }) => {
            if (i % factor === 0) {
                output += word;
            }
        });

        // Add the result for the current number, defaulting to the number itself if no matches
        result += `${i} - ${output || i}\n`;
    }

    // Display the result in the output area
    document.getElementById('output').textContent = result;
}
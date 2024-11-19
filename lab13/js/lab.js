/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Julia Gomez
   Date: 11/7/2024
*/

// FizzBuzz Function: Loops through numbers 1 to 200
// Outputs "Fizz" for multiples of 3, "Buzz" for multiples of 5,
// "Boom" for multiples of 7, and combinations for numbers divisible by more than one of these.

function fizzBuzz() {
    let oneLongString = ""; // To accumulate the output

    // Loop through numbers 1 to 200
    for (let i = 1; i <= 200; i++) {
        let output = "";

        // Check divisibility and concatenate the appropriate strings
        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";
        if (i % 7 === 0) output += "Boom";
        if (i % 11 === 0) output += "Bang";
        
        const FACTORS = [
            { number: 3, text: "Fizz" },
            { number: 5, text: "Buzz" },
            { number: 7, text: "Boom" },
            { number: 11, text: "Bang" }
        ];
        
        // If nothing was added to output, just use the number
        if (output === "") output = i;

        // Append the output with a line break
        oneLongString += output + "<br>";
    }

    // Output the final string to the #output div
    $("#output").html(oneLongString);
}

// Call the fizzBuzz function when the document is ready
$(document).ready(function() {
    fizzBuzz();
});
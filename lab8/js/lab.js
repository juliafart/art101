// index.js - Learning Arrays and Objects
// Author: Julia Gomez
// Date: 10/31/24

// Step 1: Create an array of numbers and assign it to a variable
let numbers = [2, 4, 6, 8, 10];

// Step 2: Define a named function that squares a number
function square(x) {
    var results = x * x;
    return results;
}

// Step 3: Test the function with individual numbers
console.log(square(3));  // Expected output: 9
console.log(square(5)); 
console.log(square(7)); 

// Step 4: Use map on the array with the named function as a callback
var mapResults = numbers.map(square);
console.log("Results using square function: ", mapResults);  // Expected output: [4, 16, 36, 64, 100]

// Step 5: Use an anonymous function with map to perform a different operation
var mapResultsWithAnonymousFunction = numbers.map(function(x){
    var results = x + 5; // Adds 5 to each number
    return results;
});

// Step 6: Print the results from the anonymous function
console.log("Results using anonymous function:", mapResultsWithAnonymousFunction);  // Expected output: [7, 9, 11, 13, 15]
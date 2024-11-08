/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Julia Gomez
   Date: 11/7/2024
*/

// add button to challenge section
$("#Challenge").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function() {
    //now add (or subtract) the "special" class to the section
    $("#Challenge").toggleClass("special");
})

//for problem section
$("#Problem").append("<button id='button-problem'>Make Special</button>");

// add a click listener to the challenge button
$("#button-problem").click(function() {
    //now add (or subtract) the "special" class to the section
    $("#Problem").toggleClass("special");
})

//for relection section
$("#Reflection").append("<button id='button-reflection'>Make Special</button>");

// add a click listener to the challenge button
$("#button-reflection").click(function() {
    //now add (or subtract) the "special" class to the section
    $("#Reflection").toggleClass("special");
})

//for results section
$("#Results").append("<button id='button-results'>Make Special</button>");

// add a click listener to the challenge button
$("#button-results").click(function() {
    //now add (or subtract) the "special" class to the section
    $("#Results").toggleClass("special");
})
// index.js - Learning Arrays and Objects
// Author: Julia Gomez
// Date: 10/28/24

function myVines () {
    var vine = window.prompt("hi there! what kind of grapes would you like to grow on the vine today?");
    console.log("vine=", vine);
// split string to array
    var vineArray = vine.split ('');
    console.log("vineArray =", vineArray);
// sort the Array
    var vineArraySort = vineArray.sort ();
    console.log("vineArraySort = ", vineArraySort);
//join up array
    var vineSorted = vineArraySort.join ('');
    console.log ("vineSorted = ", vineSorted);
//return
return vineSorted;
}

//output

document.writeln ("OH! wow, look at that I just grew a new kind of grape: ",
    myVines(), "</br>");
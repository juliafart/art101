// index.js - Learning Arrays and Objects
// Author: Julia Gomez
// Date: 10/24/24

// Variables
myTransport= ["UCSC bus", "walking", "Eli's car"];

// Object 
myMainRide = {
  Make: "Mazada",
  Model: "Miata",
  Color: "forrest green",
  year: 1997,
  age:function () {
    return 2024 - this.year ;
  }  
  }


  //Output
  document.writeln("The Kinds of transportation I use around campus: ", myTransport,"</br>");
  document.writeln("My dream Main Ride <pre>",JSON.stringify(myMainRide, null,'/t'), "</pre>");

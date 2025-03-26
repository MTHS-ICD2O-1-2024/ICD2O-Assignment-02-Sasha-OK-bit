
  // Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html


/**
* Displays an alert with the message "Hello, World!"
*/
function calculatebutton() {
  // input
  const Base = parseFloat(document.getElementById("B").value)
  const Height = parseFloat(document.getElementById("H").value);
  let A = Base * Height

  document.getElementById('Area').innerHTML =
    `A is: ${A.toFixed(2)} <br>
    ...: ${takeHomeSalary.toFixed(2)}`

}

/* Created by: Curtis Edwards
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT-5-05-HTML/sw.js", {
    scope: "/ICS2O-UNIT-5-05-HTML/",
  })
}

/**
 * Input.
 */

function buttonClicked() {
  
  const sidea = parseInt(document.getElementById('side-a').value)
  const sideb = parseInt(document.getElementById('side-b').value)
  const sidec = parseInt(document.getElementById('side-c').value)


  if (sidea == sideb && sideb == sidec && sidec == sidea) {
    document.getElementById("output").innerHTML =
  "Your triangle is an equilateral"
  console.log("equilateral")
  } else if (sidea == sideb || sideb == sidec || sidec == sidea) {
    document.getElementById("output").innerHTML =
  "Your triangle is an isosceles"
  console.log("isosceles")
  } else if (sidea != sideb && sideb != sidec && sidec != sidea) {
    document.getElementById("output").innerHTML =
  "Your triangle is an scalene"
  console.log("scalene")
  } else {
  document.getElementById("output").innerHTML =
  "Somthing went wrong..."
  console.log("error")
  }
  
}


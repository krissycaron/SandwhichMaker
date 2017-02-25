// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;
var startingMeatPrice = 0;
var startingVeggiePrice = 0;
var startingCondimentPrice = 0;
var startingCheesePrices = 0;//check "s"'s across board'
var startingBreadPrices = 0;  

// Variable to hold topping that the user selects
var selectedObjectForSandwhich; // PLACEHOLDER for the THINGS to be selected from the DOM
// Get a reference to the <select> element that has all the meat options
var breadChooser = document.getElementById("meat-chooser"); // getter of the info
var meatChooser = document.getElementById("meat-chooser");
var veggieChooser = document.getElementById("meat-chooser");
var cheeseChooser = document.getElementById("meat-chooser");
var condimentsChooser = document.getElementById("meat-chooser");

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
breadChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  startingBreadPrices = 0;
  if ()

  selectedObjectForSandwhich = event.target.value;

  // Determine the price of the topping chosen

  // Add the topping to the SandwichMaker to increase the total price
});
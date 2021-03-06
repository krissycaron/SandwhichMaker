// Variable to hold the final price. Default to 0.
// var finalSandwichPrice = 0;
// var startingMeatPrice = 0;
// var startingVeggiePrice = 0;
// var startingCondimentPrice = 0;
// var startingCheesePrices = 0;//check "s"'s across board'
// var startingBreadPrices = 0;  

// Variable to hold topping that the user selects
var selectedObjectForSandwhich; // PLACEHOLDER for the THINGS to be selected from the DOM
// Get a reference to the <select> element that has all the meat options
var breadChooser = document.getElementById("breadChooser"); // getter of the info
var meatChooser = document.getElementById("meatChooser");
var veggieChooser = document.getElementById("veggieChooser");
var cheeseChooser = document.getElementById("cheeseChooser");
var condimentChooser = document.getElementById("condimentChooser");

// VAriable to hold output to DOM

var outputPrintToDOM = document.getElementById("printToDOM")//this is where the total price gets returned to the dom

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/

breadChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  startingSandwhichPrice = 0;
  console.log(event);
  var breadMoney = SandwichMaker.getBread(event.target.value);
  if (event.target.checked === true){
    SandwichMaker.addTopping(breadMoney);
    outputPrintToDOM.innerHTML = SandwichMaker.getPrice();
  } else {
    SandwichMaker.removeTopping(breadMoney);
    outputPrintToDOM.innerHTML = SandwichMaker.getPrice();
  }
});


meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  startingSandwhichPrice = 0;
  console.log(event.target.value);
  var meatMoney = SandwichMaker.getMeat(event.target.value);
  if (event.target.checked === true) { 
    SandwichMaker.addTopping(meatMoney);
    outputPrintToDOM.innerHTML = SandwichMaker.getPrice();
  } else {
    SandwichMaker.removeTopping(meatMoney);
    outputPrintToDOM.innerHTML = SandwichMaker.getPrice();
  }
});


cheeseChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  startingSandwhichPrice = 0;
  console.log(event.target.value);
  var cheeseMoney = SandwichMaker.getCheese(event.target.value);
  if (event.target.checked === true){
    SandwichMaker.addTopping(cheeseMoney);
    outputPrintToDOM.innerHTML = SandwichMaker.getPrice();
  } else {
    SandwichMaker.removeTopping(cheeseMoney);
    outputPrintToDOM.innerHTML = SandwichMaker.getPrice();
  }
});

veggieChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  startingSandwhichPrice = 0;
  console.log(event.target.value);
  var veggieMoney = SandwichMaker.getVeggie(event.target.value);
  if (event.target.checked === true){
    SandwichMaker.addTopping(veggieMoney);
    outputPrintToDOM.innerHTML = SandwichMaker.getPrice();
  } else {
    SandwichMaker.removeTopping(veggieMoney);
    outputPrintToDOM.innerHTML = SandwichMaker.getPrice();
  }
});

condimentChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  startingSandwhichPrice = 0;
  console.log(event.target.value);
  var condimentMoney = SandwichMaker.getCondiment(event.target.value);
  if (event.target.checked === true){
    SandwichMaker.addTopping(condimentMoney);
    outputPrintToDOM.innerHTML = SandwichMaker.getPrice();
  } else {
    SandwichMaker.removeTopping(condimentMoney);
    outputPrintToDOM.innerHTML = SandwichMaker.getPrice();
  }
});






 // for the if statment to verify what checkbox has been checked, need to determine if the box is checked. 

  // Add the topping to the SandwichMaker to increase the total price







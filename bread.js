// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices = {
    white: 3.00,
  	wheat: 3.00, 
  	italianHerb: 3.00, 
  	sourdough: 3.00
  }
// console.log(meatPrices.turkey); // prints to console the price of the meat

  // Augment the original object with another method
  maker.getMeat = function() {

    return meatPrices;
    console.log(meatPrices);
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
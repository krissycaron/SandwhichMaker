
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var veggiePrices = {
  	tomato: 1.00,
  	pepper: 1.00, 
  	onions: 1.00, 
  	pickles: 1.00
  }
// console.log(meatPrices.turkey); // prints to console the price of the meat

  // Augment the original object with another method
  maker.getVeggie = function() {

    return veggiePrices;
    // console.log(veggiePrices);
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
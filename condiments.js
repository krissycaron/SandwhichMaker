// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condimentsPrices = {
  	mustard: 1.00,
  	mayo: 1.00, 
  	siracha: 1.00, 
  	hummus: 1.00
  }
// console.log(meatPrices.turkey); // prints to console the price of the meat

  // Augment the original object with another method
  maker.getCondiments = function() {

    return condimentsPrices;
    // console.log(condimentsPrices);
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
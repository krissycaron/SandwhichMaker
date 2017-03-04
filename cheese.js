// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrice = {
  	"american": 1.00,
  	"cheddar": 1.00, 
  	"swiss": 1.00, 
  	"gouda": 1.00
  }
// console.log(meatPrices.turkey); // prints to console the price of the meat

  // Augment the original object with another method
  maker.getCheese = function(cheeseType) {
    return cheesePrice[cheeseType];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
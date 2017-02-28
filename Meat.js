// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrice = {
  	"ham": 2.00,
  	"turkey": 3.00, 
  	"roastbeef": 4.00, 
  	"salami": 1.00
  }
// console.log(meatPrices.turkey); // prints to console the price of the meat

  // Augment the original object with another method
  maker.getMeat = function(meatType) {

    return meatPrice[meatType];
    console.log(meatPrice);
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
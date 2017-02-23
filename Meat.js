// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
  	ham: 2.00,
  	turkey: 3.00, 
  	roastbeef: 4.00, 
  	salami: 1.00
  }
// console.log(meatPrices.turkey); // prints to console the price of the meat
 })(SandwichMaker)







  // Augment the original object with another method
  // maker.addMeat = function() {

  //   return ???;
  // };

  // Return the new, augmented object with the new method on it
//   return maker;
// })(SandwichMaker);
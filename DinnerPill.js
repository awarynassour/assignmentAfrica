/* The Dinner Bill Splitter
Three friends went out to dinner and need to split the bill equally.

Create foodTotal and set it to 12000.
Create drinksTotal and set it to 6000.
Create numberOfFriends and set it to 3.
Create grandTotal by adding food and drinks.
Create amountPerPerson by dividing the grandTotal by the numberOfFriends.
Print the breakdown: "The total bill was 18000. Split between 3 friends, each person pays 6000." */

let foodTotal = 12000;
let drinksTotal = 6000;
let numberOfFriends = 3;
let grandTotal = foodTotal + drinksTotal;
let amountPerPerson = grandTotal / numberOfFriends;

console.log(`the total bill was ${grandTotal} Split between ${numberOfFriends} each person pays ${amountPerPerson}.`);




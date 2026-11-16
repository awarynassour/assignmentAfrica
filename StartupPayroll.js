/*8. The Startup Payroll (Value Redistribution)
You are managing the payroll for a startup using two linked arrays: employees 
and salaries (start with 3 people).

The Budget Cut & Raise: The company takes 50,000 RWF away from the first employee's salary (index 0) and
 gives that exact 50,000 RWF as a raise to the second employee (index 1). Update their salaries.
New Hire: Add a new employee and their starting salary of 100,000 to the very end of the lists.
The Generous Resignation: The person you just added to the end of the list resigns immediately.
 However, they decided to donate their entire salary to the CEO (the person at index 0). 
 Remove them from both lists, capture their salary in a new variable before it's gone, and add it 
 to the CEO's balance!
Print the CEO's final balance.*/

let employess = ["Ali", "Hassan", "Abaker"];
let salaries = [250000, 300000, 350000];

console.log("print the original list of employer:")
console.log(`${employess[0]} : ${salaries[0]}`);
console.log(`${employess[1]} : ${salaries[1]}`);
console.log(`${employess[2]} : ${salaries[2]}`);


console.log("update salary for fist employer take his salary and give it to the scond employer:");
 salaries[0] -= 50000;
 salaries[1] += 50000;
 
 console.log(`${employess[0]} : ${salaries[0]}`);
 console.log(`${employess[1]} : ${salaries[1]}`);
 console.log(`${employess[2]} : ${salaries[2]}`);
 


console.log("dding New  employer and his salaries:")

employess.push("Abdraman");
salaries.push(100000);

console.log(`${employess[0]} : ${salaries[0]}`);
console.log(`${employess[1]} : ${salaries[1]}`);
console.log(`${employess[2]} : ${salaries[2]}`);
console.log(`${employess[3]} : ${salaries[3]}`);

console.log("save abdraman's salary before he resign add give it: ")

let donation = salaries[salaries.length - 1];

console.log("Removing The last employer:")
employess.pop();
salaries.pop();
console.log(`${employess[0]} : ${salaries[0]}`);
console.log(`${employess[1]} : ${salaries[1]}`);
console.log(`${employess[2]} : ${salaries[2]}`);

console.log("Give donation to index 0 which is Ali:");
salaries[0] += donation;

console.log(`${employess[0]} : ${salaries[0]}`);
console.log(`${employess[1]} : ${salaries[1]}`);
console.log(`${employess[2]} : ${salaries[2]}`);














/*10. The Ride-Share Dispatch (Index Shifting & Math)
Track active taxi rides using three parallel arrays: passengers, distances (in km), and fares (in RWF). Start with 3 passengers.

Surge Pricing: The fare for the passenger sitting at index 1 increases by 500 RWF due to traffic. Target and update their fare.
Cancellation: The passenger at the very front of the line (index 0) cancels their ride. Remove them from all three arrays. (Think about what happens to the person who was at index 1!)
New Request: A new passenger requests a ride. Add their name, distance, and base fare to the very end of the arrays.
/////// The Split Fare: The passenger currently at the front of the line decides to split their fare with the passenger at the end of the line.
//  Calculate half of the front passenger's fare, subtract it from their total, and add that exact amount to the last passenger's fare using .length - 1.
Print the final details of the passenger at the end of the line.*/

let passengers = ["Ali", "Hassan", "Abaker"];
let distances = [5, 10, 15];
let fares = [2000, 3000, 4000];
console.log("Print The original list:")

console.log(`${passengers[0]} : ${distances[0]} : ${fares[0]} RWF`);
console.log(`${passengers[1]} : ${distances[1]} : ${fares[1]} RWF`);
console.log(`${passengers[2]} : ${distances[2]} : ${fares[2]} RWF`);

console.log("Surge Pricing or incearing the index 1 by 500 RWF")

fares[1] += 500;

console.log(`${passengers[0]} : ${distances[0]} : ${fares[0]} RWF`);
console.log(`${passengers[1]} : ${distances[1]} : ${fares[1]} RWF`);
console.log(`${passengers[2]} : ${distances[2]} : ${fares[2]} RWF`);

console.log("Cancellation remove the frist at begginer")

passengers.shift();
distances.shift();
fares.shift();

console.log(`${passengers[0]} : ${distances[0]} : ${fares[0]} RWF`);
console.log(`${passengers[1]} : ${distances[1]} : ${fares[1]} RWF`);


console.log("New Request add at the end : ");
passengers.push("Abdraman");
distances.push(20);
fares.push(5000);

console.log(`${passengers[0]} : ${distances[0]} : ${fares[0]} RWF`);
console.log(`${passengers[1]} : ${distances[1]} : ${fares[1]} RWF`);
console.log(`${passengers[2]} : ${distances[2]} : ${fares[2]} RWF`);






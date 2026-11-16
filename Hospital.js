/* Advanced Level (Parallel Arrays & Dynamic Indexing)
7. The Hospital Triage (Warm-up)
You are building an emergency room tracker using three linked arrays: patientNames, patientAges, and urgencyLevels.

Create the three arrays and populate them with 3 patients.
Emergency Arrival: A critical patient just arrived. Add their name, age, and a "Critical" urgency level to the very front of all three arrays.
Patient Treated: The doctor finished treating the person at the front of the line. Remove them from all three arrays.
Condition Worsening: The patient sitting in the 3rd spot (index 2) just fainted. Manually update their specific urgency level to "Critical" by targeting their exact index.
Print the updated records to the console using template literals.*/

let patientName = ["Ali", "Hassan", "Abaker"];
let patientAge = [20, 23, 25];
let urgencyLevels = ["High", "Low", "Medium"];
console.log(" The Patient and Their Detail:");

console.log(`${patientName[0]} : ${patientAge[0]} : ${urgencyLevels[0]}`);
console.log(`${patientName[1]} : ${patientAge[1]} : ${urgencyLevels[1]}`);
console.log(`${patientName[2]} : ${patientAge[2]} : ${urgencyLevels[2]}`);


console.log("Adding New Patient at Beginnering")
patientName.unshift("Abdraman");
patientAge.unshift(30);
urgencyLevels.unshift("Critical");
console.log(`${patientName[0]} : ${patientAge[0]} : ${urgencyLevels[0]} `);
console.log(`${patientName[1]} : ${patientAge[1]} : ${urgencyLevels[1]}`);
console.log(`${patientName[2]} : ${patientAge[2]} : ${urgencyLevels[2]}`);
console.log(`${patientName[3]} : ${patientAge[3]} : ${urgencyLevels[3]}`);


console.log("Removing the patient at The begginner :")
patientName.shift();
patientAge.shift();
urgencyLevels.shift();
console.log(`${patientName[0]} : ${patientAge[0]} : ${urgencyLevels[0]} `);
console.log(`${patientName[1]} : ${patientAge[1]} : ${urgencyLevels[1]} `);
console.log(`${patientName[2]} : ${patientAge[2]} : ${urgencyLevels[2]} `);


console.log("The last updated records")

urgencyLevels[2]="Critical";
console.log(`${patientName[0]} : ${patientAge[0]} : ${urgencyLevels[0]} `);
console.log(`${patientName[1]} : ${patientAge[1]} : ${urgencyLevels[1]} `);
console.log(`${patientName[2]} : ${patientAge[2]} : ${urgencyLevels[2]} `);









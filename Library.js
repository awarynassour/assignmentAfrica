/* 9. The Library Penalty (Dynamic Tracking)
Track borrowed books using three parallel arrays: books, borrowers, 
and fines (start with 3 students who owe different fine amounts).

VIP Checkout: A new student borrows a book with 0 fines.
 Because they are a VIP, add them to the very front of all three lists.
Book Returned: The student at the very end of the list returns their book.
 Remove them entirely from all three arrays.
The Late Penalty: The fine of the student who is currently at the end of the list doubles.
 Use .length - 1 to target their fine and multiply it by 2.
The Fine Transfer: The student currently sitting at index 1 decides to pay off the
 fine for the student sitting at index 0. Add index 1's fine to index 0's fine, and then reset index 1's fine to */

let books =  ["Frence", "arabic", "English"];
let borrowers = ["Ali", "Hassan", "Abaker"];
let fines = [1000, 2000, 3000];
console.log("Print the original Last:")

console.log(`${books[0]} : ${borrowers[0]} : ${fines[0]}`);
console.log(`${books[1]} : ${borrowers[1]} : ${fines[1]}`);
console.log(`${books[2]} : ${borrowers[2]} : ${fines[2]}`);


console.log("Adding Student VIP :")

books.unshift("React");
borrowers.unshift("Abdraman");
fines.unshift(0);

console.log(`${books[0]} : ${borrowers[0]} : ${fines[0]}`);
console.log(`${books[1]} : ${borrowers[1]} : ${fines[1]}`);
console.log(`${books[2]} : ${borrowers[2]} : ${fines[2]}`);
console.log(`${books[3]} : ${borrowers[3]} : ${fines[3]}`);

console.log("Remove the last book which is retruedone :")
books.pop();
borrowers.pop();
fines.pop();

console.log(`${books[0]} : ${borrowers[0]} : ${fines[0]}`);
console.log(`${books[1]} : ${borrowers[1]} : ${fines[1]}`);
console.log(`${books[2]} : ${borrowers[2]} : ${fines[2]}`);



console.log("The late Panelty for last fines:");
fines[fines.length - 1];
fines[fines.length - 1] *=2;

console.log(`${books[0]} : ${borrowers[0]} : ${fines[0]}`);
console.log(`${books[1]} : ${borrowers[1]} : ${fines[1]}`);
console.log(`${books[2]} : ${borrowers[2]} : ${fines[2]}`);

console.log("at index 1 decides to pay off the into index 0:")

fines[0] += fines[1];
fines[1]=0;

console.log(`${books[0]} : ${borrowers[0]} : ${fines[0]}`);
console.log(`${books[1]} : ${borrowers[1]} : ${fines[1]}`);
console.log(`${books[2]} : ${borrowers[2]} : ${fines[2]}`);

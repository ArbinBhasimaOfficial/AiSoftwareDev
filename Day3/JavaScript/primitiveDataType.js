// Primitive Data types

// string, number, boolean, null, undefined, bigint, symbol
// focus on beginners String number boolean null undefined 

// Strings
console.log("Strings")
const firstName = "Arbin"
const message = 'Welcome to the course!';
const greeting = `${message}, ${firstName}!\n`; // using template literals // \n is an escape sequence for new line
console.log(greeting); // Output: Welcome to the course!, Arbin!

// Numbers
console.log("Numbers")
const Discount = 30 + 5; // 35% discount
const price = 55000.00;
const total = price - (price * Discount / 100);
console.log(`Total price after discount: ${total}`); // Output: Total price after discount: 35750.00
const x = 10;
const y = 3;
const remainder = x % y;
const exponent = x ** y; // 10 raised to the power of 3
console.log(`Remainder of ${x} divided by ${y}: ${remainder}`); // Output: Remainder of 10 divided by 3: 1
console.log(`${x} raised to the power of ${y}: ${exponent}\n`); // Output: 10 raised to the power of 3: 1000

// Boolean
const isLoggedOut = true;
const isSleeping = false;
console.log("Boolean")
console.log(`Is the user logged out? ${isLoggedOut}`); // Output: Is the user logged out? true
console.log(`Is the user sleeping? ${isSleeping}\n`); // Output: Is the user sleeping? false

// Undefined
let selectedCourse; // variable is declared but not assigned a value
let selectedCourseName = undefined; // variable is declared and value is explicitly set to undefined
console.log("Undefined")
console.log(`Selected course: ${selectedCourse}`); // Output: Selected course: undefined
console.log(`Selected course name: ${selectedCourseName}\n`); // Output: Selected course name: undefined

// Null
let currentUser = null; // variable is explicitly set to null
console.log("Null")
console.log(`Current user: ${currentUser}\n`); // Output: Current user: null
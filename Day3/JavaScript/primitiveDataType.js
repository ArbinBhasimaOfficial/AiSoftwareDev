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
let chr1 = "Hajimemasite"

console.log(chr1)


// indexing
const readChar = chr1[4]
console.log(readChar);

const readChar2 = chr1[-1]
console.log(readChar2);

const readChar3 = chr1[20]
console.log(readChar);



// indexing looping  use at
const readCharAt = chr1[-6]
console.log(readChar);

const readCharAt2 = chr1[20]
console.log(readChar);


// Composing strings

const name = "Arbin"
const age = 23
const greetings = `Hellor I am ${name}. I am ${age} years old.`
console.log(greetings)

// string concatenation
const nickName = "Zion"
const names = name + nickName
const data = name - nickName
console.log(names)
console.log(data)

// can add numbers on string

// const info = name + nickName + age

// NaN not a number

// type of number

// properway of concatenation
const info = `${name} ${nickName} ${age}`
console.log(info)


// const isXNan = x === NaN; // this is false
// console.log(x, NaN);
// console.log(isXNan);

// const isXNaNCorrect = Number.isNaN(x);
// console.log(isXNaNCorrect)


// string to number
const str100 = "100";
const str200 = "200";

const strToNumber = Number(str100)
console.log(str100, typeof strToNumber)

// parseInt
// parseFloat()


// use Number constructor for conversion from string to number

// Boolean

// string with more then 1 character is true

// empty string "" is falsely, 0 falsely

const falseState = false
const boolTest = Boolean(falseState)
console.log(boolTest);

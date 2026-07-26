// Control FLow Statement tell JS how to navigate through your code, wheter thats deciding beteen paths, repeating actions
// breaking out early, or handling unexpected errors.

// 1. Conditional Statments (Decision Making)
// This evaluates conditions to true or false to decide which code block executes

// if else
// Executes a block of code if a condition is truthy, which optional alternative blocks
// for e.g
console.log("If else");
const score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B"); // this executes
} else {
  console.log("Grade: C");
}

console.log("\n");

// switch
// Evaluates an expression against multiple strict equality === case clauses.
// efficient when checking a single value against many known discrete options.
// for e.g

console.log("Switch Case");
const role = "admin";
switch (role) {
  case "admin":
    console.log("Full access granted."); // this is executed
    break;
  case "editor":
    console.log("Edit access granted.");
    break;
  default:
    console.log("Read only access.");
}

console.log("\n");

// Iteration Statements (loops)
// loops repeat block of code until a specified stopping condition is met.

// for
// the classic loop used when you know in advance how many times you want to iterate.
// for e.g

console.log("For loop");

// initialization; condition; increment or decrement
for (let i = 0; i <= 5; i++) {
  console.log(`index: ${i}`);
}

console.log("\n");

// while
// repeats code as long as a condition evaluates to true. Checks the condition before running
// the block
// for e.g
console.log("While");

let count = 5; // initialization
while (count > 0) {
  // condition
  console.log(count);
  count--; // increment or decrement
}

console.log("\n");

// do...while
// Similar to while, but checks the condition after executing the block. This guarantee the loop runs at least once.
console.log("Do...While");

let attempts = 0;
do {
  console.log(`Attempt #${attempts + 1}`);
  attempts++;
} while (attempts < 2); // if condition is false but runs 1 time anyway for e.g attempts < 0
// but this is true so it will repeat + 1 from the condition provided
// output is:
// Do...While
// Attempt #1
// Attempt #2

console.log("\n");

// for...in
// iterates over all emurable property keys of an object (or indices of an array)
console.log("For...in");

const user = {
  name: "Alex", // key: value
  age: 28,
}; // object
for (const key in user) {
  console.log(`${key}: ${user[key]}`); // ${user[key]} is a value
}
// Iteration 1: user[key] evaluates to user["name"] $\rightarrow$ returns "Alex"
// Iteration 2: user[key] evaluates to user["age"] $\rightarrow$ returns 28
console.log("\n");

// For...of
// iterates over the values of iterable objects like Arrays, Strings, Sets, and Maps
console.log("For...of");

const colors = ["Cyan", "Black", "White"]; // array
for (const color of colors) {
  console.log(color);
}

console.log("\n");

// for await...of
// used for iterating over async iterables or arrays of promises sequentially
// waits explicitly up to the end of the program
console.log("For await...of");

const promiseList = [
  Promise.resolve("First item"),
  new Promise((resolve) =>
    setTimeout(() => resolve("Second item (1s delay)"), 1000),
  ),
  "Third item (plain value)",
];

async function processStreams(promises) {
  for await (const data of promises) {
    console.log(data);
  }
}

processStreams(promiseList);
console.log("\n");

// 3. Jump and Transfer Statements
// These alter the normal sequential execution of loops or functions

// break
// immediately terminates the innermost loop, switch, or labeled statement.
// for e.g
console.log("Break");

for (let i = 0; i < 10; i++) {
  if (i === 3) break;
  console.log(i);
}

console.log("\n");

// continue
// skips the rest of the current loop iteration and moves directly to the next cycle.

console.log("Continue");

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}

console.log("\n");

// return 
// stops execution inside a function and optionally returns a value back to the caller
console.log("Return");

function add (a , b){
    sum = a + b
    return sum;
    console.log("Unreachable")
}

addedValue = add(5,6)
console.log(addedValue)

console.log("\n");

// labelled statement
// attaches am identifier to a statement so you can target specific outer loops using break or continue
console.log("Labelled");

outerLoop: for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        if (i === 1 && j === 1){
            break outerLoop // breaks out of both loop
        }
        console.log(`i = ${i}, j = ${j}`)
    }
}

console.log("\n");


// 4. Exception handling statements
// these allow you to gracefully intercept and handle runtime errors without crashing your app

// try...catch...finally
// try: wraps code that might throw error
// catch: executes if an error occurs inside try
// finally: runs always, regardless of whether an error was thrown or caught
// for e.g

console.log("Try...catch...finaly");

try{
    const data = JSON.parse("invalid json")
} catch (error){
    console.error("Parsing failed:", error.message)
} finally {
    console.log("Cleanup complete.") // always executes.
}

console.log("\n");

// throw 
// generates a custom exception/error and stops execution of the current function, passing control to the nearest catch block
console.log("throw");

function validateAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative.");
  }
  return true;
}

try {
  const myAge = validateAge(-12);
  console.log(myAge);
} catch (error) {
  console.error("Caught error:", error.message);
}

console.log("\n");


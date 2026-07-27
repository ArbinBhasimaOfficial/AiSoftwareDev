// function functionname ( ){
    // ur code
// }

someFn() // this works because of hoisting

function zionPrint(){ // functions declaration
  console.log("Hajimemasite, Watasi wa Zion Desu.")
}


zionPrint() // function call



// Arguments and parameters
// a , b is argument of funcitons
// 6, 7 is parameters of functions

function addAB(a,b){
  sum = a + b
  return sum
}

console.log(addAB(6,7))

function multiply(x, y) {

    const multiply = x * y
    return multiply // return value is output
}
let multiValued = multiply(6, 7);
console.log(multiValued);

// Arrow functions

// const divide = (...params) => {
//   code
// }

// this is very important

function someFn(){ // functions are hoisted
  console.log("Some function executed.")
}

const arrowFn = () => {
  console.log("Some arrow function");
}

const somefnVar = function someFnVar(){ // somefnVar contains the pointer
  console.log("Some function variable  executed.")
}


const z = arrowFn
console.log(z)

console.log(somefnVar)


// important interview questions
// variable hoisting

console.log("age", age)
// let age = 10
// const age = 12
// this is hoisted but it is set on temporal deadzone cannot be accessed

// var is hoisted on global state
var age = 23


// different type of function

// normal function
function x(){
  return "lol"
}


// arrow function
const Y  = () => {
  console.log("Arrow function")
}


// constructor function
function Person() {
  this.name = "Arbin"
  this.age = 23
  this.getName = () => {
    return this.name
  }
}

const person = new Person()
console.log(person.getName())



// Scope
// 1. Global --> outside of function it is accessible from anywhere in the file.
// 2. Function --> only accesse inside the function
// 3. Block --> a resource defined between a block {...} can only be accessed with in  that black

// {
//   const block = "I am block"
// }
// this is not accessible
// outside of block used in if statement , switch cases

// iterators
// using symbol.iterator
// const iterable = {
//   [Symbol.iterators]{}{
//     console.log("iterator called")
//   },
// }


// using yield and generator functions

function* generateNumberInSequence(){
  let i = 0
  // while (true) {
  //   yield i++
  // }
  while (i >5){
    yield i++
  }
}
// important inunique id generation
const id = generateNumberInSequence()
console.log("id", id.next())

console.log("id", id.next())

console.log("id", id.next())

// .next()


// using for...of to iterate the generateNumberInSequence

for (const value of id){
  console.log(value)
}

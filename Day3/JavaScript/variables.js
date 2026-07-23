// const way of variable declaration

const courseName = "AI Software Development"

console.log(courseName)
// cannot reassign value because it is constant
// courseName = "AI Software Development 2"
// if you try to reassign value it will throw an error like this:
    // /home/ziontan/ArbinBhasimaAi/AiSoftwareDev/Day3/JavaScript/variables.js:6
    // courseName = "AI Software Development 2"
    //            ^

    // TypeError: Assignment to constant variable.
    //     at Object.<anonymous> (/home/ziontan/ArbinBhasimaAi/AiSoftwareDev/Day3/JavaScript/variables.js:6:12)
    //     at Module._compile (node:internal/modules/cjs/loader:1944:14)
    //     at Object..js (node:internal/modules/cjs/loader:2084:10)
    //     at Module.load (node:internal/modules/cjs/loader:1666:32)
    //     at Module._load (node:internal/modules/cjs/loader:1447:12)
    //     at wrapModuleLoad (node:internal/modules/cjs/loader:260:19)
    //     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    //     at node:internal/main/run_main_module:33:47

    // Node.js v26.4.0
// this type of error is called TypeError and it occurs when you try to reassign a value to a constant variable.


// let way of variable declaration
let courseLesson = "Lesson1"
console.log(courseLesson)
courseLesson = "Lesson2" // this is valid because let allows reassignment of value
console.log(courseLesson)

// var way of variable declaration 
// not need as of now, it was used on old code.


// naming variables
// camelCase is used everywhere in programming, it is a convention to use camelCase for variable names.
const fullName = "Arbin Bhasima" // camelCase
const isLoggedIn = true // camelCase
const totalPrice = 35000  // camelCase
const PI = 3.14 // UPPERCASE
const wrongName123 = "not wrong" // valid variable name, can end with a number
// const 123wrongName = "wrong" // invalid variable name, cannot start with a number
// const wrong-name = "wrong" // invalid variable name, cannot use hyphen
// const wrong name = "wrong" // invalid variable name, cannot use space

const x = "Arbin" // miss represents the value to the name
const data = true // miss represents the value to the boolean
const temp = 231313; // miss represents the value to the rupees
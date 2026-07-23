const student = {
    name: "Arbin",
    age: 23,
    isActive: true,
}

// accessing object properties using dot notation
// student.name 

// accessing object properties using bracket notation
// student["age"]

// dot for known keys 
// and bracket for dynamic keys

console.log(student.name); // Output: Arbin
console.log(student.age); // Output: 23
console.log(student.isActive); // Output: true
console.log(`Student name is ${student.name}, age is ${student.age}, and is active: ${student.isActive}`); 

// updating object properties
student.age = 24; // updating age property
console.log(`Updated student age: ${student.age}`); // Output: Updated student age: 24

// updating new properties to the object
student.isActive = false; // updating the isActive property
console.log(`Student is active: ${student.isActive}, updated active state`); // Output: Student is active: false, updated active state

// adding new properties to the object
student.course = "JavaScript"; // adding a new property course
console.log(`Student course: ${student.course}, new property added successfully`); // Output: Student course: JavaScript, new property added successfully

// deleting properties from the object
// delete student.isActive; // deleting the isActive property
// console.log(`Student is active: ${student.isActive}`); // Output: Student is active: undefined
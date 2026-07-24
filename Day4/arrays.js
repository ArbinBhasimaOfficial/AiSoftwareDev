// declaration and initialization of array
const fruits = ['banana', 'mango']
console.log(fruits)

// operations
// push adds an item at the end of an array
fruits.push('apple')
console.log(fruits)

// unshift adds an item at the start of the array
fruits.unshift('orange')
console.log(fruits)

// removes the item at the back of the array
fruits.pop();
console.log(fruits)

// removes the item at the start of the array
fruits.shift();
console.log(fruits)

// splice sets index, remove the item from the index to back, and inserts the item from setted index
fruits.splice(1, 0, 'grape') // index 1 // 0 means not item removed // grape is item inserted on index 1
console.log('Fruits:', fruits)
fruits.splice(1, 1, 'dragonfruit') // index 1 // 1 means one item removed // dragon fruit is added on index 1
console.log('Fruits:', fruits)


console.log("\n")

// initialized array named users
const users = [
    {id: 1, name: 'Arbin', active: true},
    {id: 2, name: 'Manon', active: false},
    {id: 3, name: 'Zizi', active: true},
]

// find returns first matching element
const userTwo = users.find(u => u.id === 2)
console.log(userTwo)

// findIndex returns index of the first matching element
const ZiziIndex = users.findIndex(u => u.name === 'Zizi')
console.log(ZiziIndex)

// some returns true if AT least one item matches
const HasInactive = users.some(u => !u.active)
console.log(HasInactive)

// every returns true if all items match
const allActive = users.every(u => u.active)
console.log(allActive)

console.log("\n")

// primitive value checks
const colors = ['cyan', 'blue', 'black']
console.log(colors.includes('cyan'))
console.log(colors.indexOf('black'))

const csv = colors.join(", ")
console.log(colors)
console.log(csv)


console.log("\n")

const num1 = [1,2]
const num2 = [3,4]
console.log(num1)
console.log(num2)

// concatenation
const combined = [...num1, ...num2]
console.log(combined)

// slice
const subArray = combined.slice(1,3)
console.log(subArray)

// nested
const nested = [1,[2,[3,4]]]
console.log(nested)

// flattened 
const flattened = nested.flat(2)
console.log(flattened)




console.log("\n")



// other initialized array
const numbers = [1,2,3,4,5]
console.log(numbers)

const doubled = numbers.map(n => n * 2) // map transform each item
console.log(doubled)

const highNumbers = numbers.filter(n => n > 3) // filter keep items matching a condition
console.log(highNumbers)

const sum = numbers.reduce((total, current) => total + current, 0) // reduce accumulates into a single value
console.log(sum)
numbers.forEach(n => console.log(`item: ${n}`))  // for each run a function for side effects

console.log("\n")

// sorting and reversing

const scores = [40, 100, 1, 5, 25]
console.log(scores)

// numeric sort from lowest to highest
scores.sort((a, b) => a - b)
console.log(scores)

const original = [3,1,2]
console.log(original)

// sorts non mutating sort 
const sorted = original.toSorted((a,b) => a-b)
console.log(sorted)

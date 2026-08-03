const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const localTodos = localStorage.getItem('todos'); // get the todos from localStorage
// console.log(localTodos, typeof localTodos); 
// const todosItems = localTodos ? JSON.parse(localTodos) : []; // parse the JSON string into an array, or use an empty array if there are no todos
// console.log({todosItems})
let todosItems = []
// this is wrong because we are trying to add a string to the array, 
// but we need to add an object with a property called "todo" that contains the string value.
// must be done event delegation because the li elements are created dynamically, 
// so we need to listen for the click event on the parent element (ul) and check if the target is a li element
// todosItems.forEach((todo) => {
//     createLiElement(todo)
// }) // wrong

// correct way to do it is 
try {
    if(localTodos){
        const parsedTodos = JSON.parse(localTodos); // parse the JSON string into an array
        if(Array.isArray(parsedTodos)) {
            todosItems = parsedTodos; // assign the parsed array to todosItems
        }
    }
} catch (error) {
    console.error("Error parsing todos from localStorage:", error);
}

todosItems.forEach((todo) => {
    createLiElement(todo)
})

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Form submitted!");

    // get the input value
    const inputValue = input.value;
    // console.log("Input value:", inputValue);
    
    // to add multiple items
    todosItems.push(inputValue) // add item on array
    // console.log(todosItems)
    // save in localstorage to make it save when refreshing the page

    // localStorage.setItem('todo', todosItems) // this will not work because localStorage only stores strings, 
    // so we need to convert the array to a string using JSON.stringify
    localStorage.setItem('todos', JSON.stringify(todosItems)) // it serializes the array into a JSON string, which can be stored in localStorage

    // common language amongst other languages
    // JSON.parse() is used to convert the JSON string back into an array when retrieving it from localStorage

    // clear the input field after submission
    input.value = '';
})

function createLiElement(todo){
    // add input value to the list
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = todo;
    li.appendChild(p);
    todoList.appendChild(li);
}
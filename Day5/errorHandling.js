// try {
// write the error generating questions here
// } catch (error) {
// write the error which is catched in this block
// }

// for error handling

// throwing custom errors
// why

// divide by 0
function divide(a, b) {
  if (b === 0) {
    throw new Error("cannot divide by zero");
  }

  return a / b;
}

try {
  const result = divide(10, 0);
  const subtractedValue = result - 0;
  console.log(subtractedValue);
} catch (error) {
  console.log(error);
}



// error as first class citizions

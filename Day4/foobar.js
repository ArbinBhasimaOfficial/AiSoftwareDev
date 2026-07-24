// Write a program that prints FOO BAR for numbers from 1 - 100
// If a number is divisible by 3, print FOO
// If a number is divisible by 5, print BAR
// If a number is divisible by both 3 and 5, print FOO BAR
// If a number is not divisible by 3 or 5, print the number itself

for (let num = 1; num <= 100; num++){

  const isDivisibleBy3 = num % 3 === 0;
  const isDivisibleBy5 = num % 5 === 0;
  if (isDivisibleBy3 && isDivisibleBy5){
    console.log("FOO BAR")
  }else if(isDivisibleBy3){
    console.log("FOO")
  }else if(isDivisibleBy5){
    console.log("BAR")
  }else{
    console.log(num)
  }
}



// logical and operation &&
// logical OR operation ||

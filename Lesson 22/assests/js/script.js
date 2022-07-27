
/* program to check whether the last digit of three
numbers is same */

// input
let a = prompt('Enter the first number: ');
let b = prompt('Enter the second number: ');
let c = prompt('Enter the third number: ');

// find the last digit
let result1 = a % 10;
let result2 = b % 10;
let result3 = c % 10;

// compare the last digits
if(result1 == result2 && result1 == result3) {
    console.log(`${a}, ${b} and ${c} have the same last digit.`);
}
else {
    console.log(`${a}, ${b} and ${c} have different last digit.`);
}

let message = prompt ('Enter: Hello world');
return message('Hello world');
console.log (message);


let a = 10;
let b = 20;
[a, b] = [b, a];
console.log();

let numberOne = prompt('Enter the number');
let userNumber = parseInt(numberOne);

// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");

    // check if number is 0
else if (number === 0) {
    console.log("The number is zero");
  }
  
  // if number is less than 0
  else {
       console.log("The number is negative");

       const number = prompt("Enter a number: ");
       if parseInt (number % 2) {
        console.log("The number is even.");
    }
    else {
        console.log("The number is odd.");
    }

let num1 = parseFloat(prompt("Enter first number: "));
let num2 = parseFloat(prompt("Enter second number: "));
let num3 = parseFloat(prompt("Enter third number: "));

let largest = Math.max(num1, num2, num3);

console.log("The largest number is " + largest);


let number = parseInt(prompt('Enter a number: '));
if (number < 0) {
    console.log('Error! Factorial does not exist.');
}

else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// program to find the factorial of a number

// take input from the user
const number = parseInt(prompt('Enter a number: '));

// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let result = 1;
    for (i = 1; i <= number; i++) {
        result *= i;
    }
    console.log(`The factorial of ${number} is ${result}.`);
}


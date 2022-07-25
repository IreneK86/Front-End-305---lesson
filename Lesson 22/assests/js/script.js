
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

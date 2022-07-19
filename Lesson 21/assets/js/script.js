let name = prompt('Tell me your name, please');
console.log(name);

let numberOne = prompt('type 10');
let numberTwo = prompt('type 10');
let z = parseInt(numberOne) + parseInt(numberTwo);
console.log(z);

alert('Good job!')

let userName = prompt('Enter your name: ');
console.log(userName);
alert('Your name is ' + userName)

let birthDate = prompt('Enter your year of birth ');
const nowDate = 2022;
let userAge = nowDate - parseInt(birthDate);
console.log(userAge);
alert('You are ' + userAge + ' this year')

let sideOfSquareLength = prompt('Enter the length of a square in meters');
let perimeterSquare = parseInt(sideOfSquareLength) * parseInt(sideOfSquareLength);
console.log(perimeterSquare);
alert('Perimeter of the Square is ' +  perimeterSquare + ' meters' )

let radiusOfCircle = prompt('Enter the radius of a circle');
let areaOfCircle = 3.14 * parseInt(radiusOfCircle) * parseInt(radiusOfCircle);
console.log(areaOfCircle);
alert('Area of the Circle is ' + areaOfCircle)

let distance = prompt('Enter the distance in km between the two cities (km)');
let time = prompt('Enter the time you want to cover it within (h)');
let speed = parseInt(distance) / parseInt(time);
console.log(speed);
alert('Result is ' + speed + ' km/hour' )





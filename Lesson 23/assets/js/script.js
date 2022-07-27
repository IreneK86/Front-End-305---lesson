
/*Task 1. Write a function that accepts 2 numbers 
and returns -1 if the first one is smaller than the second,
1 if it is vice versa, and 0 if they are equal.*/

    let a = parseInt (prompt('Enter a number: '));
    let b = parseInt (prompt('Enter a number: '));

    if (a < b)
        console.log ('Result: -1');

    if (b < a)
        console.log ('Result: 1');


    if (a === b)
        console.log ('Result: 0');

    //Task 2. Write a function that counts the factorial of a given number. //

    let number = parseInt(prompt('Enter a number: '));

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

    /*Task 3. Write a function that accepts three separate digits and makes them a number. 
    For example, 1, 4, and 9 will become 149.*/

    let num1 = parseInt (prompt('Enter a number: '));
    let num2 = parseInt (prompt('Enter a number: '));
    let num3 = parseInt (prompt('Enter a number: '));
    let numbersAsString = `${num1}${num2}${num3}`;
    console.log(numbersAsString);

    /*Task 4. Write a function that accepts the width and length of a rectangle and calculates its area. 
    If there is only one parameter given, it counts as a square.*/

    let length = parseInt (prompt('Enter length of a rectangle: '));
    let width = parseInt (prompt('Enter width of a rectangle: '));
    let area = (length * width);
    console.log(`The area of a rectangle is ${area}`);
    
    // If there is only one parameter given
    if (width==0) {
        let area = (length * length);
        console.log(`The area of a square is ${area}`);
    }

    /*Task 7. Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss.*/

    let hours = parseInt (prompt('Enter hours: '));
    let minutes = parseInt (prompt('Enter minutes: '));
    let seconds = parseInt (prompt('Enter seconds: '));
    let timeAsString = `${hours}:${minutes}:${seconds}`;
    console.log(timeAsString);

    /*Task 8. Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. 
    For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.*/
    let hour = parseInt (prompt('Enter hours: '));
    let minute = parseInt (prompt('Enter minutes: '));
    let second = parseInt (prompt('Enter seconds: '));

    let hoursInSec = (hour * 3600);
    let munutesInSec = (minute * 60);
    alert(hoursInSec + munutesInSec + second);

    
    
    
let user = {
    name: 'Ira'
    age: 25
}
for (let key in user) {
    console.log (user[key]);
}

let user1 = {
name: 'Ira',
age: 26
}

let user2 = {
gender: 'female'
}

let user3 = Object.assign(user1, user2);

console.log(user3);




let object = {
fruit: 'orange'
vegetable: 'tomato'

}
console.log(Object.keys(object).length);




let object = {
name: 'Jane'
age: 25
gender: female
}
let string = JSON.stringify(object);
console.log(string);




let array = ['you', 'are', 'awesome'];
let hasValue = array.includes('awesome');

if(hasValue) {
console.log('Yes');
} else {
console.log('No');
}



let array = ['love', 'hate', 'adoration', 'love', 'hate'];
let uniqueArray = [...new Set(array)];

console.log(uniqueArray);
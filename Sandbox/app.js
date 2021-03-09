// const name = "John";
// const job = "Web Developeer";
// const age = 45;
// const city  = "Miami";

// html = `
// <ul>
//       <li>Name: ${name}</li>
//       <li>Job: ${job}</li>
//       <li>Age: ${age}</li>
//       <li>City: ${city}</li>
//       <li>${hello()}<li/>
// </ul>`;
// document.body.innerHTML = html;

// function hello (){
//       return "Hello There, I am Gbenga by name, You ?";
// }


const numbers = [5,7,3,12,89,43,90];
//  Or

const anotherNumber = new Array(33,22,44,55,66,77);
// Arrays hwere can havea mixed types

// let val ;

// val = Array.isArray(numbers)
// val = numbers[6]
// numbers[5] = 500;

// console.log(numbers);
// console.log(val);

// const person = {
//       firstName = "Steve"
// }

// let val ;
// val = person;

// console.log(val);


// let val ;
// const today = new Date()
// const birthDay = new Date ('9-10-1991 11:25:00')
// val = birthDay
// console.log(val)

// FUNCTION DECLARATION & EXPRESSIONS

function greet (firstName, lastName){
      // console.log ("How far");

      return "Hello " + firstName + " " + lastName
}

console.log(greet("Michael", "Anifowoshe"));

// FUNCTION EXPRESSION
const square = function(x = 2) {
      return x * x;
}

console.log(square(19))

//  IMMEDIATELY INVOKEABLE FUNCTION EXPRESSIONS


// (function(){
//     return "Hello"
// })();


//  Property method



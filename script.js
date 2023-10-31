//2 . Exercises Block Javascript Advanced -
// Exercise 1
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.
//SOLUTION: 
// function filterRange(arr, a, b) {
//   let filteredArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];

//     if (element >= a && element <= b) {
//       filteredArray.push(element);
//     }
//   }
//   return filteredArray;
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);
// console.log(filtered);

// #######################################################################################################

//2. You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
//SOLUTION: 
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// let names = users.map((user) => user.name);
// console.log(names);

// #######################################################################################################

//3.Exercises
// Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.
// The formula for the average is (age1 + age2 + ... + ageN) / N. For instance:
//SOLUTION: 
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];
//Loop with map to find the age of each object.
function getAverageAge(arr) {
  let ageItem = arr.map((person) => person.age);
  //Sum items inside the new array with ages
  let resultSum = ageItem.reduce((a, x) => (a += x), 0);
  //calc average
  let average = resultSum / arr.length;
  return average;
}

console.log(getAverageAge(arr));

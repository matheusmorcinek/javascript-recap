// Description: Write a function that takes an array of numbers as 
// input and returns a new array where each element is doubled.
//  Solve this challenge using the map method.

const numbers = [1, 2, 3, 4, 5];


const doubledNubers = (array) => {
    return array.map(value => value * 2);
};

console.log(doubledNubers(numbers));
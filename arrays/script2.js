// Description: Write a function that takes an array of numbers as input and returns a
//  new array containing only the even numbers from the original array.
//  Solve this challenge using the filter method.


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const onlyEven = (array) => {
    return numbers.filter(value => value % 2 === 0);
};

console.log(onlyEven(numbers));
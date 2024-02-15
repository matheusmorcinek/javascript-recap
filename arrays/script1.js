// Description: Write a function that takes an array of numbers as input 
// and returns the sum of all the numbers in the array. Solve this challenge using the reduce method.


const numbers = [1, 2, 3, 4, 5];


const sumValues = (array) => {

    return array.reduce((previous, current) => {
        return previous + current;
    });
};

console.log(sumValues(numbers));    
// Challenge 2: Write a function that takes an array of numbers as a parameter and returns the sum of all the numbers in the array. 
// Then, call the function with an array of numbers and log the result to the console.


const numbers = [3, 7, 2, 10];

const sumArrayValues = (numbers) => { 
    let result = 0;
    numbers.forEach(value => {
        result += value;
    }); 
    return result;
};

console.log(sumArrayValues(numbers));
// Challenge 5: Write a function that takes an array of numbers as a parameter and returns 
// a new array containing only the even numbers from the original array.
//  Then, call the function with an array of numbers and log the result to the console.

// const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenOnlyNumbers = (array) => {
//     let result = array.reduce((evenArray, value) => {
//         if (value % 2 === 0) { 
//             evenArray.push(value);
//         };

//         return evenArray;
//     }, []);
//     return result;
// };

// console.log(evenOnlyNumbers(numbersArray));


const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenOnlyNumbers = (array) => {
    return array.filter(value => value % 2 === 0);
};

console.log(evenOnlyNumbers(numbersArray));
// Challenge 9: Write a function that takes an array of numbers as a parameter and returns the largest number in the array.
//  Then, call the function with an array of numbers and log the result to the console.

const numbersArray = [15, 3, 27, 8, 42, 11, 6];

const largestNumber = (array) => {

    return array.reduce((previous, current) => {
        if (current > previous) {
            return current;
        }

        return previous;
    }, 0)
};

console.log(largestNumber(numbersArray));
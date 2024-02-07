// Challenge 3: Write a function that takes a string as a parameter and returns the reversed version of the string.
//  Then, call the function with any string and log the result to the console.

const inputString = "hello world";

function reverseString(text) {
    const letterArray = text.split('');
    let result = '';
    for (let index = letterArray.length - 1; index >= 0; index--) {
        const letter = letterArray[index];
        result += letter;
    }
    return result;
}

console.log(reverseString(inputString));
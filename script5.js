// Challenge 4: Write a function that takes an array of strings as a parameter and returns a new array containing the lengths of the strings. 
// Then, call the function with an array of strings and log the result to the console.

const stringsArray = ["apple", "banana", "orange", "kiwi"];

const arrayLenghts = (array) => {
    
    let result = array.map(value => {
        return value.length;
    })

    return result;
};

console.log(arrayLenghts(stringsArray));
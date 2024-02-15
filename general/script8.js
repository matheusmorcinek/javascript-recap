// Challenge 8: Write a function that takes two arrays as parameters and returns a new array containing 
// elements that are present in both arrays. 
// Then, call the function with two arrays and log the result to the console.


const concatArrays = (arrayOne, arrayTwo) => {
    return arrayOne.filter(element => arrayTwo.includes(element));
};
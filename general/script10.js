// Challenge 11: Write a function that takes an array of objects and a key as parameters,
//  and returns a new array containing the values of the specified key from each object. 
//  Then, call the function with an array of objects and a key, and log the result to the console.

const objectsArray = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
];

const getKeys = (array) => {
    return array.map(object => {
        return object.age
    });
};

console.log(getKeys(objectsArray));
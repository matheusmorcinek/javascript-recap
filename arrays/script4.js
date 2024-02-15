// 


const numbers = [1, 2, 3, 4, 5];

const multiplyValues = (array) => {
    return numbers.reduce((previous, current) => {
        return previous * current;
    });
};

console.log(multiplyValues(numbers));
const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Led TV', price: 2000 },
    { name: 'Album', price: 20 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 }
];

//filter
console.log(items.filter(item => item.price > 100));

//map
console.log(items.map(item => item.name));

//find
console.log(items.find(item => item.price >= 1000));

//foreach
items.forEach(item => console.log(item.price));

//some
console.log(items.some(item => item.name === 'Elephant'));

//every
console.log(items.every(item => item.price > 1));

//reduce
console.log('total prices: ', items.reduce((accumulator, item) => {
    return accumulator + item.price
}, 0));

// includes
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.includes(4));
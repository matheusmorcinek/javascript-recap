const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 20 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 }
];

//filter
console.log('filter ', items.filter(item => item.price < 100));

//mappr
console.log('map ', items.map(item => item.name));

//find
console.log('find ', items.find(item => item.name === 'Computer'));

//foreach
items.forEach(item => console.log(item.name));

//some
console.log('some ', items.some(item => item.price < 100));

//every
console.log('every', items.every(item => item.price >= 5));

//reduce
console.log('reduce ', items.reduce((accumulator, currentValue, currentIndex) => {
    return accumulator + currentValue.price;
}, 0));

// includes
const numbers = [1, 2, 3, 4, 5, 6];
console.log('includes ', numbers.includes(3));
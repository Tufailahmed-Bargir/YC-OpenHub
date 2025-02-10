const data = require('./data')

console.log('lol');

const id = 72;
const findData = data.find(item => item.id === id); // Returns the object itself

console.log('findData is', findData);

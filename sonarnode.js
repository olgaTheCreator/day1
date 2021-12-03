const fs = require('fs')
const data = fs.readFileSync('bb.txt', 'utf8')
const arr = data.split('\n').map(a => parseInt(a, 10))

let numberOfIncreases = 0;

for (let i=0; i< arr.length; i++) {
    if (arr[i] <= arr[i+1]) {
        numberOfIncreases++
    }
};
console.log(numberOfIncreases);
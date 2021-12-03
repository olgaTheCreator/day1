const fs = require('fs');
const data = fs.readFileSync('test.txt', 'utf8');
const arr = data.split('\n').map(a => parseInt(a, 10));

let numberOfIncreases = 0;


for (let i=0; i< arr.length; i++) {
    if (arr[i]+arr[i+1]+arr[i+2] < arr[i+1]+arr[i+2]+arr[i+3]) {
        numberOfIncreases++
    }
};
//console.log(arr);
console.log(numberOfIncreases);
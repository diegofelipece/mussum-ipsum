/* 
Mispum.js
First tests 0.1
*/

// Define the min and max value to sort
var min = 1,
    max = 20;

// sort function
function getRandomArbitrary(min, max) {
  n = Math.random() * (max - min) + min;
  return parseInt(n, 10);
}

// show result
var randomResult = getRandomArbitrary(min, max);
console.log(randomResult);


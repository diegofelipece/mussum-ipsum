/* 
Mispum.js
First tests 0.1
*/

// Define the min and max value to sort
var min = 0,
    max = 19;// 1 less to adjust with the array index

// sort function
function getRandomNumber(min, max) { 
  n = Math.random() * (max - min) + min;
  return parseInt(n, 10);
}

// define the paragraphs
var paragraphs = ["paragraph1", "paragraph2", "paragraph3", "paragraph4", "paragraph5", "paragraph6", "paragraph7", "paragraph8", "paragraph9", "paragraph10", "paragraph11", "paragraph12", "paragraph13", "paragraph14", "paragraph15", "paragraph16", "paragraph17", "paragraph18", "paragraph19", "paragraph20"];
console.log(paragraphs);

for (var i = 0; i < max; i++){
  // show result
  var randomResult = getRandomNumber(min, max)  ; 
  console.log(paragraphs[randomResult]);
}

console.log(paragraphs);
var exclude = paragraphs.lastIndexOf("paragraph19", 19);
console.log(exclude);
paragraphs.splice(exclude, 1); //exlude the used value for the array
console.log(paragraphs);


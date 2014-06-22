/* 
Mispum.js
First tests 0.1
*/

// define the paragraphs
var paragraphs = ["paragraph1", "paragraph2", "paragraph3", "paragraph4", "paragraph5", "paragraph6", "paragraph7", "paragraph8", "paragraph9", "paragraph10", "paragraph11", "paragraph12", "paragraph13", "paragraph14", "paragraph15", "paragraph16", "paragraph17", "paragraph18", "paragraph19", "paragraph20"];
  
// How many times u need to loop, this will be set by user
var turns = 20;

for (var i = 0; i < turns; i++){
  // Define the min and max value to sort
  var min = 1,
      max = paragraphs.length;

  // sort function
  function getRandomNumber(min, max) { 
    n = Math.random() * (max - min) + min;
    return Math.round(n) - 1; // 1 less of the total arrays to adjust with the array index
  }

  var randomResult = getRandomNumber(min, max);
  console.log(paragraphs[randomResult]); //print the selected value;
  paragraphs.splice(randomResult, 1); //exlude the used value for the array
  max --; //decrease max getRandomNumber
};


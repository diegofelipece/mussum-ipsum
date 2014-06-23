/* 
Mispum.js
First tests 0.1
*/

// Define quotes
var quotes = [
  "quote1",
  "quote2",
  "quote3",
  "quote4",
  "quote5",
  "quote6",
  "quote7",
  "quote8",
  "quote9",
  "quote10",
  "quote11",
  "quote12",
  "quote13",
  "quote14",
  "quote15",
  "quote16",
  "quote17",
  "quote18",
  "quote19",
  "quote20",
  "quote21",
  "quote22",
  "quote23",
  "quote24",
  "quote25",
  "quote26",
  "quote27",
  "quote28",
  "quote29",
  "quote30",
  "quote31",
  "quote32",
  "quote33",
  "quote34",
  "quote35",
  "quote36",
  "quote37",
  "quote38",
  "quote39",
  "quote40"
];

var paragraphs = [];

// 1 paragraph == 4 quotes
var quotesLength = quotes.length; 

//Create a Paragraph
  // Define the min and max value to sort
  var min = 1,
      max = quotesLength;

  for (var y = 0; y < 10; y++){
    for (var i = 0, tempParagraph = ""; i < 4; i++){
      // sort function
      function getRandomNumber(min, max) { 
        n = Math.random() * (max - min) + min;
        return Math.round(n) -1; // 1 less of the total arrays to adjust with the array index
      }
      var randomResult = getRandomNumber(min, max);
      
      var q = quotes[randomResult];
      tempParagraph += q + " ";
      quotes.splice(randomResult, 1); //exlude the used value for the array
      max --; //decrease max getRandomNumber

      if (i==3) {
        var name = tempParagraph + "1";
        paragraphs.push(tempParagraph);
        break;
      };
    };
  };

console.log(paragraphs);

var mIpsumStart = "Mussum Ipsum, cacilds vidis litro abertis. ";
  
// How many times u need to loop, this will be set by user
var turns = 10;

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
  if (i == 0 ) {
    console.log(mIpsumStart + paragraphs[randomResult]); //print the selected value;
  } else{
    console.log(paragraphs[randomResult]); //print the selected value;    
  };
  paragraphs.splice(randomResult, 1); //exlude the used value for the array
  max --; //decrease max getRandomNumber
};


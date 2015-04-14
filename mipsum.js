/* 
---------------
mipsum.js v0.2
---------------
Proudly made for mussumipsum.com by Diego Esteves
*/

  /*
  Function to sort a number
  ----------------- >
  */
    // Define the min and max value to sort
    var min = 1, 
        max = "";
    function getRandomNumber(min, max) { 
      n = Math.random() * (max - min) + min;
      return Math.round(n) -1; // 1 less of the total arrays to adjust with the array index
    }

  /*
  Creating paragraphs
  ----------------- >
  */
    function creatingParagraphs() {
      // Define quotes

      var quotes = [
        "quote1",
        // "Pra lá , depois divoltis porris, paradis. ",
        "quote2",
        // "Paisis, filhis, espiritis santis. ",
        "quote3",
        // "Mé faiz elementum girarzis, nisi eros vermeio. ",
        "quote4",
        // "Manduma pindureta quium dia nois paga. ",
        "quote5",
        // "Sapien in monti palavris qui num significa nadis i pareci latim. ",
        "quote6",
        // "Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.",
        "quote7",
        // "Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. ",
        "quote8",
        // "Interagi no mé, cursus quis, vehicula ac nisi. ",
        "quote9",
        // "Casamentiss faiz malandris se pirulitá.",
        "quote10",
        // "Cevadis im ampola pa arma uma pindureta. ",
        "quote11",
        // "Atirei o pau no gatis, per conubia nostra, per inceptos himenaeos. ",
        "quote12",
        // "Viva Forevis aptent taciti sociosqu ad litora torquent ",
        "quote13",
        // "Copo furadis é disculpa de bebadis, arcu quam euismod magna. ",
        "quote14",
        // "Delegadis gente finis, bibendum egestas augue arcu ut est. ",
        "quote15",
        // "in elementis mé pra quem é amistosis quis leo. "
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

      window.paragraphs = [];
      // window.preResult = "";

      var quotesLength = quotes.length,
          max = quotesLength; //redefine max value

      // It makes 10 paragraphs
      for (var y = 0; y < 10; y++){
        // 1 paragraph == 4 quotes
        for (var i = 0, tempParagraph = ""; i < 4; i++){
          // sort function
          var randomResult = getRandomNumber(min, max);

          var q = quotes[randomResult];
          tempParagraph += q + " "; // append the quote on a temp string
          quotes.splice(randomResult, 1); //exlude the used value for the array
          max --; //decrease max getRandomNumber

          if (i==3) {
            // Push the the tem string to the paragraphs array
            // tempParagraph += "\n" ; // append the quote on a temp string
            paragraphs.push(tempParagraph);
            break;
          };
        };
      };

      // console.log(paragraphs);
      sortParagraphs();    
    };

  /*
  Sorting paragraphs
  ----------------- >
  */
    window.preResult = "";
    function sortParagraphs(){
      // console.log('laps = ' + window.laps);
      for (var i = 0, result = "", mIpsumStartCount = 0; i < window.laps; i++){
        var max = paragraphs.length; // Define the max number of paragraphs
        // sort function
        var randomResult = getRandomNumber(min, max);

        var pTagBegin = "<p>",
            pTagEnd = "</p>",
            hTagBegin = "<h1>",
            hTagEnd = "</h1>";


        if (window.pTag == true) {
          toShow = pTagBegin + paragraphs[randomResult] + pTagEnd;
        } else if (window.hTag == true){
          toShow = hTagBegin + paragraphs[randomResult] + hTagEnd;
        } else{

          // Insert Mussum Ipsum only at the first paragraph
          if (mIpsumStartCount == 0) {
            var mIpsumStart = "Mussum Ipsum, cacilds vidis litro abertis. ";
            mIpsumStartCount ++;
          } else{
            var mIpsumStart = "";
          };

          toShow = "<p>" + mIpsumStart + paragraphs[randomResult] + "<p>";
        };

        window.preResult += toShow;

        paragraphs.splice(randomResult, 1); //exlude the used value for the array
        max --; //decrease max getRandomNumber
      };
    };


    function showResult(){

      var divResult = document.getElementById('result');

      var result = window.preResult; //transfer global data to local
      window.preResult = "";

      // console.log(result);
      divResult.innerHTML = result;
    };
  /*
  Triggres
  ----------------- >
  */
    function mIpsumTrigger(turnsNum, pTagSet, hTagSet){
      window.pTag = false,
      window.hTag = false;

      window.turns = turnsNum;
      // window.turns = encodeURI(document.getElementById('turns').value);

      if (window.turns <= 10) {
        console.log('<10');
        // console.log('window.turns = ' + window.turns);
        window.laps = window.turns;
        creatingParagraphs();
        // console.log('criou menos de 10 paragrafos e guardou na variavel');
        // console.log('Imprime a variavel');     
        showResult();
      } else{
        for( ;window.turns > 10; ){
          console.log('>10');
          window.laps = 10;
          // console.log('window.turns = ' + window.turns);
          creatingParagraphs();
          // console.log('criou 10 paragrafos e guardou na variavel');
          window.turns -= 10;
          // console.log('window.turns = ' + window.turns);
          window.append += window.preResult;
          if (window.turns < 10) {
            console.log('sobra do >10');
            window.laps = window.turns;
            // console.log('window.turns = ' + window.turns);
            // console.log('criou menos de 10 paragrafos e guardou na variavel');
            creatingParagraphs();
            // console.log('Imprime a variavel');            
            showResult();
          };
        };
      }

    };













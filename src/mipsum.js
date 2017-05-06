/*
---------------
mipsum.js v2.0.2
---------------
Proudly made for mussumipsum.com by Diego Esteves
*/

  /*
  Function to sort a number
  ----------------- >
  */
    // Define the min and max value to sort
    var n,
        min = 1,
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
        "Pra lá , depois divoltis porris, paradis. ",
        "Paisis, filhis, espiritis santis. ",
        "Mé faiz elementum girarzis, nisi eros vermeio. ",
        "Manduma pindureta quium dia nois paga. ",
        "Sapien in monti palavris qui num significa nadis i pareci latim. ",
        "Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.",
        "Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. ",
        "Interagi no mé, cursus quis, vehicula ac nisi. ",
        "Casamentiss faiz malandris se pirulitá.",
        "Cevadis im ampola pa arma uma pindureta. ",
        "Atirei o pau no gatis, per gatis num morreus. ",
        "Viva Forevis aptent taciti sociosqu ad litora torquent ",
        "Copo furadis é disculpa de bebadis, arcu quam euismod magna. ",
        "Delegadis gente finis, bibendum egestas augue arcu ut est. ",
        "In elementis mé pra quem é amistosis quis leo. ",
        "Não sou faixa preta cumpadi, sou preto inteiris, inteiris. ",
        "Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. ",
        "Suco de cevadiss deixa as pessoas mais interessantis. ",
        "Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. ",
        "Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! ",
        "Quem manda na minha terra sou euzis! ",
        "Si num tem leite então bota uma pinga aí cumpadi! ",
        "Diuretics paradis num copo é motivis de denguis. ",
        "Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. ",
        "A ordem dos tratores não altera o pão duris. ",
        "Quem num gosta di mim que vai caçá sua turmis! ",
        "Quem num gosta di mé, boa gentis num é. ",
        "Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! ",
        "Per aumento de cachacis, eu reclamis. ",
        "Detraxit consequat et quo num tendi nada. ",
        "Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. ",
        "Leite de capivaris, leite de mula manquis sem cabeça. ",
        "Aenean aliquam molestie leo, vitae iaculis nisl. ",
        "Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. ",
        "Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. ",
        "Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. ",
        "Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. ",
        "Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. ",
        "Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. ",
        "Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. "
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
    var toShow;
    window.preResult = "";
    window.mIpsumStartCount = 0;
    function sortParagraphs(){
      // console.log('laps = ' + window.laps);
      for (var i = 0, result = ""; i < window.laps; i++){
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
          if (window.mIpsumStartCount == 0) {
            var mIpsumStart = "Mussum Ipsum, cacilds vidis litro abertis. ";
            window.mIpsumStartCount ++;
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

      // reset "mIpsumStartCount"
      window.mIpsumStartCount = 0;
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

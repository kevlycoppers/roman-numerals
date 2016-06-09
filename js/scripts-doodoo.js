// BACKEND

// var M = 1000;
// var D = 500;
// var C = 100;
// var L = 50;
// var X = 10;
// var V = 5;
// var I = 1;

var romanArray = [];
var romanString;
var fixedRomanString;
var fixedRomanArray = [];

var converter = function(userInput) {
  if (userInput >= 4000) {
    alert("Please enter a number smaller than 4000!");
  } else {
  while (userInput >= 1000) {
    romanArray.push("M");
    userInput -= 1000;
    console.log(userInput);
  } if (userInput < 1000) {
      while (userInput >= 500) {
        romanArray.push("D");
        userInput -= 500;
        console.log(userInput);
      } if (userInput < 500) {
          while (userInput >= 100) {
            romanArray.push("C");
            userInput -= 100;
            console.log(userInput);
          } if (userInput < 100) {
              while (userInput >= 50) {
                romanArray.push("L");
                userInput -= 50;
                console.log(userInput);
              } if (userInput < 50) {
                  while (userInput >= 10) {
                    romanArray.push("X");
                    userInput -= 10;
                    console.log(userInput);
                  } if (userInput < 10) {
                      while (userInput >= 5) {
                        romanArray.push("V");
                        userInput -= 5;
                        console.log(userInput);
                      } if (userInput < 5) {
                          while (userInput >= 1) {
                            romanArray.push("I");
                            userInput -= 1;
                            console.log(userInput);
                          }
                            romanString = romanArray.join("");
                            if ((romanString.search("IIII")) {
                              console.log("true");
                              var fixedRomanString = romanString.slice(0,romanString.length-3).concat("V");
                              fixedRomanArray.push(fixedRomanString);

                          }
                        }
                    }
                }
            }
        }
    }
  }

}







// FRONTEND
$(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();

    var userNumber = parseInt($("#user-number").val());

    converter(userNumber);
    console.log(romanArray);
    console.log(romanString);
    console.log(fixedRomanArray);

  });
});

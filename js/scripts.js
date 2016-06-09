// BACKEND
var M = "M";
var D = "D";
var C = "C";
var L = "L";
var X = "X";
var V = "V";
var I = "I";

var singlesArray = [];
var tensArray = [];
var hundredsArray = [];
var singlesPlace;
var tensPlace;
var hundredsPlace;
var singles;
var tens;
var hundreds;
var romanNumeralResult;

var splicer = function(userInput) {
  singlesPlace = userInput % 10;
  tensPlace = ((userInput - singlesPlace) % 100);
  hundredsPlace = ((userInput - tensPlace - singlesPlace) % 1000);
  tensPlace = tensPlace.toString().slice(0,1);
  hundredsPlace = hundredsPlace.toString().slice(0,1);
  // console.log(singlesPlace);
  // console.log(tensPlace);
  // console.log(hundredsPlace);
}

var converter = function(digitsPlace, digitsArray, x, y, z) {
  // Add roman numerals equal to the value of digitsPlace, ie 9 = IIIIIIIII
  for (i = 0; i < digitsPlace; i++) {
    digitsArray.push(x);
  }
  // For values that repeat more than 5 times, drop 5 iterations and replace at beginning, ie IIIII = V
  if (digitsArray.length > 5) {
    for (i = 0; i < 5; i++) {
      digitsArray.pop();
    }
    digitsArray.unshift(y);
    // For values that repeat more than 5 times, if 5 numerals remain, drop all and replace appropriately, ie VIIIII = IX
    if (digitsArray.length === 5) {
      for (i = 0; i < 5; i++) {
        digitsArray.pop();
      }
      digitsArray.push(x);
      digitsArray.push(z);
    }
  } else {
      // For values that repeat less than 5 times, if 4 numerals repeat, drop 3 and add numeral to end, ie. IIII = IV
      if (digitsArray.length === 4) {
        for (i = 0; i < 3; i++) {
          digitsArray.pop();
        }
        digitsArray.push(y);
      }
      // For values that repeat 5 times, drop all and replace, ie. IIIII = V
      if (digitsArray.length === 5) {
        for (i = 0; i < 5; i++) {
          digitsArray.pop();
        }
        digitsArray.push(y);
      }
  }
  // Returns array for each after all calculations run
  return digitsArray;
}

var romanNumeral = function(singles, tens, hundreds) {
  singles = converter(singlesPlace, singlesArray, I, V, X);
  tens = converter(tensPlace, tensArray, X, L, C);
  hundreds = converter(hundredsPlace, hundredsArray, C, D, M);
  var numeralArray = hundreds.concat(tens.concat(singles));
  romanNumeralResult = numeralArray.join("");
  return romanNumeralResult;
}

// FRONTEND
$(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();

    singlesArray = [];
    tensArray = [];
    hundredsArray = [];

    var userNumber = parseInt($("#user-number").val());

    splicer(userNumber);
    romanNumeral(singles, tens, hundreds);
    $("#display-result").text(romanNumeralResult);
    $("#conversion").show();
  });
});

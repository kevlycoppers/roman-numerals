// BACKEND
var reducedArray;

var messageArray = function(userString) {
  var noPunctuationString = userString.replace(/[^a-zA-Z]/g, "");
  reducedArray = noPunctuationString.toLowerCase().split("")
  return reducedArray;
}

var secretMessage = function(englishArray) {
  for (var i = 0; i < (Math.ceil(Math.sqrt(englishArray.length))); i++) {
  var code = englishArray[i] + (englishArray[i + (Math.floor(Math.sqrt(englishArray.length)))]);
    // for (var i = 0; i < (Math.ceil(Math.sqrt(englishArray.length))); i++)
    // code + englishArray[i + (Math.sqrt(englishArray.length))]

  console.log(code);
  console.log(Math.ceil(Math.sqrt(englishArray.length)));
  }
}






// FRONTEND
$(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();

    var userMessage = $("#user-message").val();

    messageArray(userMessage);
    secretMessage(reducedArray);
    $("#display-result").text(secretMessage);
    $("#conversion").show();
  });
});

var sentence = prompt("Please enter a sentence.");
console.log(sentence);
var stringLength = sentence.length;

var cipher1 = function(sentence) {
  var chars = sentence.charAt(0) + sentence.charAt(stringLength -1);
  return chars.toUpperCase();
};

alert(cipher1(sentence));

 var cipher2 = function(sentence) {
 var chars = sentence.charAt(stringLength -1) + sentence.charAt(0);
 return chars.toUpperCase();
};

alert(cipher2(sentence));

var cipher3 = function(sentence, cipher2) {
  return sentence.concat(cipher2(sentence));
}

alert(cipher3(sentence, cipher2));

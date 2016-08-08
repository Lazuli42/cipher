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

var cipher4 = function(sentence){
var index =  sentence.length / 2;
var indexr = Math.round(index);
var char = sentence.charAt(indexr);
return char;
}
alert(cipher4(sentence) + cipher3(sentence, cipher2));

var final = cipher4(sentence) + cipher3(sentence, cipher2);

function reverse(final){
return final.split('').reverse().join('');
}

alert(reverse(final));

$(".original").click(function() {
  alert(sentence)
});

$(".cipher").click(function() {
  alert(reverse(final))
});

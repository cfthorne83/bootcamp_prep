/***********************************************************************
Write a function shiftChars(word, num) that takes in a lowercase string
and a number. The function should return a string where every character
of the word is shifted `num` times in the alphabet.

Use this alphabet array to help:

var alphabet = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
];

Examples:

shiftChars('able', 1); // => 'bcmf'
shiftChars('apple', 2); //=> 'crrng'
shiftChars('bootcamp', 3); //=> 'errwfdps'
shiftChars('zebra', 5); //=> 'ejgwf'
***********************************************************************/

function shiftChars(word, num) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var shifted = '';

  for (var i = 0; i < word.length; i += 1) {
    var char = word[i];
    var index = alphabet.indexOf(char);
    var newIndex = (index + num) % 26;

    shifted += alphabet[newIndex];
  }

  return shifted;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = shiftChars;

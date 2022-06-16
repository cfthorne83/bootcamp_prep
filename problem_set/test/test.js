/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var safeSpeedChange = tryRequire('../problems/1_safe_speed_change.js');
var isUniqueAnagram = tryRequire('../problems/2_is_unique_anagram.js');
var reverseHipsterfy = tryRequire('../problems/3_reverse_hipsterfy.js');
var winningHand = tryRequire('../problems/4_winning_hand.js');
var shiftChars = tryRequire('../problems/5_shift_chars.js');
var uncompressString = tryRequire('../problems/6_uncompress_string.js');
var fibonacci = tryRequire('../problems/7_fibonacci.js');

describe('safeSpeedChange()', function () {
  it('should return boolean true if none of the speeds differ by more than 5, false otherwise', function () {
    assert.equal(safeSpeedChange([3, 3, 2, 6, 8, 7]), true);
    assert.equal(safeSpeedChange([3, 5, 9, 6, 8, 4]), true);
    assert.equal(safeSpeedChange([3, 3, 2, 6, 12, 10]), false);
    assert.equal(safeSpeedChange([8, 10, 4, 3, 2]), false);
  });
});


describe('isUniqueAnagram()', function () {
  it('should return boolean true the words are anagrams, false otherwise', function () {
    assert.equal(isUniqueAnagram('iceman', 'cinema'), true);
    assert.equal(isUniqueAnagram('abcd', 'adcb'), true);
    assert.equal(isUniqueAnagram('abcd', 'adxb'), false);
    assert.equal(isUniqueAnagram('abcd', 'abcdx'), false);
  });
});


describe('reverseHipsterfy()', function () {
  it('should return a string of all vowels except the last vowel removed from each word', function () {
    var result1 = 'prper';
    var result2 = 'prper tnic pnther';
    var result3 = 'btcamp prep';
    var result4 = 'twel flcker bnna';
    var result5 = 'rnner ncnda';
    var result6 = 'trtle chsbrger fres';

    assert.equal(reverseHipsterfy("proper"), result1);
    assert.equal(reverseHipsterfy("proper tonic panther"), result2);
    assert.equal(reverseHipsterfy("bootcamp prep"), result3);
    assert.equal(reverseHipsterfy("towel flicker banana"), result4);
    assert.equal(reverseHipsterfy("runner anaconda"), result5);
    assert.equal(reverseHipsterfy("turtle cheeseburger fries"), result6);
  });
});


describe('winningHand()', function () {
  it('should return the hand with the most points', function () {
    assert.equal(winningHand('JQKJ', 'QQJJ'), 'JQKJ');
    assert.equal(winningHand('KJKJ', 'QQQK'), 'QQQK');
  });

  it('should return DRAW if hands are equal', function () {
    assert.equal(winningHand('JKJJ', 'QQJJ'), 'DRAW');
    assert.equal(winningHand('KJKJ', 'QQQQ'), 'DRAW');
  });
});


describe('shiftChars()', function () {
  it('should return a string where all characters are shifted num times', function () {
    assert.equal(shiftChars('able', 1), 'bcmf');
    assert.equal(shiftChars('apple', 2), 'crrng');
    assert.equal(shiftChars('bootcamp', 3), 'errwfdps');
    assert.equal(shiftChars('zebra', 5), 'ejgwf');
  });
});


describe('uncompressString()', function () {
  it('should return an uncompressed version of the given string', function () {
    assert.equal(uncompressString('a2b4c1'), 'aabbbbc');
    assert.equal(uncompressString('b1o2t1'), 'boot');
    assert.equal(uncompressString('x3y1x2z4'), 'xxxyxxzzzz');
  });
});


describe('fibonacci()', function () {
  it('should return an array of the first n numbers of the fibonacci sequence', function () {
    assert.deepEqual(fibonacci(0), []);
    assert.deepEqual(fibonacci(1), [ 1 ]);
    assert.deepEqual(fibonacci(2), [ 1, 1 ]);
    assert.deepEqual(fibonacci(3), [ 1, 1, 2 ]);
    assert.deepEqual(fibonacci(5), [ 1, 1, 2, 3, 5 ]);
    assert.deepEqual(fibonacci(10), [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]);
  });
});

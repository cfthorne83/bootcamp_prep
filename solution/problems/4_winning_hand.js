/***********************************************************************
Write a function winningHand(hand1, hand2) that takes in two strings
representing a hand of 4 cards. Return the string of the hand with the
higher total score. If there is a tie, return 'DRAW'. Possible cards are
J, Q, K.

J = 1 point
Q = 2 points
K = 3 points

Examples:

winningHand('JQKJ', 'QQJJ'); // => 'JQKJ'
winningHand('KJKJ', 'QQQK'); // => 'QQQK'
winningHand('JKJJ', 'QQJJ'); // => 'DRAW'
winningHand('KJKJ', 'QQQQ'); // => 'DRAW'
***********************************************************************/

function handScore(string) {
  var value = {
    'J': 1,
    'Q': 2,
    'K': 3
  }

  var score = 0;

  for (var i = 0; i < string.length; i += 1) {
    var card = string[i];

    score += value[card];
  }

  return score;
}

function winningHand(hand1, hand2) {
  var score1 = handScore(hand1);
  var score2 = handScore(hand2);

  if (score1 > score2) {
    return hand1;
  } else if (score2 > score1) {
    return hand2;
  } else {
    return 'DRAW';
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = winningHand;

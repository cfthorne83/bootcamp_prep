/***********************************************************************
Write a function `reverseHipsterfy(sentence)` that takes in a sentence
and removes all vowels, except the last vowels of every word.

Examples:

reverseHipsterfy("proper"); // => 'prper'
reverseHipsterfy("proper tonic panther"); // => 'prper tnic pnther'
reverseHipsterfy("bootcamp prep"); // => 'btcamp prep'
reverseHipsterfy("towel flicker banana"); // => 'twel flcker bnna'
reverseHipsterfy("runner anaconda"); // => 'rnner ncnda'
reverseHipsterfy("turtle cheeseburger fries"); // => 'trtle chsbrger fres'
***********************************************************************/
const findVowelIndex = word => {
    let vowels = 'aeiou';

    for (let i = word.length - 1; i >= 0; i--){
        if (vowels.includes(word[i])){
            return i;
        }
    }
};


function reverseHipsterfy(sentence) {
    let vowels = 'aeiou';
    let newSent = sentence.split(' ');
    let newArr = [];
    let str = '';

    newSent.forEach(ele => {
       let vowelIndex = findVowelIndex(ele);

        for (let i = 0; i < ele.length; i++){
            if( i === vowelIndex){
                str += ele[i];
            }

            if (!vowels.includes(ele[i])){
                str += ele[i];
            }
        }

        newArr.push(str);
        str = '';
    })
    
    return newArr.join(' ');

}

console.log(reverseHipsterfy("proper tonic panther"))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverseHipsterfy;

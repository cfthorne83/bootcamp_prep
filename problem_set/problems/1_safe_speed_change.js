/***********************************************************************
Write a function safeSpeedChange(speeds) that takes in an array of speed
numbers. The function should return true if consecutive speeds in the
array differ by no more than 5, false otherwise.

Examples:

safeSpeedChange([3, 3, 2, 6, 8, 7]); //=> true
safeSpeedChange([3, 3, 2, 6, 12, 10]); // => false
safeSpeedChange([8, 10, 4, 3, 2]); // => false
***********************************************************************/

function safeSpeedChange(speeds) {
    let firstSpeed;
    let nextSpeed;

    for (let i = 0; i < speeds.length - 1; i++){
        firstSpeed = speeds[i];
        nextSpeed = speeds[i + 1];

        if (Math.abs(firstSpeed - nextSpeed) > 5){
            return false;
        }
    }
    return true;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = safeSpeedChange;

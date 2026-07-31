/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let currentAltitude = 0;
let highestAltitude = 0;

for(let change of gain){

    currentAltitude += change;

    highestAltitude = Math.max(highestAltitude, currentAltitude);
}

return highestAltitude;
    
};
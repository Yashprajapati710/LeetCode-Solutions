/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    let freq = {};

for(let ch of s){

    freq[ch] = (freq[ch] || 0) + 1 ;
}

let maxOdd = 0;
let minEven = Infinity;

for(let count of Object.values(freq)){

    if(count & 1){
        maxOdd = Math.max(maxOdd, count);
    }
    else{
        minEven = Math.min(minEven, count);
    }
}

return maxOdd - minEven;
    
};